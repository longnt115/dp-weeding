'use client';
import { motion } from 'framer-motion';
import Container from './common/Container';

export default function HealthProtocol() {
  const protocols = [
    {
      icon: '🧼',
      title: 'Hand Sanitizer',
      description: 'Sanitizer tersedia di setiap sudut venue',
    },
    {
      icon: '😷',
      title: 'Masker',
      description: 'Gunakan masker sesuai kebutuhan Anda',
    },
    {
      icon: '🌡️',
      title: 'Pengecekan Suhu',
      description: 'Pengecekan suhu tubuh saat masuk venue',
    },
    {
      icon: '🧑‍⚕️',
      title: 'Tenaga Medis',
      description: 'Tim medis siap membantu sepanjang acara',
    },
    {
      icon: '🚭',
      title: 'Jarak Aman',
      description: 'Jaga jarak aman dengan peserta lain',
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
    <section className="py-16 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Health Protocol
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Kesehatan dan keselamatan tamu kami adalah prioritas utama
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-6"
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
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{protocol.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {protocol.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {protocol.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
