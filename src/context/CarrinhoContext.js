"use client"


import { createContext, useContext, useState } from "react"

const CarrinhoContext = createContext()
// ① cria a "rede" (o roteador desligado)

export function CarrinhoProvider({ children }) {
    const [itens, setItens] = useState([]);

    function adicionar(produto) {
        setItens((prev) => [...prev, produto])
    };
    function remover(id) {
        setItens((prev) => prev.filter((item) => item.id !== id))
    };

    /*Provider é o que liga o Wi-Fi e transmite o sinal. O value é o que ele transmite (a lista + as funções). Tudo que estiver dentro dele ({children} = a aplicação) recebe o sinal. */
    return (
        <CarrinhoContext.Provider value={{ itens, adicionar, remover }}>
            {children} {/*transmite pra toda a app*/}
        </CarrinhoContext.Provider>
    )
}

export function useCarrinho() {
    return useContext(CarrinhoContext)
    //O useContext(CarrinhoContext) lê o value que o Provider está transmitindo e devolve { itens, adicionar, remover }.
    // conecta no Wi-Fi
}