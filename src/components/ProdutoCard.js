"use client"

import { formatarPreco } from "@/utils/formatarPreco"
import { useCarrinho } from "@/context/CarrinhoContext"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

export default function ProdutoCard({ produto }) {
    const { adicionar } = useCarrinho()
    const precoFormatado = formatarPreco(produto)

    return (
        <div className="bg-white rounded-lg p-3 flex flex-col gap-2 shadow-sm">
            <div className="relative">
                <Link href={`/produto/${produto.id}`}>
                    <Image className="w-auto h-40 object-contain mx-auto" width={200} height={200} src={produto.imagem} alt={produto.nome} />
                </Link>
                {/* por que a seta () =>? Se você escrevesse onClick={adicionar(produto)} (sem a seta), ele chamaria adicionar na hora da renderização, não no clique. A seta cria uma função que só roda quando clica. */}
                <button onClick={() =>
                    adicionar(produto)} aria-label="adicionar ao carrinho" className="absolute bottom-0 right-0 bg-red-600 text-white rounded-full p-2 cursor-pointer">
                    <ShoppingCart size={20} />
                </button>
            </div>
            <Link href={`/produto/${produto.id}`}>
                <span className="line-clamp-2">{produto.nome}</span>
            </Link>
            <span className="font-bold text-red-500">{precoFormatado.preco}</span>
            <span className="text-xs text-red-600 bg-red-100 rounded-full px-2 py-1 w-fit">retire em 2h</span>
        </div>
    )
}