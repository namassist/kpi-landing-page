import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="container w-full py-6 mx-auto mt-auto relative">
      <div className="container flex flex-col items-center justify-between w-full px-4 mx-auto sm:flex-row">
        <div className="flex flex-wrap items-center justify-center w-full sm:justify-end sm:w-auto">
          <div className="grid w-full sm:grid-cols-4 col-span-4 mb-2 text-sm text-center sm:w-auto sm:mb-0">
            <span className="flex w-full sm:w-auto justify-center sm:justify-start">
              {/* <Image
                className="mr-1 rounded-full"
                src="/logo.webp"
                width="20"
                height="20"
                alt="Open X"
              /> */}
              KPI RU7 Kasim
            </span>
          </div>
        </div>
        <div className="mx-auto mb-2 text-xs text-center text-gray-500 grow sm:mb-0">
          2024 Kehati RUVII Kasim, Inc. All Rights Reserved.
        </div>
        <div className="flex flex-wrap items-center justify-center w-full sm:justify-end sm:w-auto">
          <div className="grid w-full grid-cols-4 mb-2 text-xs text-center sm:w-auto sm:mb-0">
            <div className="mx-2 text-gray-100 cursor-pointer hover:text-purple-600">
              Kebijakan
            </div>
            <div className="mx-2 text-gray-100 cursor-pointer hover:text-purple-600">
              Contact Us
            </div>
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-100 hover:text-purple-600"
            >
              Berita
            </a>
            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-gray-100 hover:text-purple-600"
            >
              Laporan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
