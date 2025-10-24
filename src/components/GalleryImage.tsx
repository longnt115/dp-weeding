import "@/styles/components/OurStory.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const GalleryImage = () => {
  return (
    <>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          id="story-heading"
          className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-wedding-gray900 barlow-semibold"
        >
          Album ảnh cưới
        </h2>
        <div
          className="w-12 sm:w-16 h-1 bg-gradient-to-r from-wedding-gold to-wedding-gold-light mx-auto mb-3 sm:mb-4"
          aria-hidden="true"
        />
        <p className="text-base sm:text-lg text-wedding-gray600 max-w-2xl mx-auto px-4 barlow-regular">
          A journey of love, laughter, and beautiful moments that led us here
        </p>
      </motion.div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: -50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper my-8 sm:my-12 md:my-16"
      >
        <SwiperSlide>
          <Image
            alt="Couple's first meeting"
            width={240}
            height={350}
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="rounded-2xl shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Couple's first meeting"
            width={240}
            height={350}
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="rounded-2xl shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="Couple's first meeting"
            width={240}
            height={350}
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="rounded-2xl shadow-lg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
