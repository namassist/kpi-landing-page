"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroSlider } from "@/components/hero/slider";
import MainLayout from "@/components/layouts/main";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <MainLayout>
      <HeroSlider/> 
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
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-nutral-100 sm:text-5xl">Berita</h1>
          <p className="mx-auto mt-6 mb-8 max-w-4xl text-center text-sm sm:text-lg leading-8 text-neutral-200 dark:text-gray-200"><span data-br=":R9bqul5a:" data-brr="1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, expedita.</span>
          </p>
        </div>
        <div className="flex gap-4 w-full">
        <div className="w-full group/card">
            <div
              className={cn(
                "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <Image
                  height="100"
                  width="100"
                  alt="Avatar"
                  src="/manu.png"
                  className="h-10 w-10 rounded-full border-2 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-normal text-base text-gray-50 relative z-10">
                    Admin
                  </p>
                  <p className="text-sm text-gray-400">2 min read</p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  Judul Berita
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, vitae.
                </p>
              </div>
            </div>
        </div>
        <div className="w-full group/card">
            <div
              className={cn(
                "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl w-full mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
              )}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10">
                <Image
                  height="100"
                  width="100"
                  alt="Avatar"
                  src="/manu.png"
                  className="h-10 w-10 rounded-full border-2 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-normal text-base text-gray-50 relative z-10">
                    Admin
                  </p>
                  <p className="text-sm text-gray-400">2 min read</p>
                </div>
              </div>
              <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  Judul Berita
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, vitae.
                </p>
              </div>
            </div>
        </div>
        </div>
      </motion.div>
    </MainLayout>
  );
}