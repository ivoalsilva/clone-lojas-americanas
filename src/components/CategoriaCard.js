// componente que desenha um card a partir de uma categoria que ele recebe.
import Image from "next/image"
import Link from 'next/link'
// Ele serve para criar links de navegação entre páginas.
export default function CategoriaCard({categoria}) {
    return (
        <Link href={`/categoria/${categoria.slug}`} className='flex flex-col items-center mt-10 group'>
            <Image className='w-auto h-28 object-contain transition-all duration-200 ease-in-out group-hover:scale-110' width={150} height={150} src={categoria.imagem} alt={categoria.nome} />
            <span className='transition-all duration-200 ease-in-out group-hover:scale-110'>{categoria.nome}</span>
        </Link>
    )
}