import { BusinessInfo, TrustBadge } from '@/types';

export const businessInfo: BusinessInfo = {
  name: 'Mr.Tayeb∞',
  phone: '+213 771 64 08 48',
  whatsapp: 'https://wa.me/213771640848',
  email: 'm.t.infinity.01@gmail.com',
  address: 'Boukadir, Chlef, Algeria',
  addressAr: 'بوقادير، ولاية الشلف، الجزائر',
  hours: 'Saturday - Thursday: 9:00 AM - 6:00 PM',
  hoursAr: 'السبت - الخميس: 9:00 - 18:00',
  facebook: 'https://facebook.com/Mr.Tayeb1infinity',
  instagram: 'https://instagram.com/mr.tayeb3',
  facebookPixelId: '1643975840073551',
};

export const trustBadges: TrustBadge[] = [
  {
    id: 'delivery',
    textAr: 'توصيل سريع 58 ولاية | الدفع عند الإستلام',
    textFr: 'Livraison Rapide 58 Wilayas | Paiement à la livraison',
    icon: 'truck',
  },
  {
    id: 'warranty',
    textAr: 'ضمان لمدة عامين',
    textFr: 'Garantie 2 Ans',
    icon: 'shield-check',
  },
  {
    id: 'made-in-algeria',
    textAr: 'صنع في الجزائر',
    textFr: 'Fabriqué en Algérie',
    icon: 'map-pin',
  },
  {
    id: 'support',
    textAr: 'خدمة العملاء 7/7',
    textFr: 'Service Client 7/7',
    icon: 'headphones',
  },
  {
    id: 'trusted',
    textAr: 'موثوق به من قبل أكثر من 5000 منزل جزائري',
    textFr: 'Rejoint par +5000 foyers algériens',
    icon: 'users',
  },
];

export const whatsappMessage = (productName: string): string => {
  return `مرحبا، أريد معلومات حول ${productName}`;
};

export const whatsappOrderMessage = (productName: string, color: string, price: number): string => {
  return `مرحبا، أود طلب ${productName} باللون ${color} بسعر ${price} دج`;
};
