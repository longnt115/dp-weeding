'use client';

import { TimelineEvent } from '@/types';
import { motion } from 'framer-motion';
import Card from './common/Card';
import Container from './common/Container';

const timelineEvents: TimelineEvent[] = [
  {
    year: '2018',
    title: 'We Met',
    description: 'Our journey began on a beautiful summer evening when fate brought us together at a coffee shop in the city.',
  },
  {
    year: '2020',
    title: 'We Fell in Love',
    description: 'Every moment spent together felt like a dream come true. We knew this was something special.',
  },
  {
    year: '2023',
    title: 'He Proposed',
    description: 'The perfect moment when he asked the question we both wanted to hear under the stars.',
  },
  {
    year: '2024',
    title: 'We Say "I Do"',
    description: 'Now we celebrate our love and commitment surrounded by our loved ones.',
  },
];

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
            Our Story
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey of love, laughter, and beautiful moments that led us here
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline line */}
              {index < timelineEvents.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-px h-32 bg-gradient-to-b from-amber-300 to-transparent" />
              )}

              {/* Timeline dot */}
              <motion.div
                className="relative z-10 mb-6"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
              </motion.div>

              {/* Card */}
              <Card className="h-full">
                <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2">
                  {event.year}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {event.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional story section */}
        <motion.div
          className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-square bg-gradient-to-br from-amber-200 to-rose-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center text-7xl">
              💕
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Love Story
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                From the moment we met, we knew our lives would never be the same. Every laugh, every adventure, 
                and every quiet moment together has brought us closer to this special day.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We are grateful for everyone who has supported us on this journey and we can&apos;t wait to celebrate 
                our love with you.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
