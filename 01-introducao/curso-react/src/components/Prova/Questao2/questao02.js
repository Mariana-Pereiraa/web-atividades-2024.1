import { useState } from "react";

const Questao02 = () => {
    //estado que determina qaul lado da imagem será exibido
    const [front, setFront] = useState(true);

    const frente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    const costas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"

    //alterna entre frente e costa
    const virar = () => {
        setFront(!front)
    }

        // exibe a imagem entre frente e costa
        // botão para alternar
    return (
        <div>
            <h2>Questão 02</h2>
            <img src={front ? costas : frente} alt = "Pokemon" onClick={virar}/>
            <button onClick={virar}>Virar Pokémon</button>
        </div>
    )
}

export default Questao02;