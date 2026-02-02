import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Products } from '@/sections/Products';
import { Features } from '@/sections/Features';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
