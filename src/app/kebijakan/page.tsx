"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroSlider } from "@/components/hero/slider";
import MainLayout from "@/components/layouts/main";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
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
        className="container mx-auto py-20 flex flex-col items-center justify-center space-y-14"
      >
        <div className="w-full lg:w-10/12">
          <BackgroundGradient className="rounded-[22px] p-2 sm:p-6 bg-background">
            <Card className="bg-background border-transparent shadow-none">
              <CardContent className="p-0">
                <Image
                  src="/struktur.png"
                  alt="kebijakan"
                  width="500"
                  height="500"
                  className="rounded-lg w-full h-full mx-auto object-cover"
                  priority
                />
              </CardContent>
            </Card>
          </BackgroundGradient>
        </div>
        <div className="w-full lg:w-10/12">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-background">
            <Card className="bg-background border-transparent shadow-none">
              <CardContent className="p-0">
                <Image
                  src="/kebijakan.jpg"
                  alt="kebijakan"
                  width="500"
                  height="500"
                  className="rounded-lg w-full mx-auto object-cover"
                  priority
                />
              </CardContent>
            </Card>
          </BackgroundGradient>
        </div>
      </motion.div>
    </MainLayout>
  );
}
