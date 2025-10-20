'use client';

import Countdown from '@/components/Countdown';
import Events from '@/components/Events';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import LiveStream from '@/components/LiveStream';
import OurStory from '@/components/OurStory';
import RSVPForm from '@/components/RSVPForm';
import WeddingGifts from '@/components/WeddingGifts';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <OurStory />
      <Countdown />
      <Gallery />
      <Events />
      <LiveStream />
      <WeddingGifts />
      <RSVPForm />
    </main>
  );
}
