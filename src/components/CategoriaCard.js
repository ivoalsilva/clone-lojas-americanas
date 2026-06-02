// componente que desenha um card a partir de uma categoria que ele recebe.

import Link from 'next/link'
// Ele serve para criar links de navegação entre páginas.
export default function CategoriaCard({categoria}) {
    return (
        <Link href={`/categoria/${categoria.slug}`} className='flex flex-col items-center mt-10'>
            <img className='h-30 object-cover' src={categoria.imagem} alt={categoria.nome} />
            <span>{categoria.nome}</span>
        </Link>
    )
}