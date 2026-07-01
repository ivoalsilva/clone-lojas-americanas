import {produtos} from "@/data/produtos"
import {notFound} from "next/navigation"

export default async function ProdutoPage ({params}) {
    const {id} = await params
    const produto = produtos.find((p) => p.id === Number(id))
    if(!produto) {notFound()}
    return (
        <main>
            <h1>{produto.nome}</h1>
            <p>{produto.preco}</p>
        </main>
    )
}