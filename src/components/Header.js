import Link from "next/link";
import { CircleUser, Store, Heart, ShoppingCart, Search, MapPin, Menu, ChevronDown } from "lucide-react"

export default function Header() {
    return (
        <header>
            <section className="bg-red-600 w-full min-h-24 flex flex-wrap items-center gap-4 md:justify-evenly text-white p-4">
                <Link href="/">
                    <div className="border-y-4 border-white">
                        <h1 className="font-bold text-2xl">Clone das Americanas</h1>
                    </div>
                </Link>

                <div className="flex items-center gap-4 ml-auto md:ml-0 md:order-2">
                    <CircleUser size={40} />
                    <p className="hidden md:block font-bold">Olá, faça seu login <br /> ou cadastre-se</p>
                </div>
                <div className="flex gap-5 md:order-3">
                    <Store />
                    <Heart />
                    <ShoppingCart />
                </div>
                <div className="order-last md:order-0 w-full md:w-auto md:flex-1 md:max-w-md lg:max-w-xl bg-white h-9 rounded-lg flex items-center p-2 text-red-600">
                    <input className="w-full outline-none text-black pl-4" placeholder="Busque aqui seu produto" />
                    <Search />
                </div>
            </section>
            <section className="flex items-center justify-evenly bg-red-600 h-14 text-white font-bold text-sm">
                <div>
                    <a className="flex gap-1">
                        <MapPin />
                        <span>Informe seu CEP</span>
                    </a>
                </div>
                <nav className="hidden lg:block">
                    <ul className="flex gap-2 xl:gap-4">
                        <li><a href="#">baixe o App</a></li>
                        <li><a href="#">peça seu cartão</a></li>
                        <li><a href="#">cliente Plus</a></li>
                        <li><a href="#">mais vendidos</a></li>
                        <li><a href="#">nossas lojas</a></li>
                        <li><a href="#">entrega grátis</a></li>
                        <li><a href="#">leve + pague -</a></li>
                        <li><a href="#">ofertas da TV</a></li>
                        <li><a href="#">ofertas do dia</a></li>
                    </ul>
                </nav>
            </section>
            <section className="bg-background h-9 flex justify-center items-center">
                <nav className="text-[#666666] hidden lg:block">
                    <ul className="flex gap-14">
                        <li>
                            <button className="flex items-center gap-4">
                                <Menu size={14} />
                                <span>todos os departamentos</span>
                                <ChevronDown size={14} />
                            </button>
                        </li>
                        <li><a href="#">mercado</a></li>
                        <li><a href="#">climatização</a></li>
                        <li><a href="#">celulares</a></li>
                        <li><a href="#">eletrodomésticos</a></li>
                        <li><a href="#">informática</a></li>
                        <li><a href="#">aúdio e vídeo</a></li>
                        <li><a href="#">eletroportáteis</a></li>
                        <li><a href="#">móveis</a></li>
                    </ul>
                </nav>
                <button className="lg:hidden" aria-label="Abrir menu">
                    <Menu size={14} />
                </button>
            </section>
        </header>
    );
}
