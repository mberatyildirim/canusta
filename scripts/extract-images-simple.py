#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Yemeksepeti HTML'den görselleri ve ürün isimlerini çıkarır
"""
import json
import re
from pathlib import Path

def extract_all_data(html_file):
    """HTML'den tüm görselleri ve ürün bilgilerini çıkarır"""
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # DeliveryHero görsellerini bul
    image_pattern = r'https://images\.deliveryhero\.io/image/fd-tr/LH/dotr-([^"?]+)\.(jpg|jpeg|png)'
    images = re.findall(image_pattern, content)
    
    # Ürün isimlerini bul (JSON içinde "name" alanları)
    # Önce products bölümünü bul
    products_section = re.search(r'"products"\s*:\s*\[(.*?)\]', content, re.DOTALL)
    
    products = []
    if products_section:
        # Her ürün objesini bul
        product_objects = re.findall(r'\{[^{}]*"name"[^{}]*\}', products_section.group(1), re.DOTALL)
        
        for obj_str in product_objects:
            # Name'i çıkar
            name_match = re.search(r'"name"\s*:\s*"([^"]+)"', obj_str)
            # Image'i çıkar
            image_match = re.search(r'"image"\s*:\s*"([^"]+)"', obj_str)
            # Category name'i çıkar
            category_match = re.search(r'"category"\s*:\s*\{[^}]*"name"\s*:\s*"([^"]+)"', obj_str)
            
            if name_match:
                products.append({
                    'name': name_match.group(1),
                    'image': image_match.group(1) if image_match else '',
                    'category': category_match.group(1) if category_match else ''
                })
    
    return {
        'images': list(set([f"{img[0]}.{img[1]}" for img in images])),
        'products': products
    }

def main():
    html_file = Path(__file__).parent.parent / "Can Haydar Usta, Istanbul Online Sipariş, Menü, Fiyatları - Yemeksepeti.html"
    
    if not html_file.exists():
        print(f"Dosya bulunamadı: {html_file}")
        return
    
    print("Veriler çıkarılıyor...")
    data = extract_all_data(html_file)
    
    # JSON olarak kaydet
    output_file = Path(__file__).parent.parent / "data" / "yemeksepeti-data.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"\n{len(data['images'])} görsel bulundu:")
    for img in data['images'][:10]:
        print(f"  - {img}")
    
    print(f"\n{len(data['products'])} ürün bulundu:")
    for product in data['products'][:10]:
        print(f"  - {product['name']}")
        if product['image']:
            print(f"    Görsel: {product['image'][:80]}...")
    
    print(f"\nVeriler kaydedildi: {output_file}")

if __name__ == "__main__":
    main()
