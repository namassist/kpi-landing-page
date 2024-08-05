"use client";

import React from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Highlight } from "@/components/ui/hero-highlight";

export function HeroSlider() {
  const images = [
    "https://images.unsplash.com/photo-1695800293626-c71dffa08164?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1649728424169-cac7ae0157b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 leading-relaxed lg:leading-snug">
          KPI Refinery Unit VII Kasim <br /> Berdedikasi pada{" "}
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
