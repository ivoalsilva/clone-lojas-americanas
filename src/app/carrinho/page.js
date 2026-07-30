"use client"

import { Plus , Minus , Trash} from "lucide-react"
import { formatarPreco } from "@/utils/formatarPreco";
import Image from "next/image";
import { useCarrinho } from "@/context/CarrinhoContext"

export default function Carrinho() {
    const { itens , remover, aumentar , diminuir } = useCarrinho();
    const total = itens.reduce((soma , n) => soma + n.preco * n.quantidade , 0);
    return (
        <main className="p-4 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Meu carrinho</h1>
            {itens.map(p => (
                <div className="flex items-center gap-4 border-b py-3" key={p.id}>
                    <Image className="" src={p.imagem} width={60} height={60} alt={p.nome} />
                    <span className="flex-1">{p.nome}</span>
                    {formatarPreco(p.preco)}

                    <button className="bg-red-600 text-white p-1 rounded-2xl cursor-pointer" onClick={() => diminuir(p.id)} aria-label="diminuir quantidade"><Minus/></button>

                    <span className=" font-bold">{p.quantidade}</span>

                    <button className="bg-red-600 text-white p-1 rounded-2xl cursor-pointer" onClick={() => aumentar(p.id)} aria-label="aumentar quantidade"><Plus/></button>

                    <button className="bg-red-600 rounded-2xl p-1 text-white cursor-pointer" onClick={() => remover(p.id)} aria-label="remover item"><Trash/></button>
                </div>
            ))}
            <p className="text-xl font-bold text-right mt-4">Total: {formatarPreco(total)}</p>
        </main>
    )
}