import React from "react";
import Image from "next/image";
import Link from "next/link";

// interface
interface ChartData {
  year: string;
  populasi: number;
}

interface CardPostData {
  title: string;
  author: string;
  contents: string[];
  thumbnail: string;
  createdAt: string;
  slug: string;
  chart: ChartData[];
}

export default function CardPost({ data }: { data: CardPostData }) {
  const truncateDescription = (description: string, maxChars: number) => {
    return description.length > maxChars
      ? description.slice(0, maxChars) + " ...."
      : description;
  };

  return (
    <Link href={`/berita/${data.slug}`} className="w-full group/card mb-10">
      <div
        className={`cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl backgroundImage flex flex-col justify-between p-4 bg-cover`}
        style={{ backgroundImage: `url(${data.thumbnail})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 bg-black opacity-50"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="https://github.com/namassist.png"
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {data.author}
            </p>
            <p className="text-sm text-gray-400">{data.createdAt}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10 overflow-hidden text-ellipsis whitespace-nowrap">
            {data.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {truncateDescription(data.contents[0], 80)}
          </p>
        </div>
      </div>
    </Link>
  );
}
