import Link from 'next/link'
import { SiFacebook, SiInstagram, SiTiktok, SiYoutube } from '@icons-pack/react-simple-icons'
import { ChevronDown } from 'lucide-react'

export default function Footer() {
    return (
        // return() vazio gera erro porque o react espera algum valor
        // return null nao gera erro porque NULL é um valor válido no rect.
        // No React: componente precisa devolver algo renderizável
        <footer>
            {/* ARIA = Accessible Rich Internet Applications. É um conjunto de atributos que dá informação extra pra tecnologias assistivas: aria-label especificamente faz uma coisa só: define um nome acessível pro elemento. Esse nome não aparece na tela — ele é só "lido" pelo leitor de tela quando o usuário navega até aquele elemento. */}
            <nav aria-label="Atendimento" className="my-5 px-4">
                <ul className="flex flex-wrap justify-center gap-4 md:gap-20">
                    <li><a href="#">sac 408545785</a></li>
                    <li><a href="#">guia de segurança</a></li>
                    <li><a href="#">mercado</a></li>
                    <li><a href="#">entregas e devoluções</a></li>
                </ul>
            </nav>
            <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-6 relative bg-gray-200 p-4">
                {/* logo americanas */}
                <Link href="/">
                    <img src="/logos/logo-americanas.svg" alt="americanas - página inicial" />
                </Link>
                {/* (acordeão de categorias) */}
                <details>
                    <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex gap-2 items-center p-1 rounded-sm border border-transparent hover:border-gray-500 font-bold">
                        <span>Categorias</span>
                        <ChevronDown aria-hidden="true" />
                    </summary>

                    {/* aqui vai o conteúdo que aparece quando aberto */}
                    <div className='absolute top-full left-0 right-0 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-200 p-4 z-10'>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-bold'>Institucional</h3>
                            <ul className='flex flex-col gap-4'>
                                <li><a href="">investidores americanas sa</a></li>
                                <li><a href="">governança corporativa</a></li>
                                <li><a href="">lojas americanas</a></li>
                                <li><a href="">assessoria de imprensa</a></li>
                                <li><a href="">trabalhe conosco</a></li>
                                <li><a href="">nossas lojas</a></li>
                                <li><a href="">mercaaado</a></li>
                                <li><a href="">cadastro de proteção à propriedade intelectual</a></li>
                                <li><a href="">canal de denúncias</a></li>
                                <li><a href="">programa de afiliados</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3  className='font-bold'>Dúvidas</h3>
                            <ul className='flex flex-col gap-4'>
                                <li><a href="">central de atendimento</a></li>
                                <li><a href="">entregas e devoluções</a></li>
                                <li><a href="">mapa do site</a></li>
                                <li><a href="">processo de entrega</a></li>
                                <li><a href="">aviso de privacidade</a></li>
                                <li><a href="">regras do site</a></li>
                                <li><a href="">guia de segurança</a></li>
                                <li><a href="">termos e condições de compra e venda de produtos</a></li>
                                <li><a href="">procon-rj</a></li>
                                <li><a href="">verifique o código anatel</a></li>
                                <li><a href="">cupom de desconto</a></li>
                                <li><a href="">marketplace</a></li>
                                <li><a href="">regras para compras internacionais</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3  className='font-bold'>Serviços</h3>
                            <ul className='flex flex-col gap-4'>
                                <li><a href="">cliente a</a></li>
                                <li><a href="">tipos de entrega</a></li>
                                <li><a href="">seguro robo e furto</a></li>
                                <li><a href="">instalação de ar condicionado</a></li>
                                <li><a href="">garantia estendida</a></li>
                                <li><a href="">vale presente</a></li>
                                <li><a href="">para empresas</a></li>
                                <li><a href="">confira todos</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h3  className='font-bold'>AME Digital</h3>
                            <ul>
                                <li><a href="">comunicado</a></li>
                            </ul>
                        </div>
                    </div>
                </details>

                {/* logo redes sociais */}
                <nav className="flex gap-4" aria-label="Redes sociais">
                    {/*
                    aria-label no <a>	leitor de tela	dar nome ao link aria-hidden no ícone leitor de tela	esconder o ornamento visual.
                    
                    rel="noopener noreferrer" segurança e privacidade e decidi cobrir os dois */}
                    <a href="https://www.instagram.com/americanas" aria-label='Instagram' target="_blank" rel="noopener noreferrer">
                        <SiInstagram aria-hidden="true" />
                    </a>
                    <a href="https://www.youtube.com/CanalAmericanas" aria-label='Youtube' target="_blank" rel="noopener noreferrer">
                        <SiYoutube aria-hidden="true" />
                    </a>
                    <a href="https://www.facebook.com/americanas" aria-label='Facebook' target="_blank" rel="noopener noreferrer">
                        <SiFacebook aria-hidden="true" />
                    </a>
                    <a href="https://www.tiktok.com/@americanas" aria-label='Tiktok' target="_blank" rel="noopener noreferrer">
                        <SiTiktok aria-hidden="true" />
                    </a>
                </nav>
            </div>
        </footer>
    )
}