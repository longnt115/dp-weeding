'use client';

import Events from '@/components/Events';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Container from '@/components/common/Container';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <OurStory />
      <Gallery />
      <Events />

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-gray-50 dark:bg-gray-800">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              RSVP
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto mb-4" />
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Please let us know if you can make it
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                RSVP form will be integrated here. Please check back soon!
              </p>
              <Button className="w-full" disabled>
                Form Coming Soon
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto mb-4" />
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Get in touch with any questions
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card hoverable>
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  hello@ourwedding.com
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card hoverable>
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  (555) 123-4567
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card hoverable>
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Romance City, State
                </p>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
