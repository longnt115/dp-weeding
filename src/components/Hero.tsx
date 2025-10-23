"use client";
export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Container from "./common/Container";

export default function Hero() {
  const searchParams = useSearchParams();
  const guest = searchParams.get("guest");

  return (
    <section
      id="home"
      aria-label="Wedding invitation hero section"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-wedding-light to-[#e8e8e8] relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-10 right-5 sm:top-20 sm:right-20 w-40 h-40 sm:w-72 sm:h-72 bg-wedding-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-10 left-5 sm:bottom-20 sm:left-20 w-40 h-40 sm:w-72 sm:h-72 bg-wedding-dark rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        aria-hidden="true"
      />

      <Container className="text-center relative z-10 w-full">
        {/* Hero Image with overlay */}
        <motion.div
          className="mb-6 sm:mb-8 md:mb-12 mt-6 sm:mt-8 md:mt-12 relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[4/3] sm:aspect-video bg-gradient-to-br from-wedding-gold via-[#c9a961] to-[#8b7d3f] flex items-center justify-center relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-4 sm:p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white text-center w-full"
              >
                {guest && (
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light">
                    <p className="uppercase pb-3 sm:pb-4 md:pb-6 barlow-thin text-sm sm:text-base md:text-xl">
                      Thư mời tiệc cưới
                    </p>
                    <h1 className="border-solid border-t-2 py-4 sm:py-5 md:py-7 barlow-thin text-base sm:text-lg md:text-xl">
                      Trân Trọng Kính Mời:
                    </h1>
                    <p
                      className="alex-brush-regular border-dotted border-b text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-2 sm:py-3"
                      role="text"
                      aria-label={`Guest name: ${guest}`}
                    >
                      {guest}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
