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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <Card key={feature.id} className="feature-card border-2 border-transparent hover:border-primary hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary text-white mb-1 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="h-8 w-8" strokeWidth={2.5} fill="currentColor" />
                  </div>
                  <h3 className="text-lg md:text-xl font-tajawal font-bold text-gray-800">
                    {feature.titleAr}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
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
