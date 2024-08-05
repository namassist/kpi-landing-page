import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { LineChartComponent } from "@/components/charts/line";
import { Highlight } from "@/components/ui/hero-highlight";

export default function Program({
    reverse = false
}: {
    reverse?: Boolean
}) {
    const images = [
        "https://images.unsplash.com/photo-1602860109208-613d39362844?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1678984239726-ac972091a751?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1649294010513-6c2a5b0c35fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
    
  return (
    <motion.div className={`w-full flex items-center gap-2 ${reverse ? "flex-row-reverse" : ""}`}>
        <motion.div className="w-full md:w-6/12">
        <motion.h4 className="font-bold text-xl md:text-3xl capitalize bg-clip-text text-transparent bg-gradient-to-r from-[#458ff8] to-[#5A8ED4]">
        Konservasi{" "} 
        <Highlight duration={0.5} className="capitalize text-neutral-200">
            Mambruk Ubiaat
        </Highlight>{" "} 
            PT Kilang Pertamina Internasional RU VII Kasim <br />
        </motion.h4>
        <motion.p className="leading-relaxed mt-5">
        Program konservasi Mambruk ini menjadi salah satu program unggulan dari PT Kilang Pertamina Internasional Refinery Unit VII Kasim. Program tersebut merupakan aksi nyata untuk menjaga kelestarian burung langka ini yang merupakan satwa endemik Papua dari ancaman kepunahan.
        </motion.p>
        <div className="flex justify-start mt-5">
        {images.map((image, idx) => (
        <motion.div
            key={"images" + idx}
            style={{
            rotate: Math.random() * 30 - 10,
            }}
            whileHover={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
            }}
            whileTap={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
        >
            <Image
            src={image}
            alt="bali images"
            width="500"
            height="500"
            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
        </motion.div>
        ))}
    </div>
        </motion.div>
        <motion.div className="w-full md:w-6/12 p-14">
        <LineChartComponent/>
        </motion.div>
    </motion.div>
  )
}
