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
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#f5f5f5] to-[#e8e8e8] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-wedding-dark rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <Container className="text-center relative z-10 w-full">
        {/* Hero Image with overlay */}
        <motion.div
          className="mb-12 mt-12 relative overflow-hidden rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-video bg-linear-to-br from-wedding-gold via-[#c9a961] to-[#8b7d3f] flex items-center justify-center text-9xl relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white text-center"
              >
                {guest && (
                  <div className="text-2xl md:text-3xl font-light">
                    <div className="uppercase pb-6 barlow-thin">
                      {" "}
                      Thư mời tiệc cưới{" "}
                    </div>
                    <h2 className="border-solid border-t-2 py-7 barlow-thin">
                      {" "}
                      Trân Trọng Kính Mời:{" "}
                    </h2>
                    <div className="alex-brush-regular border-dotted border-b-1 text-[2rem] md:text-5xl">
                      {guest}
                    </div>
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
