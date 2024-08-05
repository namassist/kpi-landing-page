"use client";

import Header from "@/components/header";

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
  return (
    <main className="bg-foreground text-neutral-50">
      <Header />
      {children}
    </main>
  );
}