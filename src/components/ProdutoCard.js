import {ShoppingCart} from "lucide-react"

export default function ProdutoCard({ produto }) {
    const precoFormatado = produto.preco.toLocaleString("pt-BR" , { style: "currency" , currency:"BRL" })
    return (
        <div className="bg-white rounded-lg p-3 flex flex-col gap-2 shadow-sm">
            <div className="relative">
                <img className="h-40 object-contain mx-auto" src={produto.imagem} alt={produto.nome}/>
                <button aria-label="adicionar ao carrinho" className="absolute bottom-0 right-0 bg-red-600 text-white rounded-full p-2 ">
                    <ShoppingCart size={20}/>
                </button>
            </div>
            <span className="line-clamp-2">{produto.nome}</span>
            <span className="font-bold text-red-500">{precoFormatado}</span>
            <span className="text-xs text-red-600 bg-red-100 rounded-full px-2 py-1 w-fit">retire em 2h</span>
        </div>
    )
}



// .toLocaleString("pt-BR", ...) → formata segundo as regras do Brasil (vírgula decimal, ponto de milhar);