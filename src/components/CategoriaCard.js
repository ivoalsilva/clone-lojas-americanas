// componente que desenha um card a partir de uma categoria que ele recebe.

import Link from 'next/link'
// Ele serve para criar links de navegação entre páginas.
export default function CategoriaCard({categoria}) {
    return (
        <Link href={`/categoria/${categoria.slug}`} className='flex flex-col items-center mt-10 group'>
            <img className='h-30 object-cover transition-all duration-200 ease-in-out group-hover:scale-110' src={categoria.imagem} alt={categoria.nome} />
            <span className='transition-all duration-200 ease-in-out group-hover:scale-110'>{categoria.nome}</span>
        </Link>
    )
}