"use client"

import { useCarrinho } from "@/context/CarrinhoContext"

export default function BotaoComprar({ produto }) {
    const { adicionar } = useCarrinho()
    return (
        <button className="bg-red-600 rounded-2xl text-white px-8 py-3 w-fit font-bold cursor-pointer" onClick={() => adicionar(produto)}>Comprar</button>
    )
}