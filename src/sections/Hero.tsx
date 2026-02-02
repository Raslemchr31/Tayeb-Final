'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Phone, ShoppingBag, Star, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { businessInfo, trustBadges } from '@/data/business';
import gsap from 'gsap';

export function Hero() {
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current && titleRef.current && buttonsRef.current) {
      gsap.from(logoRef.current, {
        scale: 0.8,
        rotation: -10,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out',
      });

      gsap.from(titleRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3,
      });

      gsap.from(buttonsRef.current.children, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'bounce.out',
        delay: 0.8,
      });
    }
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-b from-skyblue to-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Side - Content */}
          <div className="text-center lg:text-right">
            {/* Logo */}
            <div ref={logoRef} className="flex justify-center lg:justify-end mb-6">
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-tajawal font-extrabold text-primary">
                  Mr.Tayeb<span className="text-gold">∞</span>
                </h1>
                <Badge variant="gold" className="absolute -top-2 -left-2">
                  <Star className="h-4 w-4 fill-white" />
                </Badge>
              </div>
            </div>

            {/* Title */}
            <div ref={titleRef} className="mb-8 space-y-4">
              <h2 className="text-3xl md:text-5xl font-tajawal font-bold text-gray-800 leading-tight">
                طاولات التفصيل القابلة <span className="text-primary">للطي</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-2">
                <span className="block">حلول مبتكرة للخياطة المنزلية والمهنية</span>
                <span className="block">صنع في الجزائر بجودة عالمية</span>
              </p>
            </div>

            {/* CTAs */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end mb-8">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={() => window.open(businessInfo.whatsapp, '_blank')}
              >
                <Phone className="h-5 w-5" />
                اطلب عبر واتساب
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToProducts}
              >
                <ShoppingBag className="h-5 w-5" />
                تصفح المنتجات
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              <Badge variant="default" className="gap-2">
                <Truck className="h-4 w-4" />
                توصيل 58 ولاية
              </Badge>
              <Badge variant="gold" className="gap-2">
                <Shield className="h-4 w-4" />
                ضمان عامين
              </Badge>
              <Badge variant="default" className="gap-2">
                <Star className="h-4 w-4" />
                +5000 عميل راضٍ
              </Badge>
            </div>
          </div>

          {/* Left Side - Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/home-table-front.jpg"
                alt="طاولة تفصيل منزلية قابلة للطي"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg">
                <p className="text-sm text-gray-600">ابتداءً من</p>
                <p className="text-3xl font-tajawal font-bold text-primary">15,000 دج</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
