import { motion } from "framer-motion";

export const WeddingInfor = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-5 md:grid-cols-5 gap-4 md:gap-6 items-center max-w-6xl mx-auto">
        {/* Left Image */}
        <div className="col-span-2 md:col-span-1 col-start-1 row-start-1 order-1">
          {/* <ImageWithLoader
            src="/assets/venue/venue-1.jpg"
            alt="Wedding venue left"
            fill
            className="object-cover"
          /> */}
        </div>
        {/* Center Content */}
        <motion.div
          className="text-center px-2 sm:px-4 my-4 sm:my-6 md:my-0 col-span-5 md:col-span-3 row-start-3 md:row-start-1 order-3 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-wedding-gray900 mb-2">
            <h2
              id="story-heading"
              className="text-3xl uppercase sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-wedding-gray900 barlow-semibold"
            >
              Lễ Thành Hôn
            </h2>
            <div
              className="w-12 sm:w-16 h-1 bg-gradient-to-r from-wedding-gold to-wedding-gold-light mx-auto mb-3 sm:mb-4"
              aria-hidden="true"
            />
            <p className="text-base sm:text-lg md:text-xl barlow-regular">
              Vào lúc{" "}
              <span className="font-semibold text-wedding-gold-light">
                24h00 <span className="px-1"> | </span> Thứ bảy
              </span>
            </p>
          </div>
          <div
            id="wedding-date"
            className="text-wedding-gray900 mt-5 mb-1 sm:mt-6 sm:mb-2 md:mt-8 md:mb-4 grid grid-cols-[auto_auto_auto] justify-center items-center gap-0"
          >
            <span className="py-[0.5rem] pr-4 sm:pr-7 lg:pr-10 text-base sm:text-lg md:text-xl lg:text-3xl barlow-semibold text-right text-wedding-gold-light">
              Tháng 12
            </span>
            <span
              className="py-[0.5rem] px-4 sm:px-7 lg:px-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl alex-brush-regular border-solid border-x-1 sm:border-x-3 border-gray-800 text-wedding-gold-light"
              style={{ fontWeight: "semibold" }}
            >
              27
            </span>
            <span className="py-[0.5rem] pl-4 sm:pl-7 lg:pl-10 text-base sm:text-lg md:text-xl lg:text-3xl barlow-semibold text-left text-wedding-gold-light">
              2025
            </span>
          </div>
          <h4 className="barlow-regular text-wedding-gray900 text-sm sm:text-base md:text-lg px-2">
            (Tức ngày 8 tháng 11 năm Ất Tỵ)
          </h4>

          <h3 className="text-xl sm:text-2xl mb-3 sm:mb-5 mt-2 sm:mt-4 md:mt-6 barlow-regular">
            Địa điểm tổ chức
          </h3>
          <div className="relative h-40 md:h-48 mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-wedding-gray100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4456.057495707094!2d105.78465617587253!3d21.037206787487243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab277ebd8c1b%3A0xa3b26494470bd077!2zVHJ1bmcgVMOibSBUaeG7h2MgQ8aw4bubaSAmIFPhu7EgS2nhu4duIFByb21lcyBDZW50ZXI!5e1!3m2!1sen!2s!4v1761286893339!5m2!1sen!2s"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
        {/* Right Image */}
        <div className="col-start-4 col-span-2 md:col-span-1 md:col-start-5 row-start-1 md:row-start-1 order-2 md:order-3">
          {/* <ImageWithLoader
            src="/assets/venue/venue-2.jpg"
            alt="Wedding venue right"
            fill
            className="object-cover"
          /> */}
        </div>
      </div>
    </motion.div>
  );
};
