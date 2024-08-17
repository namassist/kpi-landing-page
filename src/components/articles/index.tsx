import React from "react";
import CardPost from "../cards/post";
import { posts } from "@/lib/data";

export default function Articles() {
  return (
    <section className="py-10">
      <div className="container mx-auto space-y-10">
        <h1 className="font-bold text-xl text-center md:text-3xl capitalize bg-clip-text text-transparent bg-gradient-to-r from-[#458ff8] to-[#5A8ED4]">
          Berita Terbaru
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts
            ?.slice(0, 3)
            .map((post) => <CardPost key={post?.slug} data={post} />)}
        </div>
      </div>
    </section>
  );
}
