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
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-nutral-100 sm:text-5xl">
            Berita
          </h1>
          <p className="mx-auto mt-6 mb-8 max-w-4xl text-center text-sm sm:text-lg leading-8 text-neutral-200 dark:text-gray-200">
            <span data-br=":R9bqul5a:" data-brr="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos, expedita.
            </span>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {posts?.map((post) => <CardPost key={post?.title} data={post} />)}
        </div>
      </motion.div>
    </MainLayout>
  );
}
