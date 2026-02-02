import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { businessInfo } from "@/data/business";

export const metadata: Metadata = {
  title: "Mr.Tayeb∞ - طاولات التفصيل القابلة للطي | Tables de Couture Algérie",
  description: "طاولات تفصيل قابلة للطي عالية الجودة، صنع في الجزائر. توصيل لجميع الولايات، دفع عند الاستلام، ضمان عامين.",
  keywords: ["طاولات تفصيل", "أثاث", "الجزائر", "table couture", "meuble algérie"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&family=Tajawal:wght@500;700;800&display=swap" rel="stylesheet" />
        <Script id="fb-pixel" strategy="afterInteractive">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${businessInfo.facebookPixelId}');fbq('track','PageView');`}</Script>
      </head>
      <body className="font-cairo">{children}</body>
    </html>
  );
}
