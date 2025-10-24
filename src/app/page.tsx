"use client";

import Banner from "@/components/Banner";
import Countdown from "@/components/Countdown";
import { GalleryImage } from "@/components/GalleryImage";
import { GroomBride } from "@/components/GroomBride";
import { WeddingInfor } from "@/components/WeddingInfor";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
      </Suspense>
      <section
        id="story"
        aria-labelledby="story-heading"
        className="pt-6 sm:py-4 md:py-6 bg-gradient-to-b from-wedding-light to-wedding-gray100 mx-auto px-4 sm:px-6"
      >
        <GroomBride />
        <WeddingInfor />
        {/* Story Cards Carousel */}
        {/* Groom & Bride Profile Section */}
      </section>
      <Countdown />
      <GalleryImage />
    </main>
  );
}
