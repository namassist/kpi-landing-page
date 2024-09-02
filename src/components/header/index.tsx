"use client";

import * as React from "react";
import { navigations } from "@/lib/data";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlignJustify,
  Download,
  Facebook,
  InstagramIcon,
  Phone,
} from "lucide-react";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="z-[10000] max-w-screen top-0 left-0 center fixed h-20 w-screen text-foreground">
      <div className="flex w-full items-center justify-between px-8 xl:px-24 my-2 relative z-[10000]">
        <Link href="/" className="relative flex items-center group min-w-max">
          <Image
            src="/logo-kpi.png"
            alt="bali images"
            width="500"
            height="500"
            className="rounded-lg object-cover flex-shrink-0 w-32"
          />
        </Link>
        <div className="flex items-center space-x-8 z-[10000]">
          <span className="hidden lg:flex gap-3 mt-2 z-[10000]">
            {navigations?.map((nav) =>
              nav.href === "/publikasi" ? (
                <DropdownMenu key={nav?.id}>
                  <DropdownMenuTrigger asChild>
                    <span
                      className={`capitalize animate-fade-in min-w-fit flex text-left px-4 py-2 h-fit rounded-lg font-semibold hover:border hover:border-neutral-300 hover:bg-[#0072CE] hover:text-white border border-white/0 hover:shadow-2xl cursor-pointer`}
                    >
                      <div className="relative w-fit">
                        <div className="min-w-[50x]">{nav.title}</div>
                      </div>
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="max-w-lg !z-[10000000]">
                    <DropdownMenuItem>
                      <Link
                        href="/tindakan-nyata-untuk-alam.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        locale={false}
                        className="flex items-center capitalize"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Tindakan Nyata Untuk Alam
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/ragam-burung-di-papua-barat.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        locale={false}
                        className="flex items-center capitalize"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        ragam burung di papua barat
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  className={`capitalize animate-fade-in min-w-fit flex text-left px-4 py-2 h-fit rounded-lg font-semibold ${
                    pathname === nav?.href ||
                    pathname.startsWith("/" + nav?.name)
                      ? "bg-[#0072CE] text-white"
                      : "hover:border hover:border-neutral-300 hover:bg-[#0072CE] hover:text-white border border-white/0 hover:shadow-2xl"
                  }`}
                  href={`${nav?.href}`}
                  key={nav?.id}
                >
                  <div className="relative w-fit">
                    <div className="min-w-[50x]">{nav?.title}</div>
                  </div>
                </Link>
              )
            )}
          </span>
        </div>
        <div className="hidden lg:block mt-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Phone className="mr-2 h-4 w-4" /> Hubungi Kami
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 !z-[10000000]">
              <DropdownMenuItem>
                <Link
                  href="https://www.facebook.com/pertamina.ru7"
                  className="flex items-center"
                >
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="https://www.instagram.com/pertamina_ru7/"
                  className="flex items-center"
                >
                  <InstagramIcon className="mr-2 h-4 w-4" />
                  Instagram
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="block lg:hidden">
          <Drawer direction={"right"}>
            <DrawerTrigger asChild>
              <Button variant="outline">
                <AlignJustify className="w-5 h-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-full w-[35%] bg-red-200 mt-28">
              <DrawerHeader className="text-right">
                <DrawerTitle>Citation</DrawerTitle>
                <DrawerDescription>
                  Make sure to check if the given answer is align with the
                  original source.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter className="pt-2">
                <p className="text-sm italic">
                  Thank you for <strong>diligently</strong> double checking!
                </p>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full border -z-1 backdrop-filter backdrop-blur-lg border-neutral-200 transition-colors duration-1000 ease-in-out ${scrolled ? "bg-neutral-100/50" : "bg-neutral-100"}`}
      ></div>
    </header>
  );
}
