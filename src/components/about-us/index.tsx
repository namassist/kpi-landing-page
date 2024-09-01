"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";
import { Highlight } from "@/components/ui/hero-highlight";
import { IconTarget, IconWorld } from "@tabler/icons-react";

export function AboutUs() {
  const images = [
    "/thumbnail-main-1.webp",
    "/thumbnail-main-2.webp",
    "/thumbnail-main-3.webp",
  ];
  const images2 = ["/bg-4.webp", "/bg-5.webp", "/bg-3.webp"];

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
        <motion.h4 className="text-xl font-bold uppercase text-foreground/80">
          Tentang Kami
        </motion.h4>
        <motion.div className="w-full flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:items-center gap-2">
          <motion.div className="w-full lg:w-6/12">
            <motion.h1 className="font-bold text-xl md:text-3xl capitalize text-[#0072CE]">
              Dari minyak mentah ke energi bersih <br /> Inovasi tanpa henti,
              keberlanjutan pasti
            </motion.h1>
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
              <Highlight duration={0.5} className="capitalize">
                perlindungan keanekaragaman hayati
              </Highlight>
              . Program kami meliputi perlindungan flora dan fauna di sekitar
              area perusahaan, serta monitoring dan evaluasi rutin setiap tahun.
            </motion.p>
          </motion.div>
          <motion.div className="w-full lg:w-6/12">
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
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white border border-neutral-300 flex-shrink-0 overflow-hidden max-w-full"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-24 w-24 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              {images2.map((image, idx) => (
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
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white border border-neutral-300 flex-shrink-0 overflow-hidden max-w-full"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-24 w-24 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <div className="flex flex-col space-y-4 gap-4 mt-8 lg:mt-0 sm:flex-row sm:space-y-0">
          <div className="w-full relative sm:max-w-xs text-white">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-[rgb(0,114,206)] px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-2">
                <IconWorld />
              </div>
              <h1 className="font-bold text-xl mb-4 relative z-50">Visi</h1>
              <p className="font-normal text-sm mb-4 relative z-50">
                Sebagai Perusahaan Kilang Minyak dan Petrokimia Berkelas Dunia
              </p>
              <Meteors number={20} />
            </div>
          </div>
          <div className="w-full relative sm:max-w-xs text-white">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-[#0072CE] px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-2 border-gray-500">
                <IconTarget />
              </div>
              <h1 className="font-bold text-xl mb-4 relative z-50">Misi</h1>
              <p className="font-normal text-sm mb-4 relative z-50">
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
