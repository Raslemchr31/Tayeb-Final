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
      <DialogContent className="max-w-6xl p-0">
        <div className="grid md:grid-cols-2 gap-6 p-6">
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
          <div>
            <DialogHeader>
              <DialogTitle className="text-3xl mb-2">{product.nameAr}</DialogTitle>
              <p className="text-gray-600">{product.nameFr}</p>
            </DialogHeader>

            {/* Price */}
            <div className="my-6">
              <span className="text-4xl font-tajawal font-bold text-primary">
                {formatPrice(product.price)}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.descriptionLongAr}
            </p>

            {/* Colors */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">الألوان المتاحة:</h4>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-4 transition-all ${
                      selectedColor.value === color.value
                        ? 'border-primary scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.nameAr}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                اللون المختار: {selectedColor.nameAr}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">المميزات:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-3">المواصفات:</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-gray-600">{key}:</span>
                    <span className="font-semibold mr-2">{value}</span>
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
