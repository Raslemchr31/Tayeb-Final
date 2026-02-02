'use client';

import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { businessInfo } from '@/data/business';

export function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      value: businessInfo.phone,
      action: () => window.location.href = `tel:${businessInfo.phone}`,
    },
    {
      icon: MessageCircle,
      title: 'واتساب',
      value: 'راسلنا الآن',
      action: () => window.open(businessInfo.whatsapp, '_blank'),
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: businessInfo.email,
      action: () => window.location.href = `mailto:${businessInfo.email}`,
    },
    {
      icon: MapPin,
      title: 'العنوان',
      value: businessInfo.addressAr,
      action: () => {},
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      value: businessInfo.hoursAr,
      action: () => {},
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-tajawal font-bold text-gray-800 mb-4">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card
                key={index}
                className="contact-card cursor-pointer hover:shadow-xl transition-all"
                onClick={method.action}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-tajawal font-bold text-gray-800 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600" dir={method.icon === Phone ? 'ltr' : 'auto'}>
                    {method.value}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="whatsapp"
            size="lg"
            onClick={() => window.open(businessInfo.whatsapp, '_blank')}
          >
            <MessageCircle className="h-5 w-5" />
            ابدأ المحادثة على واتساب
          </Button>
        </div>
      </div>
    </section>
  );
}
