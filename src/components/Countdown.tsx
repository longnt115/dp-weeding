'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Container from './common/Container';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 147,
    hours: 22,
    minutes: 50,
    seconds: 50,
  });

  useEffect(() => {
    // Set target wedding date
    const weddingDate = new Date('2024-06-15T10:30:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      transition: { duration: 0.5 },
    },
  };

  const CountdownCard = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-400 to-rose-400 rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-3xl md:text-4xl font-bold text-white">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <p className="mt-3 text-gray-700 dark:text-gray-300 font-semibold uppercase text-sm md:text-base">
        {label}
      </p>
    </motion.div>
  );

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 to-gray-900 dark:from-slate-900 dark:to-gray-900">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-2">
            Counting Down to Our Big Day
          </h2>
          <p className="text-gray-300 dark:text-gray-300">
            We can&apos;t wait to celebrate with you!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CountdownCard value={timeLeft.days} label="Days" />
          <CountdownCard value={timeLeft.hours} label="Hours" />
          <CountdownCard value={timeLeft.minutes} label="Minutes" />
          <CountdownCard value={timeLeft.seconds} label="Seconds" />
        </motion.div>
      </Container>
    </section>
  );
}
