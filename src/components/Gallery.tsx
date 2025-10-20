'use client';

import { GalleryImage } from '@/types';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Container from './common/Container';

const galleryImages: GalleryImage[] = [
  { id: '1', src: '📷', alt: 'Engagement photo 1', album: 'engagement' },
  { id: '2', src: '📷', alt: 'Engagement photo 2', album: 'engagement' },
  { id: '3', src: '📷', alt: 'Pre-wedding photo 1', album: 'pre-wedding' },
  { id: '4', src: '📷', alt: 'Pre-wedding photo 2', album: 'pre-wedding' },
  { id: '5', src: '📷', alt: 'Couple photo 1', album: 'couple' },
  { id: '6', src: '📷', alt: 'Couple photo 2', album: 'couple' },
];

const albums = ['all', 'engagement', 'pre-wedding', 'couple'];

export default function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState('all');
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    setScrollSnaps(emblaApi.scrollSnapList());

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const filteredImages =
    selectedAlbum === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.album === selectedAlbum);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Gallery
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Beautiful moments we want to share with you
          </p>
        </motion.div>

        {/* Album Filter */}
        <motion.div
          className="flex gap-4 justify-center mb-12 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {albums.map((album) => (
            <motion.button
              key={album}
              onClick={() => setSelectedAlbum(album)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                selectedAlbum === album
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {album}
            </motion.button>
          ))}
        </motion.div>

        {/* Carousel */}
        <motion.div
          className="mb-8 overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {filteredImages.map((image) => (
                <div key={image.id} className="embla__slide">
                  <motion.div
                    className="w-full aspect-video bg-gradient-to-br from-amber-200 to-rose-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-9xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    {image.src}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Carousel Controls */}
        <motion.div
          className="flex gap-2 justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {scrollSnaps.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedIndex
                  ? 'bg-amber-600 w-8'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <motion.div
                className="aspect-square bg-gradient-to-br from-amber-200 to-rose-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-6xl hover:bg-gradient-to-tl transition-all"
                whileHover={{ scale: 1.1 }}
              >
                {image.src}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Embla Carousel Styles */}
      <style>{`
        .embla {
          width: 100%;
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
        }
      `}</style>
    </section>
  );
}
