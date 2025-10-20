'use client';

import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Container from '@/components/common/Container';
import { scrollToSection } from '@/lib/utils';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
        <Container className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Sarah & John
          </h1>
          <p className="text-2xl md:text-3xl text-amber-600 mb-4">
            June 15, 2024
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Join us for our wedding celebration
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('rsvp')}>
              RSVP Now
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('story')}>
              Our Story
            </Button>
          </div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The journey of our love story
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card hoverable>
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                We Met
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our journey began on a beautiful summer evening when fate brought us together.
              </p>
            </Card>
            <Card hoverable>
              <div className="text-4xl mb-4">💑</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                We Fell in Love
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every moment spent together felt like a dream come true.
              </p>
            </Card>
            <Card hoverable>
              <div className="text-4xl mb-4">💍</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                He Proposed
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                The perfect moment when he asked the question we both wanted to hear.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Gallery
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Beautiful moments we want to share with you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-amber-200 to-rose-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center text-6xl"
              >
                📷
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Wedding Events
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Important dates and details
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                Ceremony
              </h3>
              <p className="text-amber-600 font-semibold mb-2">2:00 PM - June 15, 2024</p>
              <p className="text-gray-600 dark:text-gray-400">
                Garden Venue, 123 Love Street, Romance City
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                Join us as we say our vows and begin our journey as a married couple.
              </p>
            </Card>
            <Card>
              <div className="text-5xl mb-4">🍾</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                Reception
              </h3>
              <p className="text-amber-600 font-semibold mb-2">5:00 PM - June 15, 2024</p>
              <p className="text-gray-600 dark:text-gray-400">
                Grand Ballroom, 456 Celebration Ave, Romance City
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                Celebrate with us over dinner, dancing, and unforgettable memories.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-gray-50 dark:bg-gray-800">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              RSVP
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Please let us know if you can make it
            </p>
          </div>
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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Get in touch with any questions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Email
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                hello@ourwedding.com
              </p>
            </Card>
            <Card>
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Phone
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                (555) 123-4567
              </p>
            </Card>
            <Card>
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Location
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Romance City, State
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}
