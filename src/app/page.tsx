import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyBookingBar from '@/components/StickyBookingBar';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <StickyBookingBar />
      <ScrollToTop />
    </main>
  );
}
