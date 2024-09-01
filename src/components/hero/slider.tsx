"use client";

import React from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Highlight } from "@/components/ui/hero-highlight";

export function HeroSlider() {
  const images = [
    "/thumbnail-main-1.webp",
    "/thumbnail-main-2.webp",
    "/thumbnail-main-3.webp",
    "/thumbnail-main-4.webp",
    "/thumbnail-main-5.webp",
    "/thumbnail-main-6.webp",
    "/thumbnail-main-7.webp",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-2xl md:text-5xl sm:max-w-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-300 py-4 leading-relaxed lg:leading-snug ">
          Program Keanekaragaman Hayati Kilang Pertamina Internasional RU VII
          Kasim <br />{" "}
          <span className="block mt-8">
            Berdedikasi pada{" "}
            <Highlight
              duration={0.5}
              className="text-neutral-800 dark:text-white capitalize"
            >
              Inovasi
            </Highlight>{" "}
            dan{" "}
            <Highlight
              duration={0.5}
              className="text-neutral-800 dark:text-white capitalize"
            >
              Keberlanjutan
            </Highlight>
          </span>
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
