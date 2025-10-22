"use client";

import Countdown from "@/components/Countdown";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <OurStory />
      <Countdown />
      {/* <Events /> */}
      {/* <LiveStream /> */}
      {/* <RSVPForm />
      <WeddingGifts /> */}
    </main>
  );
}
