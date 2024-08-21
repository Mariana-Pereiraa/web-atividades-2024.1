import React from "react";
import { useState, useEffect } from "react";

const Questao04 = () => {
    // estado para armazenar as capitais
    const [capitais, setCapitais] = useState({ menor: '', maior: '' })

    const fetchCapitais = () => {
        return new Promise((resolve, reject) => {
            const data = [
                { "capital": ["Dublin"], "population": 4994724 },
                { "capital": ["Nicosia"], "population": 1207361 },
                { "capital": ["Madrid"], "population": 47351567 }
            ]
            resolve(data) //resolve a promessa com os dados simulados
        })
    }

    useEffect(() => {
        //função que processa os dados e atualiza o estado
        const capitais = async () => {
            try {
                const data = await fetchCapitais() // obtem os dados da promise

                //filtra países sem capital capital e organiza em ordem crescente
                const orderData = data
                    .filter(({ capital }) => capital)
                    .sort((a, b) => a.population - b.population)

                if (orderData.length > 0) {
                    setCapitais({
                        menor: orderData[0].capital[0],
                        maior: orderData[orderData.length - 1].capital[0],
                    })
                }
                else {
                    setCapitais({ menor: 'Nenhuma', maior: 'Nenhuma' })
                }
            } catch (error) {
                console.error('Erro ao buscar capitais')
            }
        }

        //executa a função para carregar e processar os dados
        capitais();
    }, [])

    return (
        <div>
            <h2>Questão 04</h2>
            <h3>Capitais com maior E menor população</h3>
            <p>Capital com maior população: {capitais.maior}</p>
            <p>Capital com menor população: {capitais.menor}</p>
        </div>
    )
}

export default Questao04;