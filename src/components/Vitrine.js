import {categorias} from "@/data/categorias"
import CategoriaCard from "@/components/CategoriaCard"

// O categorias.js guarda os dados → a Vitrine importa e percorre com .map() → pra cada item, cria um CategoriaCard e entrega a categoria → o CategoriaCard transforma essa categoria em imagem + nome + link na tela. Cada arquivo tem um trabalho só:
// categorias.js = os dados
// CategoriaCard.js = como um card se parece
// Vitrine.js = junta os dois e produz a lista

export default function Vitrine () {
    return (
        <section>
            <h2 className="text-[#666666] font-bold text-2xl p-4">tuuudo pra curtir o campeonato mundial</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 justify-center px-4">
                {categorias.map((categoria) =>(
                    <CategoriaCard key={categoria.slug} categoria={categoria}/>
                ))}
            </div>
        </section>
    )
}