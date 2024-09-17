import React  from "react";
import { useState, useEffect } from "react";

const Questao03 = () => {
    // estado para armazenar as capitais
    const [capitais, setCapitais] = useState({menor: '', maior: ''})

    useEffect(() => {

        const fetchCapitais = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")

                if(!response.ok) throw new Error('Erro na requisição')

                const data = await response.json();

                //filtra países sem capital capital e organiza em ordem crescente
                const orderData = data
                    .filter(({capital}) => capital) //garante q país tenha uma capital
                    .sort((a, b) => a.population - b.population) //ordena os países

                //atualiza o estado com as capitais de menor e maior população
                if(orderData.length > 0){
                    setCapitais({
                        menor: orderData[0].capital[0], //primeira posição após ordenas: menor
                        maior: orderData[orderData.length - 1].capital[0], //última posi~]ao após ordenas : maior 
                    })
                }
                else{
                    setCapitais({menor: 'Nenhuma', maior: 'Nenhuma'})
                }
            } catch (error) {
                console.error('Erro ao buscar capitais')
            }
        }

        //executa a busca de dados
        fetchCapitais();

        //aray vazio indica que o efeito será executado só uma vez 
    }, [])

    return (
        <div>
            <h2>Questão 03</h2>
            <h3>Capitais com maior E menor população</h3>
            <p>Capital com maior população: {capitais.maior}</p>
            <p>Capital com menor população: {capitais.menor}</p>
        </div>
    )
}

export default Questao03;