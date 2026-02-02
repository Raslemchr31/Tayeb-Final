'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { ProductModal } from '@/sections/ProductModal';
import type { Product } from '@/types';

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section id="products" className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-4xl md:text-5xl font-tajawal font-bold text-gray-800">
              منتجاتنا المميزة
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              اكتشف مجموعتنا من طاولات التفصيل عالية الجودة
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="product-card group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProduct(product)}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <Image
                      src={product.images[0]}
                      alt={product.nameAr}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.isLargeTable && (
                      <Badge variant="gold" className="absolute top-4 right-4">
                        XL
                      </Badge>
                    )}
                    {product.category === 'professional' && (
                      <Badge variant="gold" className="absolute top-4 right-4">
                        محترف
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <CardTitle className="text-xl md:text-2xl">{product.nameAr}</CardTitle>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-2">
                    {product.descriptionShortAr}
                  </p>

                  {/* Colors */}
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <div
                        key={color.value}
                        className="w-7 h-7 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform"
                        style={{ backgroundColor: color.value }}
                        title={color.nameAr}
                      />
                    ))}
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-3xl md:text-4xl font-tajawal font-bold text-primary">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    اطلب الآن
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
