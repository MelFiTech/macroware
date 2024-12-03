import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Ticker from '@/components/sections/Ticker';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

export const metadata = {
  icons: {
    icon: '/favicon.ico',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Ticker />
      <Services />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
