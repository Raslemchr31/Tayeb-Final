import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { businessInfo } from "@/data/business";

export const metadata: Metadata = {
  title: "Mr.Tayeb∞ - طاولات التفصيل القابلة للطي | Tables de Couture Algérie",
  description: "طاولات تفصيل قابلة للطي عالية الجودة، صنع في الجزائر. توصيل لجميع الولايات، دفع عند الاستلام، ضمان عامين. Tables de couture pliables de qualité supérieure.",
  keywords: ["طاولات تفصيل", "أثاث", "الجزائر", "table couture", "meuble algérie", "طاولة خياطة", "foldable cutting table"],
  authors: [{ name: "Mr.Tayeb∞" }],
  creator: "Mr.Tayeb∞",
  publisher: "Mr.Tayeb∞",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    title: "Mr.Tayeb∞ - Tables de Couture Pliables",
    description: "Tables de couture de qualité supérieure, fabriquées en Algérie. Livraison dans les 58 wilayas.",
    type: "website",
    locale: "ar_DZ",
    siteName: "Mr.Tayeb∞",
    images: [
      {
        url: "/images/home-table-front.jpg",
        width: 800,
        height: 600,
        alt: "طاولة تفصيل قابلة للطي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mr.Tayeb∞ - طاولات التفصيل القابلة للطي",
    description: "طاولات تفصيل عالية الجودة، صنع في الجزائر",
    images: ["/images/home-table-front.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.mr-tayeb.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${businessInfo.facebookPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Structured Data - LocalBusiness */}
        <Script id="structured-data-business" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mr.Tayeb∞",
            "image": "https://www.mr-tayeb.com/images/home-table-front.jpg",
            "telephone": "+213771640848",
            "email": "m.t.infinity.01@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Boukadir",
              "addressLocality": "Chlef",
              "addressCountry": "DZ"
            },
            "openingHours": "Sa-Th 09:00-18:00",
            "priceRange": "15000-30000 DZD"
          })}
        </Script>
      </head>
      <body className="font-cairo antialiased">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&family=Tajawal:wght@500;700;800&display=swap');
        `}</style>
        {children}
      </body>
    </html>
  );
}
