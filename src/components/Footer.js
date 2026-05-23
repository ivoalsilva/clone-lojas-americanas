import Link from 'next/link'
import { SiFacebook, SiInstagram, SiTiktok, SiYoutube } from '@icons-pack/react-simple-icons'

export default function Footer() {
    return (
        // return() vazio gera erro porque o react espera algum valor
        // return null nao gera erro porque NULL é um valor válido no rect.
        // No React: componente precisa devolver algo renderizável
        <footer>
            {/* ARIA = Accessible Rich Internet Applications. É um conjunto de atributos que dá informação extra pra tecnologias assistivas: aria-label especificamente faz uma coisa só: define um nome acessível pro elemento. Esse nome não aparece na tela — ele é só "lido" pelo leitor de tela quando o usuário navega até aquele elemento. */}
            <nav aria-label="Atendimento" className="h-30  my-5 flex items-center justify-center">
                <ul className="flex gap-20">
                    <li><a href="#">sac 408545785</a></li>
                    <li><a href="#">guia de segurança</a></li>
                    <li><a href="#">mercado</a></li>
                    <li><a href="#">entregas e devoluções</a></li>
                </ul>
            </nav>
            <div className="flex justify-evenly">
                {/* logo americanas */}
                <Link href="/">
                    <img src="/logos/logo-americanas.svg" alt="americanas - página inicial" />
                </Link>
                {/* (acordeão de categorias) */}
                <nav aria-label="Categorias"></nav>
                {/* logo redes sociais */}
                <nav className="flex gap-4" aria-label="Redes sociais">
                    {/*
                    aria-label no <a>	leitor de tela	dar nome ao link aria-hidden no ícone leitor de tela	esconder o ornamento visual.
                    
                    rel="noopener noreferrer" segurança e privacidade e decidi cobrir os dois */}
                    <a href="#" aria-label='Instagram'>
                        <SiInstagram aria-hidden="true" target="_blank" rel="noopener noreferrer" />
                    </a>
                    <a href="#" aria-label='Youtube'>
                        <SiYoutube aria-hidden="true"
                            target="_blank" rel="noopener noreferrer" />
                    </a>
                    <a href="#" aria-label='Facebook'>
                        <SiFacebook aria-hidden="true" target="_blank" rel="noopener noreferrer" />
                    </a>
                    <a href="#" aria-label='Tiktok'>
                        <SiTiktok aria-hidden="true" target="_blank" rel="noopener noreferrer" />
                    </a>
                </nav>
            </div>
        </footer>
    )
}