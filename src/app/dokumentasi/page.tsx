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
  "/dok-1.webp",
  "/dok-2.webp",
  "/dok-3.webp",
  "/dok-4.webp",
  "/dok-5.webp",
  "/dok-6.webp",
  "/dok-7.webp",
  "/dok-8.webp",
  "/dok-9.webp",
  "/dok-10.webp",
  "/dok-11.webp",
  "/dok-12.webp",
  "/dok-13.webp",
];
