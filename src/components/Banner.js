"use client"

import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { banners } from "@/data/banners";

export default function Banner() {
    const [indice, setIndice] = useState(0);
    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndice((prev) => (prev + 1) % banners.length)
        }, 3000)
        return () => clearInterval(intervalo);
    }, []);
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
};