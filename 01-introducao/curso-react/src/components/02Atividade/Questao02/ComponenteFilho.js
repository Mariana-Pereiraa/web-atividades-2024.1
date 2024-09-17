import { useContext } from "react";
import MeuContexto from "./MeuContexto";

const ComponenteFilho = () => {
    const numero = useContext(MeuContexto);

    return(
        <div>
            <h1>
                Componente Filho
            </h1>
            <img 
                src = {'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+2}.png'}
                alt = "Pokemon"
                style = {{Width: "300px"}}
            />
        </div>
    )
}

export default ComponenteFilho;