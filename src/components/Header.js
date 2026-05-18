import { CircleUser, Store, Heart, ShoppingCart, Search, MapPin , Menu ,ChevronDown } from "lucide-react"

export default function Header() {
    return (
        <header>
            <section className="bg-red-600 w-full h-24 flex items-center justify-evenly text-white p-4">
                <div className="border-y-4 border-white">
                    <h1 className="font-bold text-2xl ">Clone das Americanas</h1>
                </div>
                <div className="bg-white w-130 h-8 rounded-lg flex items-center p-2 text-red-600 ">
                    <input className="w-full h-8 outline-none text-black pl-4" placeholder="Busque aqui seu produto"></input>
                    <Search />
                </div>
                <div className="flex items-center gap-4">
                    <CircleUser size={40}/>
                    <p className="font-bold">Olá, faça seu login <br /> ou cadastre-se</p>
                </div>
                <div className="flex gap-5">
                    <Store />
                    <Heart />
                    <ShoppingCart />
                </div>
            </section>
            <section className="flex items-center justify-evenly bg-red-600 h-14 text-white font-bold text-sm">
                <div>
                    <a className="flex gap-1">
                        <MapPin />
                        <span>Informe seu CEP</span>
                    </a>
                </div>
                <nav>
                    <ul className="flex gap-4 ">
                        <li><a href="#">baixe o App</a></li>
                        <li><a href="#">peça seu cartão</a></li>
                        <li><a href="#">cliente Plus</a></li>
                        <li><a href="#">mais vendidos</a></li>
                        <li><a href="#">nossas lojas</a></li>
                        <li><a href="#">entrega grátis</a></li>
                        <li><a href="#">leve + pague -</a></li>
                        <li><a href="#">ofertas da TV</a></li>
                        <li>
                            <a href="#">
                                <span>a</span>
                                ofertas do dia
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className="bg-yellow-600 h-9 flex justify-center items-center">
                <nav>
                    <ul className="flex gap-14">
                        <li>
                            <button className="flex items-center gap-4">
                                <Menu size={14}/>
                                <span>todos os departamentos</span>
                                <ChevronDown size={14}/>
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
            </section>
        </header>
    );
}
