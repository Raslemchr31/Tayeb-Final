'use client';

import { Facebook, Instagram, Phone, Mail } from 'lucide-react';
import { businessInfo } from '@/data/business';
import { products } from '@/data/products';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-tajawal font-bold mb-4">
              Mr.Tayeb<span className="text-gold">∞</span>
            </h3>
            <p className="text-gray-400 mb-4">
              طاولات التفصيل القابلة للطي
              <br />
              صنع في الجزائر بجودة عالمية
            </p>
            <div className="flex gap-3">
              <a
                href={businessInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={businessInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-tajawal font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  المنتجات
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  المميزات
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  اتصل بنا
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-tajawal font-bold mb-4">منتجاتنا</h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.id}>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {product.nameAr}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-tajawal font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span className="text-sm" dir="ltr">{businessInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{businessInfo.email}</span>
              </li>
              <li className="text-gray-400 text-sm">
                {businessInfo.addressAr}
              </li>
              <li className="text-gray-400 text-sm">
                {businessInfo.hoursAr}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            © 2026 Mr.Tayeb∞. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-500 text-sm">
            صنع بـ ❤️ في الجزائر
          </p>
        </div>
      </div>
    </footer>
  );
}
