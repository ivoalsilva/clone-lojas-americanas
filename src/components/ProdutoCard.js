export default function ProdutoCard({ produto }) {
    return (
        <div>
            <img src={produto.imagem} alt= {produto.nome} />
            <span>{produto.nome}</span>
            <span>{produto.preco}</span>
        </div>
    )
}