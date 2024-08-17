"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroSlider } from "@/components/hero/slider";
import MainLayout from "@/components/layouts/main";
import Link from "next/link";
import { getPostBySlug } from "@/lib/posts";
import Image from "next/image";
import { LineChartComponent } from "@/components/charts/line";

export default function Home({ params }: { params: { id: string } }) {
  const post = getPostBySlug(params?.id);

  if (post) {
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
          className="container mx-auto py-5"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-2 sm:px-2 py-2 sm:py-8 max-w-4xl mx-auto">
            <Link
              className="flex space-x-2 items-center mb-4 sm:mb-0"
              href="/berita"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-neutral-300"
              >
                <path d="M5 12l14 0"></path>
                <path d="M5 12l6 6"></path>
                <path d="M5 12l6 -6"></path>
              </svg>
              <span className="text-sm text-neutral-300">Kembali</span>
            </Link>
            <div className="flex gap-2 items-center">
              <div className="flex space-x-2 items-center ">
                <p className="text-sm font-normal text-neutral-300">
                  {post.author}
                </p>
              </div>
              <div className="h-5 rounded-lg w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>
              <span className="text-neutral-300 text-sm">{post.createdAt}</span>
            </div>
          </div>
          <div className="mx-auto max-w-4xl">
            <article className="pb-8">
              <Image
                src={post.thumbnail}
                className="h-[500px] w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt={post.slug}
              />
              <header className="flex flex-col md:py-10">
                <h1 className="mt-8 text-3xl font-bold tracking-tight text-neutral-200 sm:text-5xl ">
                  {post?.title}
                </h1>
              </header>
              <div className="space-y-6">
                {post.contents.map((content, index) => {
                  if (content === "chart") {
                    return <LineChartComponent key={index} data={post.chart} />;
                  } else {
                    return (
                      <p key={index} className="leading-7 text-white">
                        {content}
                      </p>
                    );
                  }
                })}
              </div>
            </article>
          </div>
        </motion.div>
      </MainLayout>
    );
  }
}
