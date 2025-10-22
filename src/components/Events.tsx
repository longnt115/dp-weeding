"use client";

import { Event } from "@/types";
import { motion } from "framer-motion";
import Card from "./common/Card";
import Container from "./common/Container";

const events: Event[] = [
  {
    id: "1",
    title: "Ceremony",
    date: "June 15, 2024",
    time: "2:00 PM",
    location: "Garden Venue, 123 Love Street, Romance City",
    description:
      "Join us as we say our vows and begin our journey as a married couple. This intimate ceremony will be a beautiful celebration of our love.",
  },
  {
    id: "2",
    title: "Cocktail Reception",
    date: "June 15, 2024",
    time: "3:30 PM",
    location: "Garden Venue Terrace",
    description:
      "Enjoy refreshments and appetizers as we celebrate our marriage with our loved ones.",
  },
  {
    id: "3",
    title: "Dinner & Reception",
    date: "June 15, 2024",
    time: "5:00 PM",
    location: "Grand Ballroom, 456 Celebration Ave, Romance City",
    description:
      "Celebrate with us over a delicious dinner, dancing, and unforgettable memories.",
  },
  {
    id: "4",
    title: "Farewell Brunch",
    date: "June 16, 2024",
    time: "10:00 AM",
    location: "Hotel Restaurant, Romance City",
    description:
      "Join us for a casual brunch the morning after to say goodbye before we depart for our honeymoon.",
  },
];

export default function Events() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const emojis = ["🎉", "🍾", "💃", "☀️"];

  return (
    <section id="events" className="py-20 bg-white">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#3a3a3a]">
            Wedding Events
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-wedding-gold to-[#c9a961] mx-auto mb-4">
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Important dates, times, and locations for our celebration
            </p>
          </div>
        </motion.div>

        {/* Timeline View */}
        <motion.div
          className="space-y-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline connector */}
              {index < events.length - 1 && (
                <div className="hidden md:block absolute left-12 top-24 w-1 h-12 bg-gradient-to-b from-wedding-gold to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <motion.div
                  className="flex-shrink-0 mt-1"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-8 h-8 rounded-full bg-linear-to-br from-wedding-gold to-[#c9a961] flex items-center justify-center text-[#3a3a3a] text-lg font-bold shadow-md">
                    {index + 1}
                  </div>
                </motion.div>

                {/* Event Card */}
                <Card className="flex-1 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#3a3a3a] flex items-center gap-2">
                        <span className="text-3xl">{emojis[index]}</span>
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <motion.div
                      className="flex items-center gap-3 text-[#404040]"
                      whileHover={{ x: 5 }}
                    >
                      <svg
                        className="w-5 h-5 text-[#d4af37]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-semibold">{event.date}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-3 text-[#404040]"
                      whileHover={{ x: 5 }}
                    >
                      <svg
                        className="w-5 h-5 text-[#d4af37]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00-.447.894l1.447 1.447a1 1 0 001.054 0l1.447-1.447A1 1 0 0011 10.894V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-semibold">{event.time}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-3 text-[#404040]"
                      whileHover={{ x: 5 }}
                    >
                      <svg
                        className="w-5 h-5 text-[#d4af37]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-semibold">{event.location}</span>
                    </motion.div>
                  </div>

                  <p className="text-[#666666] leading-relaxed">
                    {event.description}
                  </p>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mt-12 pt-12 border-t border-[#e0e0e0]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-2xl font-bold text-[#3a3a3a] mb-4">
                📍 Ceremony Venue
              </h3>
              <p className="text-[#666666] mb-4">
                Garden Venue
                <br />
                123 Love Street
                <br />
                Romance City, ST 12345
              </p>
              <p className="text-sm text-[#999999]">+1 (555) 123-4567</p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-[#3a3a3a] mb-4">
                🎊 Reception Venue
              </h3>
              <p className="text-[#666666] mb-4">
                Grand Ballroom
                <br />
                456 Celebration Ave
                <br />
                Romance City, ST 12345
              </p>
              <p className="text-sm text-[#999999]">+1 (555) 987-6543</p>
            </Card>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
