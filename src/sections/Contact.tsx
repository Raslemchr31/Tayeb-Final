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
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'واتساب',
      value: 'راسلنا الآن',
      action: () => window.open(businessInfo.whatsapp, '_blank'),
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: businessInfo.email,
      action: () => window.location.href = `mailto:${businessInfo.email}`,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      icon: MapPin,
      title: 'العنوان',
      value: businessInfo.addressAr,
      action: () => {},
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      value: businessInfo.hoursAr,
      action: () => {},
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-tajawal font-bold text-gray-800">
            تواصل معنا
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            نحن هنا للإجابة على جميع استفساراتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card
                key={index}
                className="contact-card cursor-pointer hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group"
                onClick={method.action}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${method.bgColor} ${method.iconColor} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-10 w-10" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-tajawal font-bold text-gray-800">
                    {method.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed" dir={method.icon === Phone ? 'ltr' : 'auto'}>
                    {method.value}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="whatsapp"
            size="lg"
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl"
            onClick={() => window.open(businessInfo.whatsapp, '_blank')}
          >
            <MessageCircle className="h-6 w-6" />
            ابدأ المحادثة على واتساب
          </Button>
        </div>
      </div>
    </section>
  );
}
