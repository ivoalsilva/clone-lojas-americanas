"use client"

import { useCarrinho } from "@/context/CarrinhoContext"

export default function Carrinho() {
    const { itens } = useCarrinho();

    return (
        <main>
            <h1>Meu carrinho</h1>
            {itens.map(p => (
                <div key={p.id}>
                    {p.nome}
                    {p.preco}
                </div>
            ))}
        </main>
    )
}