import Link from "next/link";
export default function NotFound () {
    return (
        <main className="flex flex-col items-center p-8 mt-16 gap-4">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold">Página não encontrada</h2>
            <p className="text-center text-gray-500">A página que você está procurando não existe ou foi removida.</p>
            <Link className="bg-red-600 text-white px-6 py-3 rounded-lg" href="/">Voltar para a página inicial</Link>
        </main>
    )
}