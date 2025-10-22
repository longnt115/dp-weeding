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

  const CountdownCard = ({
    value,
    label,
    className = "",
  }: {
    value: number;
    label: string;
    className?: string;
  }) => (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        <div className="w-20 flex items-center justify-center">
          <span className="text-4xl md:text-6xl font-bold text-white">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <p className="mt-3 text-white font-semibold text-2xl md:text-3xl alex-brush-regular">
        {label}
      </p>
    </div>
  );

  return (
    <section className="md:max-width-[768px] px-4 sm:px-6 py-16 bg-linear-to-r from-wedding-light to-[#e8e8e8]">
      <div className="rounded-3xl mx-auto lg:px-8 max-w-6xl bg-gray-600">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 pt-6">
            Counting Days
          </h2>
          <h4 className="text-[#b0b0b0]">
            We can&apos;t wait to celebrate with you!
          </h4>
        </motion.div>

        <motion.div
          className="flex flex-row justify-center pb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CountdownCard
            className="mr-5 sm:mr-7 md:mr-10"
            value={timeLeft.days}
            label="Days"
          />
          <CountdownCard
            className="mr-5 sm:mr-7 md:mr-10"
            value={timeLeft.hours}
            label="Hours"
          />
          <CountdownCard
            className="mr-5 sm:mr-7 md:mr-10"
            value={timeLeft.minutes}
            label="Minutes"
          />
          <CountdownCard value={timeLeft.seconds} label="Seconds" />
        </motion.div>
      </div>
    </section>
  );
}
