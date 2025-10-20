'use client';

import { motion } from 'framer-motion';
import Container from './common/Container';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <Container className="text-center relative z-10 w-full">
        {/* Hero Image with overlay */}
        <motion.div
          className="mb-12 relative overflow-hidden rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-video bg-gradient-to-br from-amber-200 via-rose-200 to-pink-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 flex items-center justify-center text-9xl relative">
            📷
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white text-center"
              >
                <h2 className="text-2xl md:text-3xl font-light">Thursday, March 11th, 2021</h2>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
