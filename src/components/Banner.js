"use client"

import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { banners } from "@/data/banners";

export default function Banner() {
    const [indice, setIndice] = useState(0)
    return (
        <div className={`h-40 md:h-64 flex items-center justify-center text-white text-4xl md:text-7xl font-bold gap-4 ${banners[indice].cor}`}>
            <button onClick={() => setIndice((indice - 1 + banners.length) % banners.length)} className="cursor-pointer">
                <ChevronLeft className="text-white hover:bg-gray-200 hover:rounded-full" size={80}></ChevronLeft>
            </button>

            {banners[indice].titulo}

            <button onClick={() => setIndice((indice + 1) % banners.length)} className="cursor-pointer">
                <ChevronRight className="text-white hover:bg-gray-200 hover:rounded-full" size={80}></ChevronRight>
            </button>
        </div>
    )
}