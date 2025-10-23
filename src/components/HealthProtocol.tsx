"use client";
import { motion } from "framer-motion";
import Container from "./common/Container";

export default function HealthProtocol() {
  const protocols = [
    {
      icon: "🧼",
      title: "Hand Sanitizer",
      description: "Sanitizer tersedia di setiap sudut venue",
    },
    {
      icon: "😷",
      title: "Masker",
      description: "Gunakan masker sesuai kebutuhan Anda",
    },
    {
      icon: "🌡️",
      title: "Pengecekan Suhu",
      description: "Pengecekan suhu tubuh saat masuk venue",
    },
    {
      icon: "🧑‍⚕️",
      title: "Tenaga Medis",
      description: "Tim medis siap membantu sepanjang acara",
    },
    {
      icon: "🚭",
      title: "Jarak Aman",
      description: "Jaga jarak aman dengan peserta lain",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white px-4 sm:px-6">
      <Container>
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-wedding-dark mb-2">
            Health Protocol
          </h2>
          <p className="text-sm sm:text-base text-wedding-secondary px-4">
            Kesehatan dan keselamatan tamu kami adalah prioritas utama
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {protocols.map((protocol, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl bg-linear-to-br from-wedding-light to-gray-100 shadow-lg hover:shadow-xl transition-shadow border border-wedding-border"
            >
              <div className="text-5xl mb-4">{protocol.icon}</div>
              <h3 className="text-lg font-bold text-wedding-dark mb-2">
                {protocol.title}
              </h3>
              <p className="text-sm text-wedding-secondary">
                {protocol.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
