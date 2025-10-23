"use client";
import { motion } from "framer-motion";
import Button from "./common/Button";
import Container from "./common/Container";

export default function LiveStream() {
  const socialPlatforms = [
    {
      icon: "📘",
      name: "Facebook",
      handle: "@sarahjohn2024",
      color: "from-wedding-gold to-[#c9a961]",
      hoverColor: "hover:from-[#c9a961] hover:to-[#b8975b]",
    },
    {
      icon: "📷",
      name: "Instagram",
      handle: "@sarahjohn.wedding",
      color: "from-wedding-gold to-[#c9a961]",
      hoverColor: "hover:from-[#c9a961] hover:to-[#b8975b]",
    },
    {
      icon: "▶️",
      name: "YouTube",
      handle: "Sarah & John Wedding",
      color: "from-[#3a3a3a] to-[#2a2a2a]",
      hoverColor: "hover:from-[#2a2a2a] hover:to-[#1a1a1a]",
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
    <section className="py-10 sm:py-12 md:py-16 bg-linear-to-r from-wedding-light to-white px-4 sm:px-6">
      <Container>
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-wedding-dark mb-2">
            Follow Our Live Stream
          </h2>
          <p className="text-sm sm:text-base text-wedding-secondary px-4">
            Bergabunglah dengan kami secara online di media sosial favorit Anda
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
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
              className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg"
            >
              <div
                className={`bg-linear-to-br ${platform.color} ${platform.hoverColor} transition-all duration-300 p-8 h-full flex flex-col items-center justify-center text-white`}
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
                  <p className="text-sm mb-6 text-white/90">
                    {platform.handle}
                  </p>
                  <Button
                    size="sm"
                    className="bg-white text-wedding-dark hover:bg-wedding-light"
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
          <p className="text-wedding-secondary mb-4">
            🔴 Acara akan disiarkan langsung pada hari H. Jangan sampai
            ketinggalan!
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
