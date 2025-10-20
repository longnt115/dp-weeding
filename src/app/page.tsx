'use client';

import Contact from '@/components/Contact';
import Events from '@/components/Events';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import RSVPForm from '@/components/RSVPForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <OurStory />
      <Gallery />
      <Events />
      <RSVPForm />
      <Contact />
      <Footer />
    </main>
  );
}
