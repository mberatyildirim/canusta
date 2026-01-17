#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Yemeksepeti HTML'den ürün ID'lerini ve görselleri çıkarır
"""
import json
import re
from pathlib import Path

def extract_products_with_images(html_file):
    """HTML'den ürün ID'lerini ve görselleri çıkarır"""
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    products = []
    
    # DeliveryHero görsel URL'lerini bul: https://images.deliveryhero.io/image/fd-tr/Products/{ID}.jpg
    image_pattern = r'https://images\.deliveryhero\.io/image/fd-tr/Products/(\d+)\.jpg'
    product_ids = re.findall(image_pattern, content)
    
    # Ürün isimlerini ve ID'lerini eşleştir
    # JSON içinde products array'ini bul
    products_section = re.search(r'"products"\s*:\s*\[(.*?)\]', content, re.DOTALL)
    
    if products_section:
        # Her ürün objesini bul
        product_blocks = re.findall(r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}', products_section.group(1), re.DOTALL)
        
        for block in product_blocks:
            # ID'yi bul
            id_match = re.search(r'"id"\s*:\s*(\d+)', block)
            # Name'i bul
            name_match = re.search(r'"name"\s*:\s*"([^"]+)"', block)
            # Image URL'i bul
            image_match = re.search(r'"image"\s*:\s*"([^"]+)"', block)
            
            if id_match and name_match:
                product_id = id_match.group(1)
                product_name = name_match.group(1)
                
                # Görsel URL'i oluştur
                if image_match:
                    image_url = image_match.group(1)
                else:
                    # ID'den görsel URL'i oluştur
                    image_url = f"https://images.deliveryhero.io/image/fd-tr/Products/{product_id}.jpg"
                
                products.append({
                    'id': product_id,
                    'name': product_name,
                    'image': image_url
                })
    
    # Eğer products bulunamazsa, sadece ID'lerden oluştur
    if not products and product_ids:
        unique_ids = list(set(product_ids))
        for pid in unique_ids:
            products.append({
                'id': pid,
                'name': f'Product {pid}',
                'image': f"https://images.deliveryhero.io/image/fd-tr/Products/{pid}.jpg"
            })
    
    return products

def main():
    html_file = Path(__file__).parent.parent / "Can Haydar Usta, Istanbul Online Sipariş, Menü, Fiyatları - Yemeksepeti.html"
    
    if not html_file.exists():
        print(f"Dosya bulunamadı: {html_file}")
        return
    
    print("Ürün görselleri çıkarılıyor...")
    products = extract_products_with_images(html_file)
    
    # Mapping oluştur - ürün ismine göre görsel URL'i
    mapping = {}
    for product in products:
        mapping[product['name']] = product['image']
    
    # JSON olarak kaydet
    output_file = Path(__file__).parent.parent / "data" / "product-images.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump({
            'mappings': mapping,
            'products': products
        }, f, ensure_ascii=False, indent=2)
    
    print(f"\n{len(products)} ürün bulundu!")
    print("\nİlk 20 ürün:")
    for i, product in enumerate(products[:20], 1):
        print(f"{i}. {product['name']}")
        print(f"   Görsel: {product['image']}")
    
    print(f"\nMapping kaydedildi: {output_file}")

if __name__ == "__main__":
    main()
