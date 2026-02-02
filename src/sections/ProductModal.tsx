'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { OrderForm } from '@/sections/OrderForm';
import { formatPrice } from '@/lib/utils';
import type { Product } from '@/types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const orderFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showOrderForm && orderFormRef.current) {
      orderFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showOrderForm]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left - Image Gallery */}
          <div>
            <div className="relative rounded-xl overflow-hidden mb-4">
              <Image
                src={product.images[currentImageIndex]}
                alt={product.nameAr}
                width={600}
                height={450}
                className="w-full h-96 object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    idx === currentImageIndex ? 'border-primary' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.nameAr} ${idx + 1}`}
                    width={100}
                    height={75}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Details */}
          <div className="space-y-6">
            <DialogHeader className="space-y-3">
              <DialogTitle className="text-3xl md:text-4xl font-tajawal">{product.nameAr}</DialogTitle>
              <p className="text-lg text-gray-600">{product.nameFr}</p>
            </DialogHeader>

            {/* Price */}
            <div className="py-4 border-y border-gray-200">
              <span className="text-4xl md:text-5xl font-tajawal font-bold text-primary">
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {product.descriptionLongAr}
            </p>

            {/* Colors */}
            <div className="space-y-4">
              <h4 className="text-lg md:text-xl font-tajawal font-semibold">الألوان المتاحة:</h4>
              <div className="flex gap-4">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color)}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full border-4 transition-all ${
                      selectedColor.value === color.value
                        ? 'border-primary scale-110 shadow-lg'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.nameAr}
                  />
                ))}
              </div>
              <p className="text-base text-gray-600">
                اللون المختار: <span className="font-semibold">{selectedColor.nameAr}</span>
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-lg md:text-xl font-tajawal font-semibold">المميزات:</h4>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl space-y-4">
              <h4 className="text-lg md:text-xl font-tajawal font-semibold">المواصفات:</h4>
              <div className="grid grid-cols-2 gap-4 text-base">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <span className="text-gray-600 block">{key}:</span>
                    <span className="font-semibold text-gray-800 block">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            {!showOrderForm ? (
              <Button
                size="lg"
                className="w-full"
                onClick={() => setShowOrderForm(true)}
              >
                اطلب الآن
              </Button>
            ) : (
              <div ref={orderFormRef}>
                <OrderForm
                  product={product}
                  selectedColor={selectedColor}
                  onSuccess={onClose}
                />
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
