import {categorias} from "@/data/categorias"
export default async function CategoriaPage({params}) {
    const {slug} = await params
    const categoria = categorias.find((cat) => cat.slug === slug)
    return (
        <h1>{slug}</h1>
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