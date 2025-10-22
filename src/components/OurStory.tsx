"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section
      id="story"
      className="py-20 from-[#f5f5f5] to-[#e8e8e8] mx-auto max-w-[95%]"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Our Love Story
        </h2>
        <div className="w-16 h-1 bg-linear-to-r from-amber-500 to-rose-500 mx-auto mb-4" />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A journey of love, laughter, and beautiful moments that led us here
        </p>
      </motion.div>

      {/* Story Cards Carousel */}
      {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="aspect-video bg-linear-to-br from-amber-200 to-rose-200 flex items-center justify-center text-8xl relative">
                👰💍
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div> */}

      {/* Groom & Bride Profile Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-row justify-center mb-8 gap-8 md:gap-16">
          {/* Groom */}
          <div className="text-center flex flex-col">
            <div className="w-40 h-40 md:w-60 md:h-60 mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl">
              <Image
                alt="groom-avt"
                width={500}
                height={500}
                src="/assets/avatar/groom.jpg"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 alex-brush-regular">
              Nguyễn Hải Đăng
            </h2>
            <a
              href="https://www.instagram.com/haidannx/"
              target="_blank"
              className="self-center w-40 md:w-60 cursor-pointer text-wedding-light bg-wedding-dark p-2 rounded-lg mt-2"
            >
              <Image
                src="/assets/icon/instagram-color-svgrepo-com.svg"
                alt="Instagram"
                width={16}
                height={16}
                className="inline-block mr-2"
              />
              haidannx
            </a>
          </div>

          {/* Bride */}
          <div className="text-center flex flex-col">
            <div className="w-40 md:w-60 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
              <Image
                alt="bride-avt"
                width={500}
                height={500}
                src="/assets/avatar/bride.jpg"
              />
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 alex-brush-regular">
              Nguyễn Bích Phượng
            </h3>
            <a
              href="https://www.instagram.com/naughtysheep/"
              target="_blank"
              className="self-center w-40 md:w-60 cursor-pointer text-wedding-light bg-wedding-dark p-2 rounded-lg mt-2"
            >
              <Image
                src="/assets/icon/instagram-color-svgrepo-com.svg"
                alt="Instagram"
                width={16}
                height={16}
                className="inline-block mr-2"
              />
              naughtysheep
            </a>
          </div>
        </div>
      </motion.div>

      {/* Venue Showcase Section */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6 items-center max-w-7xl mx-auto">
          {/* Left Image */}
          <motion.div
            className="relative h-64 md:h-full rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02] col-start-1 row-start-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/assets/venue/venue-1.jpg"
              alt="Wedding venue left"
              fill
              className="object-cover"
            />
          </motion.div>
          {/* Center Content */}
          <motion.div
            className="text-center px-4 my-8 md:my-0 col-span-3 row-start-3 md:row-start-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Venue Image */}
            <div className="relative h-40 md:h-48 mb-6 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assets/venue/mosque.jpg"
                alt="Masjid Raya Baiturrahman"
                fill
                className="object-cover"
              />
            </div>

            {/* Venue Details */}

            <div className="text-gray-900 mb-2">
              <h3 className="text-2xl mb-5 mt-9 barlow-regular">
                LỄ THÀNH HÔN
              </h3>
              <p className="text-xl barlow-regular">
                Vào lúc {" "}
                <span className="font-semibold">
                  24h00 <span className="px-1"> | </span> Thứ bảy
                </span>
              </p>
            </div>
            <div className="text-gray-900 my-10 mr-[1rem] sm:mr-[1.25rem] lg:mr-[3.25rem]">
              <span className="py-[0.5rem] mr-7 lg:pr-10 text-lg sm:text-xl lg:text-3xl barlow-bold">
                Tháng 12
              </span>
              <span
                className="py-[0.5rem] px-7 lg:px-10 text-3xl sm:text-4xl lg:text-5xl alex-brush-regular border-solid border-x-3 border-gray-900"
                style={{ fontWeight: "bold" }}
              >
                27
              </span>
              <span className="py-[0.5rem] pl-7 lg:pl-10 text-xl lg:text-3xl barlow-bold">
                2025
              </span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Masjid Raya Baiturrahman, Banda Aceh, Indonesia
            </h4>

            {/* Get Direction Button */}
            <motion.button
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer border-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://maps.google.com/?q=Masjid+Raya+Baiturrahman+Banda+Aceh",
                  "_blank"
                )
              }
            >
              Get Direction
            </motion.button>
          </motion.div>
          {/* Right Image */}
          <motion.div
            className="relative h-64 md:h-full rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02] md:col-start-5 row-start-2 md:row-start-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/assets/venue/venue-2.jpg"
              alt="Wedding venue right"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
