"use client";

import Header from "@/components/header";
import { HeroSlider } from "@/components/hero/slider";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="text-neutral-50">
      <Header />
      <HeroSlider />
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
        className="container mx-auto space-y-20 py-20"
      >
        <motion.h1 className="font-bold text-xl md:text-4xl capitalize bg-clip-text text-transparent bg-gradient-to-r from-[#458ff8] to-[#5A8ED4] text-center">
          Dokumentasi Kegiatan
        </motion.h1>
        <ParallaxScroll images={images} />
      </motion.div>
    </main>
  );
}

const images = [
  "/dokumentasi-1.webp",
  "/dokumentasi-2.webp",
  "/dokumentasi-3.webp",
  "/dokumentasi-4.webp",
  "/dokumentasi-5.webp",
  "/dokumentasi-6.webp",
  "/dokumentasi-7.webp",
  "/dokumentasi-8.webp",
  "/dokumentasi-9.webp",
  "/dokumentasi-10.webp",
  "/dokumentasi-11.webp",
  "/dokumentasi-12.webp",
  "/dokumentasi-13.webp",
  "/pic-6.webp",
  "/dokumentasi-15.webp",
  "/dokumentasi-16.webp",
  "/dokumentasi-17.webp",
  "/dokumentasi-18.webp",
  "/dokumentasi-19.webp",
  "/dokumentasi-20.webp",
  "/dokumentasi-21.webp",
  "/dokumentasi-22.webp",
  "/dokumentasi-23.webp",
  "/dokumentasi-24.webp",
  "/dokumentasi-25.webp",
  "/dokumentasi-26.webp",
  "/dokumentasi-27.webp",
  "/dokumentasi-28.webp",
  "/dokumentasi-29.webp",
];
