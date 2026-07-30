"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CarrinhoContext = createContext()
// ① cria a "rede" (o roteador desligado)

export function CarrinhoProvider({ children }) {
    const [itens, setItens] = useState([]);

    function adicionar(produto) {
        setItens((prev) => {
            const existe = prev.find((item) => item.id === produto.id)
            if (existe) {
                return prev.map((item) => item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item)
            } else {
                return [...prev, { ...produto, quantidade: 1 }]
            }
        })
    }

    function diminuir(id) {
        setItens((prev) => {
            const item = prev.find((i) => i.id === id)
            if (item.quantidade === 1) {
                return prev.filter((i) => i.id !== id)
            } else {
                return prev.map((i) => i.id === id ? { ...i, quantidade: i.quantidade - 1 } : i)
            }
        })
    }

    function aumentar(id) {
        setItens((prev) => prev.map((item) => item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item))
    }

    function remover(id) {
        setItens((prev) => prev.filter((item) => item.id !== id))
    };
    useEffect(() => {
        // A lógica: "quando o app abre, olha na gaveta; se tem carrinho salvo, recupera ele."
        const salvo = localStorage.getItem("carrinho")
        if (salvo) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setItens(JSON.parse(salvo))
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("carrinho", JSON.stringify(itens))
    }, [itens])

    /*Provider é o que liga o Wi-Fi e transmite o sinal. O value é o que ele transmite (a lista + as funções). Tudo que estiver dentro dele ({children} = a aplicação) recebe o sinal. */
    return (
        <CarrinhoContext.Provider value={{ itens, adicionar, remover, diminuir, aumentar }}>
            {children} {/*transmite pra toda a app*/}
        </CarrinhoContext.Provider>
    )
}

export function useCarrinho() {
    return useContext(CarrinhoContext)
    //O useContext(CarrinhoContext) lê o value que o Provider está transmitindo e devolve { itens, adicionar, remover }.
    // conecta no Wi-Fi
}