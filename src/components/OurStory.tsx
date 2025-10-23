"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageWithLoader from "./common/ImageWithLoader";

export default function OurStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-wedding-light to-[#e8e8e8] mx-auto px-4 sm:px-6"
    >
      <motion.div
        className="text-center mb-8 sm:mb-12 md:mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          id="story-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900"
        >
          Our Love Story
        </h2>
        <div
          className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto mb-3 sm:mb-4"
          aria-hidden="true"
        />
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
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
              <div className="aspect-video bg-gradient-to-br from-amber-200 to-rose-200 flex items-center justify-center text-8xl relative">
                👰💍
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div> */}

      {/* Groom & Bride Profile Section */}
      <motion.div
        className="mb-8 sm:mb-10 md:mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row justify-center items-center mb-8 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          {/* Groom */}
          <div className="text-center flex flex-col w-full sm:w-auto">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 mx-auto mb-4 sm:mb-6 rounded-2xl overflow-hidden shadow-xl bg-gray-100">
              <ImageWithLoader
                alt="Portrait of groom Nguyễn Hải Đăng"
                width={500}
                height={500}
                src="/assets/avatar/groom.jpg"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 alex-brush-regular">
              Nguyễn Hải Đăng
            </h3>
            <a
              href="https://www.instagram.com/haidannx/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow groom on Instagram at haidannx"
              className="flex justify-center items-center self-center w-36 sm:w-40 md:w-52 lg:w-60 cursor-pointer text-wedding-light bg-wedding-dark p-2 sm:p-2.5 rounded-lg mt-2 hover:bg-gray-700 transition-colors text-sm sm:text-base"
            >
              <Image
                src="/assets/icon/instagram-color-svgrepo-com.svg"
                alt=""
                width={16}
                height={16}
                className="inline-block mr-2"
                aria-hidden="true"
              />
              haidannx
            </a>
          </div>

          {/* Bride */}
          <div className="text-center flex flex-col w-full sm:w-auto">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 mx-auto mb-4 sm:mb-6 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <Image
                alt="Portrait of bride Nguyễn Bích Phượng"
                width={500}
                height={500}
                src="/assets/avatar/bride.jpg"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 alex-brush-regular">
              Nguyễn Bích Phượng
            </h3>
            <a
              href="https://www.instagram.com/naughtysheep/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow bride on Instagram at naughtysheep"
              className="flex justify-center items-center self-center w-36 sm:w-40 md:w-52 lg:w-60 cursor-pointer text-wedding-light bg-wedding-dark p-2 sm:p-2.5 rounded-lg mt-2 hover:bg-gray-700 transition-colors text-sm sm:text-base"
            >
              <Image
                src="/assets/icon/instagram-color-svgrepo-com.svg"
                alt=""
                width={16}
                height={16}
                className="inline-block mr-2"
                aria-hidden="true"
              />
              naughtysheep
            </a>
          </div>
        </div>
      </motion.div>

      {/* Venue Showcase Section */}
      <motion.div
        className="mb-8 sm:mb-12 md:mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-5 md:grid-cols-5 gap-4 md:gap-6 items-center max-w-7xl mx-auto">
          {/* Left Image */}
          <motion.div
            className="relative h-48 sm:h-56 md:h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02] col-span-2 md:col-span-1 col-start-1 row-start-1 order-1 bg-gray-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithLoader
              src="/assets/venue/venue-1.jpg"
              alt="Wedding venue left"
              fill
              className="object-cover"
            />
          </motion.div>
          {/* Center Content */}
          <motion.div
            className="text-center px-2 sm:px-4 my-4 sm:my-6 md:my-0 col-span-5 md:col-span-3 row-start-3 md:row-start-1 order-3 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Venue Image */}
            <div className="relative h-32 sm:h-40 md:h-48 mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <ImageWithLoader
                src="/assets/venue/mosque.jpg"
                alt="Masjid Raya Baiturrahman"
                fill
                className="object-cover"
              />
            </div>

            {/* Venue Details */}

            <div className="text-gray-900 mb-2">
              <h3 className="text-xl sm:text-2xl mb-3 sm:mb-5 mt-4 sm:mt-6 md:mt-9 barlow-regular">
                LỄ THÀNH HÔN
              </h3>
              <p className="text-base sm:text-lg md:text-xl barlow-regular">
                Vào lúc{" "}
                <span className="font-semibold">
                  24h00 <span className="px-1"> | </span> Thứ bảy
                </span>
              </p>
            </div>
            <div
              id="wedding-date"
              className="text-gray-900 mt-6 mb-2 sm:mt-8 sm:mb-4 md:mt-10 md:mb-6 grid grid-cols-[auto_auto_auto] justify-center items-center gap-0"
            >
              <span className="py-[0.5rem] pr-4 sm:pr-7 lg:pr-10 text-base sm:text-lg md:text-xl lg:text-3xl barlow-bold text-right">
                Tháng 12
              </span>
              <span
                className="py-[0.5rem] px-4 sm:px-7 lg:px-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl alex-brush-regular border-solid border-x-2 border-gray-900"
                style={{ fontWeight: "bold" }}
              >
                27
              </span>
              <span className="py-[0.5rem] pl-4 sm:pl-7 lg:pl-10 text-base sm:text-lg md:text-xl lg:text-3xl barlow-bold text-left">
                2025
              </span>
            </div>
            <h4 className="barlow-regular text-gray-900 mb-2 text-sm sm:text-base md:text-lg px-2">
              (Tức ngày 8 tháng 11 năm Ất Tỵ)
            </h4>
            {/* Get Direction Button */}
            <motion.button
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 cursor-pointer border-none text-sm sm:text-base mt-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://maps.google.com/?q=Masjid+Raya+Baiturrahman+Banda+Aceh",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              aria-label="Get directions to wedding venue"
            >
              Get Direction
            </motion.button>
          </motion.div>
          {/* Right Image */}
          <motion.div
            className="relative h-48 sm:h-56 md:h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02] col-start-4 col-span-2 md:col-span-1 md:col-start-5 row-start-1 md:row-start-1 order-2 md:order-3 bg-gray-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithLoader
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
