"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the wedding date (update this to your actual wedding date)
    const weddingDate = new Date("2025-11-14T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Wedding date has passed
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Calculate immediately on mount
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on unmount
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
    className = "",
  }: {
    value: number;
    label: string;
    className?: string;
  }) => (
    <motion.div
      variants={itemVariants}
      className={`flex flex-col items-center ${className}`}
    >
      <div className="relative">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#d4af37] to-[#c9a961] rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-3xl md:text-4xl font-bold text-white">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <p className="mt-3 text-white dark:text-[#b0b0b0] font-semibold uppercase text-sm md:text-base">
        {label}
      </p>
    </motion.div>
  );

  return (
    <section className="md:max-width-[768px] py-16 bg-gradient-to-r from-[#f5f5f5] to-[#e8e8e8]">
      <div className="rounded-3xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl bg-gray-700">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-2 pt-6">
            Counting Days
          </h2>
          <p className="text-[#b0b0b0] dark:text-[#b0b0b0]">
            We can&apos;t wait to celebrate with you!
          </p>
        </motion.div>

        <motion.div
          className="flex flex-row justify-center pb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CountdownCard
            className="mr-[3.5rem]"
            value={timeLeft.days}
            label="Days"
          />
          <CountdownCard
            className="mr-[3.5rem]"
            value={timeLeft.hours}
            label="Hours"
          />
          <CountdownCard
            className="mr-[3.5rem]"
            value={timeLeft.minutes}
            label="Minutes"
          />
          <CountdownCard value={timeLeft.seconds} label="Seconds" />
        </motion.div>
      </div>
    </section>
  );
}
