"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";
import { Highlight } from "@/components/ui/hero-highlight";
import { IconTarget, IconWorld } from "@tabler/icons-react";

export function AboutUs() {
  const images = [
    "https://images.unsplash.com/photo-1602860109208-613d39362844?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1678984239726-ac972091a751?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1649294010513-6c2a5b0c35fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <section className="py-20">
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
        className="container mx-auto"
      >
        <motion.h1 className="text-lg font-bold text-neutral-300">
          Tentang Kami
        </motion.h1>
        <motion.div className="w-full flex items-center gap-2">
          <motion.div className="w-full md:w-6/12">
            <motion.h4 className="font-bold text-xl md:text-3xl capitalize bg-clip-text text-transparent bg-gradient-to-r from-[#458ff8] to-[#5A8ED4]">
              Dari minyak mentah ke energi bersih <br />
            </motion.h4>
            <motion.h4 className="font-bold text-xl md:text-3xl capitalize bg-clip-text text-transparent bg-gradient-to-l from-[#458ff8] to-[#5A8ED4]">
              Inovasi tanpa henti, keberlanjutan pasti
            </motion.h4>
            <motion.p className="leading-relaxed mt-5">
              PT Kilang Pertamina Internasional Refinery Unit VII Kasim terletak
              di Kabupaten Sorong, Papua Barat. Kilang ini mengolah 10.000 barel
              minyak mentah per hari menjadi BBM berkualitas, seperti premium
              dan solar, melalui distilasi, naptha hydro treating dan catalytic
              reforming
            </motion.p>
            <motion.p className="leading-relaxed mt-5">
              Kami berkomitmen pada pembangunan berkelanjutan berbasis sosial
              dan lingkungan, dengan fokus pada{" "}
              <Highlight
                duration={0.5}
                className="capitalize"
              >
                perlindungan keanekaragaman hayati
              </Highlight>
              . Program kami meliputi perlindungan flora dan fauna di sekitar
              area perusahaan, serta monitoring dan evaluasi rutin setiap tahun.
            </motion.p>
          </motion.div>
          <motion.div className="w-full md:w-6/12">
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 30 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <div className="flex gap-2">
          <div className=" w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-2 border-gray-500">
                <IconWorld />
              </div>
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Visi
              </h1>
              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Sebagai Perusahaan Kilang Minyak dan Petrokimia Berkelas Dunia
              </p>
              <Meteors number={20} />
            </div>
          </div>
          <div className="w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-2 border-gray-500">
                <IconTarget />
              </div>
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Misi
              </h1>
              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Menjalankan bisnis Kilang Minyak dan Petrokimia secara
                profesional dan berstandar Internasional dengan prinsip
                keekonomian yang kuat dan berwawasan lingkungan
              </p>
              <Meteors number={20} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
