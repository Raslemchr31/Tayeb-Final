'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { businessInfo } from '@/data/business';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-tajawal font-bold text-primary">
              Mr.Tayeb<span className="text-gold">∞</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-primary transition-colors font-semibold"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-primary transition-colors font-semibold"
            >
              المنتجات
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-primary transition-colors font-semibold"
            >
              المميزات
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors font-semibold"
            >
              اتصل بنا
            </button>
            <Button
              variant="whatsapp"
              size="sm"
              onClick={() => window.open(businessInfo.whatsapp, '_blank')}
            >
              <Phone className="h-4 w-4" />
              اطلب الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-right text-gray-700 hover:text-primary transition-colors font-semibold py-2"
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-right text-gray-700 hover:text-primary transition-colors font-semibold py-2"
              >
                المنتجات
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-right text-gray-700 hover:text-primary transition-colors font-semibold py-2"
              >
                المميزات
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-right text-gray-700 hover:text-primary transition-colors font-semibold py-2"
              >
                اتصل بنا
              </button>
              <Button
                variant="whatsapp"
                className="w-full"
                onClick={() => window.open(businessInfo.whatsapp, '_blank')}
              >
                <Phone className="h-5 w-5" />
                اطلب الآن
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
