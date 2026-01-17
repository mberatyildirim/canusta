#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Yemeksepeti HTML dosyasından menü verilerini ve görselleri çıkarır
"""
import json
import re
import sys
from pathlib import Path

def extract_menu_data(html_file):
    """HTML dosyasından menü verilerini çıkarır"""
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # window.__PRELOADED_STATE__ içindeki JSON'u bul - daha geniş arama
    match = re.search(r'window\.__PRELOADED_STATE__\s*=\s*({.*?"products".*?});', content, re.DOTALL)
    if not match:
        # Alternatif: Tüm JSON'u al
        match = re.search(r'window\.__PRELOADED_STATE__\s*=\s*({.+?})(?:\s*</script>|\s*;)', content, re.DOTALL)
    
    if not match:
        print("JSON verisi bulunamadı!")
        return None
    
    json_str = match.group(1)
    
    # JSON'u temizle - sonundaki gereksiz karakterleri kaldır
    json_str = json_str.rstrip(';').rstrip()
    
    try:
        data = json.loads(json_str)
        return data
    except json.JSONDecodeError as e:
        print(f"JSON parse hatası: {e}")
        print(f"İlk 500 karakter: {json_str[:500]}")
        # Manuel olarak products bölümünü bul
        return extract_products_manual(content)

def extract_products_manual(content):
    """HTML içinden manuel olarak ürün bilgilerini çıkarır"""
    products = []
    
    # Görselleri bul
    image_pattern = r'https://images\.deliveryhero\.io/image/fd-tr/LH/dotr-([^"?]+)\.(jpg|jpeg|png)'
    images = re.findall(image_pattern, content)
    
    # Ürün isimlerini bul (JSON içinde)
    product_pattern = r'"name"\s*:\s*"([^"]+)"'
    names = re.findall(product_pattern, content)
    
    print(f"Bulunan görseller: {len(images)}")
    print(f"Bulunan isimler: {len(names)}")
    
    return {'products': [], 'images': images, 'names': names}

def extract_products(data):
    """Menü ürünlerini çıkarır"""
    products = []
    
    if isinstance(data, dict):
        # Vendor data içindeki products'ı bul
        if 'vendor' in data and 'data' in data['vendor']:
            vendor_data = data['vendor']['data']
            
            # Products listesini bul
            if 'products' in vendor_data:
                for product in vendor_data['products']:
                    products.append({
                        'name': product.get('name', ''),
                        'description': product.get('description', ''),
                        'image': product.get('image', ''),
                        'category': product.get('category', {}).get('name', '') if isinstance(product.get('category'), dict) else '',
                        'price': product.get('price', 0)
                    })
    elif isinstance(data, dict) and 'products' in data:
        # Direkt products listesi varsa
        for product in data['products']:
            products.append({
                'name': product.get('name', ''),
                'description': product.get('description', ''),
                'image': product.get('image', ''),
                'category': product.get('category', {}).get('name', '') if isinstance(product.get('category'), dict) else '',
                'price': product.get('price', 0)
            })
    
    return products

def main():
    html_file = Path(__file__).parent.parent / "Can Haydar Usta, Istanbul Online Sipariş, Menü, Fiyatları - Yemeksepeti.html"
    
    if not html_file.exists():
        print(f"Dosya bulunamadı: {html_file}")
        return
    
    print("Menü verileri çıkarılıyor...")
    data = extract_menu_data(html_file)
    
    if data:
        products = extract_products(data)
        print(f"\n{len(products)} ürün bulundu!")
        
        # JSON olarak kaydet
        output_file = Path(__file__).parent.parent / "data" / "yemeksepeti-menu.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(products, f, ensure_ascii=False, indent=2)
        
        print(f"\nVeriler kaydedildi: {output_file}")
        
        # İlk 10 ürünü göster
        print("\nİlk 10 ürün:")
        for i, product in enumerate(products[:10], 1):
            print(f"{i}. {product['name']} - {product['category']}")
            if product['image']:
                print(f"   Görsel: {product['image']}")
    else:
        print("Veri çıkarılamadı!")

if __name__ == "__main__":
    main()
