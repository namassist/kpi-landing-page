"use client";

import Header from "@/components/header";
import Footer from "../footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="text-neutral-50">
      <Header />
      {children}
      {/* <Footer /> */}
    </main>
  );
}
