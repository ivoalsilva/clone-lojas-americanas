import { produtos } from "@/data/produtos"
import ProdutoCard from "@/components/ProdutoCard"


export default async function BuscaPage({ searchParams }) {
    const { q } = await searchParams
    const resultados = produtos.filter((p) => p.nome.toLowerCase().includes(q.toLowerCase()))
    return (
        <main>
            <h1>Resultados para: {q}</h1>
            {resultados.length === 0 ? (<p>Nenhum produto encontrado!</p>) :
                (<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {resultados.map((produto) => (<ProdutoCard key={produto.id} produto={produto} />))}
                </div>)}

        </main>
    )
}
// produtoCard é um molde vazio que recebe da prop produto do .map, que rebece da const resultados, que recebe só os que combinam com a busca.