import { useContext } from "react";
import MeuContexto from "./MeuContexto";

const ComponenteFilho = () => {
    const contador = useContext(MeuContexto);

    return(
        <div>
            <h1>
                Componente Filho
            </h1>
            <img 
                src = {'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador+2}.png'}
                alt = "Pokemon"
                style = {{Width: "300px"}}
            />
        </div>
    )
}

export default ComponenteFilho;