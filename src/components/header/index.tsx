"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const navigations = [
    {
      id: 1,
      href: "/",
      name: "profil"
    },
    {
      id: 2,
      href: "/kebijakan",
      name: "kebijakan"
    },
    {
      id: 3,
      href: "/berita",
      name: "berita"
    },
    {
      id: 4,
      href: "/laporan",
      name: "laporan"
    },
    {
      id: 5,
      href: "/dokumentasi",
      name: "dokumentasi"
    },
  ]
  return (
    <header className="z-[10000] max-w-screen top-0 left-0 center fixed h-20 w-screen">
      <div className="flex w-full items-center justify-between px-6 xl:px-24 my-2 relative z-[10000] text-white">
        <a
          href="/"
          className="relative flex items-center h-full pt-2 space-x-2 group min-w-max"
        >
          <span className="text-xl font-semibold font-primary font-inter group-hover:text-white">
            KPI.RU7
          </span>
        </a>
        <div className="flex items-center space-x-8 z-[10000]">
          <span className="hidden md:flex gap-3 mt-2 z-[10000]">
            {navigations?.map((nav) => (
              <a
                className={`capitalize animate-fade-in min-w-fit flex text-left shadow-sm px-4 py-2 h-fit rounded-lg font-semibold ${pathname === nav?.href ? "bg-gradient-to-tr from-[#336BB7] to-[#6C5DD3]" : "hover:border hover:border-zinc-700/50 hover:bg-zinc-700/50 border border-black/0 hover:shadow-2xl hover:shadow-gray-900 hover:bg-opacity-70"}`}
                href={`${nav?.href}`}
                key={nav?.id}
                >
                <div className="relative w-fit">
                  <div className="min-w-[50x]">{nav?.name}</div>
                </div>
              </a>
            ))}
          </span>
        </div>
        <div className="!z-[10000000] flex items-center space-x-2 lg:space-x-8">
          <button className="!z-[100000] hidden md:block mt-2 py-1 rounded-lg border px-4 w-fit text-sm lg:text-base hover:bg-zinc-800 ">
            Hubungi Kami
          </button>
          <div className="z-[10000] block md:hidden mt-2 py-1 px-4 w-fit !text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="z-[10000] w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full border -z-1 backdrop-blur-lg backdrop-filter bg-zinc-900/40 border-zinc-700"></div>
    </header>
  );
}
