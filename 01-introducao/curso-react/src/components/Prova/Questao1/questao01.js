import React from "react";

//função arrow do componente Questão01A
const Questao01A = () => {
    const lista = [
        {a: 10, b: 3, c: 7},
        {a: 5, b: -3, c: 9},
        {a: 1, b: 9, c: 40}
    ]

    // passando a lista como props e renderizando componente Questão01B
    return (
        <div>
            <h2>Questão 01</h2>
                <Questao01B lista={lista} />
        </div>
    )
}

//função clássica
function Questao01B(props){

    // mapeia cada objeto da lista e encontra o maior valor entre a, b e c
    const maiorNum = props.lista.map((num, index) => {
        let max = num.a;

        //compara para determinar maior valor
        if(num.b > max){
            max = num.b;
        }
        if(num.c > max){
            max = num.c;
        }

        // retorna o maior e valor encontrado para o objeto atual
        return (
            <div key={index}>
                <p>Maior valor da lista {index + 1}: {max}</p>
            </div>
        )
    })

    return (
        <div>
            <h2>Maiores números da lista:</h2> 
            {maiorNum}
        </div>
    )
}

export default Questao01A;