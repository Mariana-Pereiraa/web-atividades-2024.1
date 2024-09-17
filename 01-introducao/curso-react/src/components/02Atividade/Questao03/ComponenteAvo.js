import MeuContexto from "./MeuContexto";
import { useState } from "react";
import ComponenteNeto from "./ComponenteNeto";

const ComponenteAvo = () => {
    const [contador, setContador] = useState(1);

    const incrementar = () => {
        setContador(contador + 1);
    }

    return(
        <MeuContexto.Provider value = {contador}>
            <div>
                <h1>
                    Componente Avô
                </h1>
                <img 
                    src = {'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png'}
                    alt = "Pokemon"
                    style = {{width: "300px"}}
                />
                 <button 
                    onClick={incrementar}>
                    Incrementar  Número
                </button>

                <ComponenteNeto/>
            </div>
        </MeuContexto.Provider>
    )
}

export default ComponenteAvo;