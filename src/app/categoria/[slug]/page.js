import ProdutoCard from "@/components/ProdutoCard"
import { produtos } from "@/data/produtos"
import { categorias } from "@/data/categorias"
import { notFound } from "next/navigation"
export default async function CategoriaPage({ params }) {
  const { slug } = await params
  const categoria = categorias.find((cat) => cat.slug === slug)
  const produtosDaCategoria = produtos.filter((p) => p.categoriaSlug === slug)
  if (!categoria) {
    notFound()
  }
  return (
    <main>
      <h1>{categoria.nome}</h1>
      <img src={categoria.imagem} alt={categoria.nome} />
      {produtosDaCategoria.map((produto) => (<ProdutoCard key={produto.id} produto={produto}/>))}
    </main>
  )
};
// await = "espera ficar pronto antes de continuar";
// async = "permissão pra função poder usar await".

/*
        EXPLICAÇAO DO FLUXO
HOME:
  .map() → cria os cards (mostra NOME + IMAGEM)
           e embute o SLUG no href do <Link>   ← slug invisível aqui

CLIQUE:
  <Link> escreve o slug NA url → /categoria/bebidas   ← IDA

PÁGINA [slug]:
  Next lê o slug DA url → cria params { slug: "bebidas" }
  const { slug } = await params → slug numa variável usável   ← VOLTA
*/