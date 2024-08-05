"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroSlider } from "@/components/hero/slider";
import MainLayout from "@/components/layouts/main";
import Program from "@/components/programs";

export default function Home() {
  const programs = [
    {
      id: 1,
      name: "Program Konservasi Mambruk Ubiaat",
      start_at: 2023,
      end_at: 2024,
      description: "Program konservasi Mambruk ini menjadi salah satu program unggulan dari PT Kilang Pertamina Internasional Refinery Unit VII Kasim. Program tersebut merupakan aksi nyata untuk menjaga kelestarian burung langka ini yang merupakan satwa endemik Papua dari ancaman kepunahan.",
      chartData: [
        { year: "2021", populasi: 0 },
        { year: "2022", populasi: 3 },
        { year: "2023", populasi: 10 },
        { year: "2024", populasi: 10 },
      ],
      images: [
        "https://images.unsplash.com/photo-1602860109208-613d39362844?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1678984239726-ac972091a751?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1649294010513-6c2a5b0c35fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 2,
      name: "Program Konservasi Rusa timorensis",
      start_at: 2022,
      end_at: 2024,
      description: "Program konservasi Rusa Timor di PT Kilang Pertamina Internasional Refinery Unit VII Kasim yang menjadi salah satu program unggulan perusahaan dapat membantu melindungi dan menjaga kelestarian Rusa Timor dengan melakukan penangkaran.",
      chartData: [
        { year: "2021", populasi: 16 },
        { year: "2022", populasi: 19 },
        { year: "2023", populasi: 20 },
        { year: "2024", populasi: 21 },
      ],
      images: [
        "https://images.unsplash.com/photo-1602860109208-613d39362844?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1678984239726-ac972091a751?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1649294010513-6c2a5b0c35fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 3,
      name: "Program Perlindungan Ekosistem Mangrove",
      start_at: 2022,
      end_at: 2024,
      description: "Ekosistem mangrove menjadi hal yang sangat penting dalam keseimbangan ekosistem di wilayah pantai, karena banyak fungsi mangrove yang tidak dapat digantikan oleh ekosistem atau vegetasi lain mulai dari fungsi fisik, ekologis hingga ekonomis. Area konservasi mangrove di kawasan PT Kilang Pertamina Internasional Refinery Unit VII Kasim merupakan salah satu ekosistem yang penting karena mempunyai potensi dalam penyerapan karbon",
      chartData: [
        { year: "2021", populasi: 32.93 },
        { year: "2022", populasi: 39.42 },
        { year: "2023", populasi: 42.52 },
      ],
      images: [
        "https://images.unsplash.com/photo-1602860109208-613d39362844?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1678984239726-ac972091a751?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1649294010513-6c2a5b0c35fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
    {
      id: 3,
      name: "Program Perlindungan Ekosistem Mangrove",
      start_at: 2022,
      end_at: 2024,
      description: "Ekosistem mangrove menjadi hal yang sangat penting dalam keseimbangan ekosistem di wilayah pantai, karena banyak fungsi mangrove yang tidak dapat digantikan oleh ekosistem atau vegetasi lain mulai dari fungsi fisik, ekologis hingga ekonomis. Area konservasi mangrove di kawasan PT Kilang Pertamina Internasional Refinery Unit VII Kasim merupakan salah satu ekosistem yang penting karena mempunyai potensi dalam penyerapan karbon",
      chartData: [
        { year: "2021", populasi: 32.93 },
        { year: "2022", populasi: 39.42 },
        { year: "2023", populasi: 42.52 },
      ],
      images: [
        "https://images.unsplash.com/photo-1602860109208-613d39362844?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1678984239726-ac972091a751?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1649294010513-6c2a5b0c35fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]
    },
  ]
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
        <Program/>
        <Program reverse={true}/>
        <Program/>
      </motion.div>
    </MainLayout>
  );
}