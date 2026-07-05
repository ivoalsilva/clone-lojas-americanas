import Image from "next/image"
import { produtos } from "@/data/produtos"
import { notFound } from "next/navigation"

export default async function ProdutoPage({ params }) {
    const { id } = await params
    const produto = produtos.find((p) => p.id === Number(id))
    if (!produto) { notFound() }
    const precoFormatado = produto.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

    return (
        <main className="flex flex-col md:flex-row gap-8 p-4">
            <div>
                <Image src={produto.imagem} alt={produto.nome} width={400} height={400}/>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold">{produto.nome}</h1>
                <span className="text-3xl font-bold text-red-600">{precoFormatado}</span>
                <button className="bg-red-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 cursor-pointer transition-colors w-fit">Comprar</button>
            </div>
        </main>
    )
}