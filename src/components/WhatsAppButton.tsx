'use client';

import { MessageCircle } from 'lucide-react';
import { businessInfo } from '@/data/business';

export function WhatsAppButton() {
  return (
    <a
      href={businessInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  );
}
