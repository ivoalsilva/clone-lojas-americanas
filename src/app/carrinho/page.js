"use client"

import { useCarrinho } from "@/context/CarrinhoContext"

export default function Carrinho() {
    const { itens , remover } = useCarrinho();
    const total = itens.reduce((soma , n) => soma + n.preco , 0);
    return (
        <main>
            <h1>Meu carrinho</h1>
            {itens.map(p => (
                <div key={p.id}>
                    {p.nome}
                    {p.preco}
                    <button onClick={() => remover(p.id)}>Remover</button>
                </div>
            ))}
            <p>Total: {total}</p>
        </main>
    )
}