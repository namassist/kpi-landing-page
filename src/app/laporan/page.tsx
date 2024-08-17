"use client";

import React from "react";
import MainLayout from "@/components/layouts/main";
import { HeroSlider } from "@/components/hero/slider";
import { Tabs } from "@/components/ui/tabs";
import { DataTable } from "./data-table";
import { columnKonservasi, columns, Flora, Konservasi } from "./columns";
import { laporanTab } from "@/lib/data";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function Home() {
  const tabs = laporanTab.map((tab) => ({
    title: tab.title,
    value: tab.value,
    content: (
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-background">
        <div
          className={`w-full overflow-hidden relative h-[800px] rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1a56a9] to-[#1351a1] space-y-10`}
        >
          <p className="text-center">{tab.contentTitle}</p>
          {tab?.is_konservasi ? (
            <DataTable
              columns={columnKonservasi}
              data={tab.data as Konservasi[]}
            />
          ) : (
            <DataTable columns={columns} data={tab.data as Flora[]} />
          )}
        </div>
      </BackgroundGradient>
    ),
  }));

  return (
    <MainLayout>
      <HeroSlider />
      <div className="container mx-auto py-10 space-y-10">
        <Tabs tabs={tabs} />
      </div>
    </MainLayout>
  );
}
