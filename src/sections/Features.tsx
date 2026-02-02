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
    <section id="features" className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-4xl md:text-5xl font-tajawal font-bold text-gray-800">
            لماذا تختارنا؟
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            نقدم لك أفضل الخدمات والمنتجات عالية الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card key={feature.id} className="feature-card border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary mb-2">
                    <Icon className="h-10 w-10" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-tajawal font-bold text-gray-800">
                    {feature.titleAr}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
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
