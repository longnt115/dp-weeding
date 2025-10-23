"use client";
import { motion } from "framer-motion";
import Button from "./common/Button";
import Container from "./common/Container";

export default function WeddingGifts() {
  const gifts = [
    {
      icon: "💳",
      title: "Bank Transfer",
      description: "Kirim hadiah langsung ke rekening kami",
      details: "BCA: 1234567890\nAtas Nama: Sarah & John",
    },
    {
      icon: "🎁",
      title: "Wishlist",
      description: "Pilih hadiah dari wishlist kami",
      details: "Kunjungi situs belanja favorit Anda",
    },
    {
      icon: "🏠",
      title: "Direct to Venue",
      description: "Bawa langsung ke tempat resepsi",
      details: "Romance City, Indonesia",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-white px-4 sm:px-6">
      <Container>
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-wedding-dark">
            Wedding Gifts
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-wedding-gold to-[#c9a961] mx-auto mb-3 sm:mb-4" />
          <p className="text-base sm:text-lg text-wedding-secondary max-w-2xl mx-auto px-4">
            Kehadiran Anda adalah hadiah terbesar bagi kami. Namun jika Anda
            ingin memberikan hadiah, berikut beberapa pilihan
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-wedding-light to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-wedding-border">
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-wedding-gold to-[#c9a961] rounded-t-2xl" />
                <div className="text-5xl mb-4">{gift.icon}</div>
                <h3 className="text-2xl font-bold text-wedding-dark mb-3">
                  {gift.title}
                </h3>
                <p className="text-wedding-secondary mb-4 flex-grow">
                  {gift.description}
                </p>
                <p className="text-sm text-gray-400 whitespace-pre-line font-mono mb-6">
                  {gift.details}
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-linear-to-r from-wedding-light to-gray-100 rounded-2xl p-8 md:p-12 text-center border border-wedding-gold"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-wedding-dark mb-3">
            💝 Terima Kasih Atas Dukungan Anda
          </h3>
          <p className="text-wedding-secondary mb-6 max-w-2xl mx-auto">
            Terima kasih telah menjadi bagian dari perjalanan cinta kami.
            Kehadiran dan dukungan Anda berarti lebih dari segalanya.
          </p>
          <Button size="lg">View Wishlist</Button>
        </motion.div>
      </Container>
    </section>
  );
}
