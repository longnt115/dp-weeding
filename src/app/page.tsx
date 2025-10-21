'use client';

import Countdown from '@/components/Countdown';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import RSVPForm from '@/components/RSVPForm';
import WeddingGifts from '@/components/WeddingGifts';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <OurStory />
      <Countdown />
      {/* <Events /> */}
      {/* <LiveStream /> */}
      <RSVPForm />
      <WeddingGifts />
    </main>
  );
}
