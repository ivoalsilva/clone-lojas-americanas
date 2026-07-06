"use client"

import Image from "next/image";
import { useCarrinho } from "@/context/CarrinhoContext"

export default function Carrinho() {
    const { itens , remover } = useCarrinho();
    const total = itens.reduce((soma , n) => soma + n.preco , 0);
    return (
        <main className="p-4 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Meu carrinho</h1>
            {itens.map(p => (
                <div className="flex items-center gap-4 border-b py-3" key={p.id}>
                    <Image className="" src={p.imagem} width={60} height={60} alt={p.nome} />
                    <span className="flex-1">{p.nome}</span>
                    {p.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    <button className="bg-red-600 rounded-2xl p-2 text-white cursor-pointer" onClick={() => remover(p.id)}>Remover</button>
                </div>
            ))}
            <p className="text-xl font-bold text-right mt-4">Total: {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
        </main>
    )
}