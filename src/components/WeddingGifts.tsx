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
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#3a3a3a]">
            Wedding Gifts
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#d4af37] to-[#c9a961] mx-auto mb-4" />
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Kehadiran Anda adalah hadiah terbesar bagi kami. Namun jika Anda
            ingin memberikan hadiah, berikut beberapa pilihan
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
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
              <div className="bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-[#e0e0e0]">
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#c9a961] rounded-t-2xl" />
                <div className="text-5xl mb-4">{gift.icon}</div>
                <h3 className="text-2xl font-bold text-[#3a3a3a] mb-3">
                  {gift.title}
                </h3>
                <p className="text-[#666666] mb-4 flex-grow">
                  {gift.description}
                </p>
                <p className="text-sm text-[#999999] whitespace-pre-line font-mono mb-6">
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
          className="bg-gradient-to-r from-[#f5f5f5] to-[#e8e8e8] rounded-2xl p-8 md:p-12 text-center border border-[#d4af37]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#3a3a3a] mb-3">
            💝 Terima Kasih Atas Dukungan Anda
          </h3>
          <p className="text-[#666666] mb-6 max-w-2xl mx-auto">
            Terima kasih telah menjadi bagian dari perjalanan cinta kami.
            Kehadiran dan dukungan Anda berarti lebih dari segalanya.
          </p>
          <Button size="lg">View Wishlist</Button>
        </motion.div>
      </Container>
    </section>
  );
}
