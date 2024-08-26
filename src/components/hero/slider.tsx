"use client";

import React from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Highlight } from "@/components/ui/hero-highlight";

export function HeroSlider() {
  const images = [
    "/bg-1.webp",
    "/bg-2.webp",
    "/bg-3.webp",
    "/bg-4.webp",
    "/bg-5.webp",
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
        <motion.p className="font-bold text-xl md:text-5xl sm:max-w-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 leading-relaxed lg:leading-snug">
          Program keanekaragaman hayati Kilang Pertamina Internasional RU VII
          Kasim <br /> Berdedikasi pada{" "}
          <Highlight
            duration={0.5}
            className="text-neutral-800 dark:text-white capitalize"
          >
            inovasi
          </Highlight>{" "}
          dan{" "}
          <Highlight
            duration={0.5}
            className="text-neutral-800 dark:text-white capitalize"
          >
            keberlanjutan
          </Highlight>
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
