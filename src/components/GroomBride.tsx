import { motion } from "framer-motion";
import Image from "next/image";
import ImageWithLoader from "./common/ImageWithLoader";

export const GroomBride = () => {
  return (
    <motion.div
      className="mt-6 mb-8 sm:mb-10 md:mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-row justify-center items-center mb-8 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
        {/* Groom */}
        <div className="text-center flex flex-col w-full sm:w-auto">
          <div className="barlow-regular mb-2 text-2xl">Chú rể</div>
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 mx-auto mb-4 sm:mb-6 rounded-2xl overflow-hidden shadow-xl bg-wedding-gray100">
            <ImageWithLoader
              alt="Portrait of groom Nguyễn Hải Đăng"
              width={500}
              height={500}
              src="/assets/avatar/groom.jpg"
              className="w-full h-full object-cover border-t-3 border-b-gray-600"
              priority
            />
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-wedding-gray900 mb-2 alex-brush-regular">
            Nguyễn Hải Đăng
          </h3>
          <a
            href="https://www.instagram.com/haidannx/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow groom on Instagram at haidannx"
            className="flex justify-center items-center self-center w-32 sm:w-40 md:w-52 lg:w-60 cursor-pointer text-wedding-light bg-wedding-dark p-2 sm:p-2.5 rounded-lg mt-2 hover:bg-gray-700 transition-colors text-sm sm:text-base"
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
          <div className="barlow-regular mb-2 text-2xl">Cô dâu</div>
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 mx-auto mb-4 sm:mb-6 rounded-2xl overflow-hidden shadow-lg bg-wedding-gray100">
            <Image
              alt="Portrait of bride Nguyễn Bích Phượng"
              width={500}
              height={500}
              src="/assets/avatar/bride.jpg"
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-wedding-gray900 mb-2 alex-brush-regular">
            Nguyễn Bích Phượng
          </h3>
          <a
            href="https://www.instagram.com/naughtysheep/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow bride on Instagram at naughtysheep"
            className="flex justify-center items-center self-center w-32 sm:w-40 md:w-52 lg:w-60 cursor-pointer text-wedding-light bg-wedding-dark p-2 sm:p-2.5 rounded-lg mt-2 hover:bg-gray-700 transition-colors text-sm sm:text-base"
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
  );
};
