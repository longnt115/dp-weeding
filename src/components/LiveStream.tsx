'use client';
import { motion } from 'framer-motion';
import Button from './common/Button';
import Container from './common/Container';

export default function LiveStream() {
  const socialPlatforms = [
    {
      icon: '📘',
      name: 'Facebook',
      handle: '@sarahjohn2024',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
    },
    {
      icon: '📷',
      name: 'Instagram',
      handle: '@sarahjohn.wedding',
      color: 'from-pink-500 to-rose-500',
      hoverColor: 'hover:from-pink-600 hover:to-rose-600',
    },
    {
      icon: '▶️',
      name: 'YouTube',
      handle: 'Sarah & John Wedding',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700',
    },
  ];

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-900">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Follow Our Live Stream
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Bergabunglah dengan kami secara online di media sosial favorit Anda
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <div
                className={`bg-gradient-to-br ${platform.color} ${platform.hoverColor} transition-all duration-300 p-8 h-full flex flex-col items-center justify-center text-white`}
              >
                {/* Animated background elements */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full"
                  animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4">{platform.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                  <p className="text-sm mb-6 text-white/90">{platform.handle}</p>
                  <Button
                    size="sm"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Follow Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            🔴 Acara akan disiarkan langsung pada hari H. Jangan sampai ketinggalan!
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
