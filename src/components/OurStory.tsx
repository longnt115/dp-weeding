'use client';
import { motion } from 'framer-motion';
import Container from './common/Container';

export default function OurStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="story" className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Love Story
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey of love, laughter, and beautiful moments that led us here
          </p>
        </motion.div>

        {/* Story Cards Carousel */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-amber-200 to-rose-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-8xl relative">
                👰💍
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Groom & Bride Profile Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {/* Groom */}
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-amber-200 to-yellow-200 dark:from-gray-600 dark:to-gray-500 flex items-center justify-center text-7xl">
                  🤵
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Groom
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Nama lengkap mempelai</p>
            </motion.div>

            {/* Bride */}
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-200 dark:from-gray-600 dark:to-gray-500 flex items-center justify-center text-7xl">
                  👰
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Bride
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Nama lengkap mempelai</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Events Cards Section */}
        <motion.div
          className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Akad Nikah Card */}
            <motion.div
              className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Akad Nikah
              </h3>
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="block text-sm font-semibold text-gray-500 dark:text-gray-500 mb-1">CEREMONY</span>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Thursday, March 11th, 2021</span>
                </p>
                <p className="text-amber-600 dark:text-amber-400 text-xl font-bold">
                  07.00 WIB
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-600">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Akad nikah akan dilaksanakan di Mesjid Baitus Salam dengan dihadiri oleh keluarga dan sahabat terdekat.
                </p>
              </div>
            </motion.div>

            {/* Resepsi Nikah Card */}
            <motion.div
              className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Resepsi Nikah
              </h3>
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="block text-sm font-semibold text-gray-500 dark:text-gray-500 mb-1">RECEPTION</span>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Thursday, March 11th, 2021</span>
                </p>
                <p className="text-amber-600 dark:text-amber-400 text-xl font-bold">
                  18.00 WIB
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-600">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Acara resepsi akan diselenggarakan dengan suasana yang meriah, penuh dengan kebersamaan dan kebahagiaan.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
