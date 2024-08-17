"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroSlider } from "@/components/hero/slider";
import MainLayout from "@/components/layouts/main";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  const images = [
    "/bg-1.webp",
    "/bg-2.webp",
    "/bg-5.webp",
    "/bg-1.webp",
    "/bg-2.webp",
  ];

  return (
    <MainLayout>
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
        className="container mx-auto py-20"
      >
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-foreground">
          <Card className="w-full bg-foreground text-neutral-200 border-transparent min-h-[400px]">
            <CardHeader>
              <motion.h1 className="font-bold text-xl text-center md:text-3xl capitalize bg-clip-text text-transparent bg-gradient-to-r from-[#458ff8] to-[#5A8ED4]">
                Kebijakan Perlindungan Keanekaragaman Hayati
              </motion.h1>
            </CardHeader>
            <CardContent>
              <motion.p className="leading-relaxed text-neutral-300 text-xl">
                Berkaitan dengan berbagai aspek penting tentang keberadaan flora
                dan fauna, PT Kilang Pertamina Internasional Refinery Unit VII
                Kasim memiliki rencana program strategis yang berkaitan dengan
                upaya perbaikan pengelolaan lingkungan hidup sebagai komitmen
                pelaksanaan pembangunan berkelanjutan yang berwawasan lingkungan
                dan upaya perbaikan manajemen dan kebijakan lingkungan yang
                lebih baik.{" "}
                <Link
                  href="/kebijakan.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  locale={false}
                  className="text-sm text-sky-500 inline-flex cursor-pointer hover:text-sky-600"
                >
                  PDF
                  <IconExternalLink className="h-3 w-3" />
                </Link>
              </motion.p>
            </CardContent>
            <CardFooter>
              <motion.div className="w-full">
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
              </motion.div>
            </CardFooter>
          </Card>
        </BackgroundGradient>
      </motion.div>
    </MainLayout>
  );
}
