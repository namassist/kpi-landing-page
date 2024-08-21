"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroSlider } from "@/components/hero/slider";
import MainLayout from "@/components/layouts/main";
import CardPost from "@/components/cards/post";
import { posts } from "@/lib/data";

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
        className="container mx-auto py-10 space-y-10"
      >
        <div className="mx-auto max-w-2xl text-center lg:max-w-6xl">
          <h1 className="mt-2 text-xl font-bold tracking-tight text-[#0072ce] sm:text-4xl">
            Data Absolute
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {posts?.map((post) => <CardPost key={post?.title} data={post} />)}
        </div>
      </motion.div>
    </MainLayout>
  );
}
