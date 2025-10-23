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
    // Set the wedding date (December 27, 2025 at midnight)
    const weddingDate = new Date("2025-12-27T00:00:00").getTime();

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

  const CountdownCard = ({
    value,
    label,
    className = "",
  }: {
    value: number;
    label: string;
    className?: string;
  }) => (
    <div
      className={`flex flex-col items-center ${className}`}
      role="timer"
      aria-label={`${value} ${label} remaining until wedding`}
    >
      <div className="relative">
        <div className="w-14 sm:w-16 md:w-20 lg:w-24 flex items-center justify-center">
          <span
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white"
            aria-live="polite"
          >
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <p className="mt-2 sm:mt-3 text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl alex-brush-regular">
        {label}
      </p>
    </div>
  );

  return (
    <section
      aria-labelledby="countdown-heading"
      className="px-4 sm:px-6 py-10 sm:py-12 md:py-16 bg-gradient-to-r from-wedding-light to-[#e8e8e8]"
    >
      <div className="rounded-2xl sm:rounded-3xl mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl bg-gray-600">
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            id="countdown-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 pt-4 sm:pt-5 md:pt-6"
          >
            Counting Days
          </h2>
          <h4 className="text-sm sm:text-base text-gray-300 px-4">
            We can&apos;t wait to celebrate with you!
          </h4>
        </motion.div>

        <motion.div
          className="flex flex-row justify-center items-center pb-4 sm:pb-5 md:pb-6 gap-2 sm:gap-4 md:gap-6 lg:gap-10"
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
      </div>
    </section>
  );
}
