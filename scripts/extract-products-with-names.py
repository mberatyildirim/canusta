#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Yemeksepeti HTML'den ürün ID'lerini ve isimlerini çıkarır
"""
import json
import re
from pathlib import Path

def extract_products_with_names(html_file):
    """HTML'den ürün ID'lerini ve isimlerini çıkarır"""
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    products = []
    
    # JSON içindeki products array'ini bul
    # window.__PRELOADED_STATE__ içinde products var
    match = re.search(r'window\.__PRELOADED_STATE__\s*=\s*({.+?});', content, re.DOTALL)
    
    if match:
        json_str = match.group(1)
        
        # JSON'u parse etmeye çalış
        try:
            # Önce products bölümünü bul
            products_match = re.search(r'"products"\s*:\s*\[(.*?)\]', json_str, re.DOTALL)
            
            if products_match:
                products_section = products_match.group(1)
                
                # Her ürün objesini bul - daha dikkatli regex
                # Ürün objeleri { ile başlar ve } ile biter
                product_pattern = r'\{"id":(\d+),.*?"name":"([^"]+)"'
                matches = re.finditer(product_pattern, products_section, re.DOTALL)
                
                for match in matches:
                    product_id = match.group(1)
                    product_name = match.group(2)
                    
                    # Image URL'i de bul
                    # Ürün objesi içinde image field'ını bul
                    product_obj_start = match.start()
                    # Bu ürün objesinin sonunu bul
                    brace_count = 0
                    obj_start = products_section.rfind('{', 0, product_obj_start)
                    obj_end = obj_start
                    for i in range(obj_start, len(products_section)):
                        if products_section[i] == '{':
                            brace_count += 1
                        elif products_section[i] == '}':
                            brace_count -= 1
                            if brace_count == 0:
                                obj_end = i + 1
                                break
                    
                    product_obj = products_section[obj_start:obj_end]
                    
                    # Image URL'i bul
                    image_match = re.search(r'"image":"([^"]+)"', product_obj)
                    image_url = image_match.group(1) if image_match else f"https://images.deliveryhero.io/image/fd-tr/Products/{product_id}.jpg"
                    
                    products.append({
                        'id': product_id,
                        'name': product_name,
                        'image': image_url
                    })
        except Exception as e:
            print(f"Parse hatası: {e}")
    
    # Alternatif yöntem: Direkt HTML içinde arama
    if not products:
        # "id":123,"name":"Ürün Adı" pattern'ini bul
        pattern = r'"id"\s*:\s*(\d+)\s*,\s*[^}]*?"name"\s*:\s*"([^"]+)"'
        matches = re.finditer(pattern, content)
        
        seen_ids = set()
        for match in matches:
            product_id = match.group(1)
            product_name = match.group(2)
            
            # Duplicate kontrolü
            if product_id not in seen_ids and product_name and len(product_name) > 2:
                seen_ids.add(product_id)
                products.append({
                    'id': product_id,
                    'name': product_name,
                    'image': f"https://images.deliveryhero.io/image/fd-tr/Products/{product_id}.jpg"
                })
    
    return products

def match_with_menu(products, menu_file):
    """Yemeksepeti ürünlerini menü JSON'u ile eşleştir"""
    with open(menu_file, 'r', encoding='utf-8') as f:
        menu_data = json.load(f)
    
    # Menüdeki tüm ürünleri topla
    menu_items = []
    for category in menu_data['categories']:
        for item in category['items']:
            menu_items.append(item)
    
    # Eşleştirme yap
    mapping = {}
    
    for menu_item in menu_items:
        # Tam eşleşme
        for product in products:
            if product['name'].lower().strip() == menu_item.lower().strip():
                mapping[menu_item] = product['id']
                break
        
        # Eğer tam eşleşme yoksa, kısmi eşleşme dene
        if menu_item not in mapping:
            menu_lower = menu_item.lower().strip()
            for product in products:
                product_lower = product['name'].lower().strip()
                
                # Önemli kelimeleri çıkar ve karşılaştır
                menu_words = set(menu_lower.replace('(', '').replace(')', '').split())
                product_words = set(product_lower.replace('(', '').replace(')', '').split())
                
                # Ortak kelimeler varsa
                common_words = menu_words.intersection(product_words)
                if len(common_words) >= 2:  # En az 2 ortak kelime
                    mapping[menu_item] = product['id']
                    break
    
    return mapping

def main():
    html_file = Path(__file__).parent.parent / "Can Haydar Usta, Istanbul Online Sipariş, Menü, Fiyatları - Yemeksepeti.html"
    menu_file = Path(__file__).parent.parent / "data" / "menu.json"
    
    if not html_file.exists():
        print(f"HTML dosyası bulunamadı: {html_file}")
        return
    
    if not menu_file.exists():
        print(f"Menü dosyası bulunamadı: {menu_file}")
        return
    
    print("Ürünler çıkarılıyor...")
    products = extract_products_with_names(html_file)
    
    print(f"\n{len(products)} ürün bulundu!")
    print("\nİlk 20 ürün:")
    for i, product in enumerate(products[:20], 1):
        print(f"{i}. {product['name']} (ID: {product['id']})")
    
    print("\nMenü ile eşleştiriliyor...")
    mapping = match_with_menu(products, menu_file)
    
    print(f"\n{len(mapping)} ürün eşleştirildi!")
    print("\nEşleştirmeler:")
    for menu_item, product_id in sorted(mapping.items()):
        print(f"  {menu_item} -> {product_id}")
    
    # JSON olarak kaydet
    output_file = Path(__file__).parent.parent / "data" / "product-image-mapping.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump({
            'mappings': mapping,
            'all_products': products
        }, f, ensure_ascii=False, indent=2)
    
    print(f"\nMapping kaydedildi: {output_file}")

if __name__ == "__main__":
    main()
