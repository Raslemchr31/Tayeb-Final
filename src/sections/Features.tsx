'use client';

import { Sparkles, Truck, MapPin, ShieldCheck, Wrench, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { features } from '@/data/features';

const iconMap: Record<string, any> = {
  sparkles: Sparkles,
  truck: Truck,
  'map-pin': MapPin,
  'shield-check': ShieldCheck,
  wrench: Wrench,
  headphones: Headphones,
};

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tajawal font-bold text-gray-800 mb-4">
            لماذا تختارنا؟
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم لك أفضل الخدمات والمنتجات عالية الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card key={feature.id} className="feature-card border-2 border-transparent hover:border-primary transition-all">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-tajawal font-bold text-gray-800 mb-3">
                    {feature.titleAr}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.descriptionAr}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
