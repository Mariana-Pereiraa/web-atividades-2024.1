import { useContext } from "react";
import MeuContexto from "./MeuContexto";
import ComponenteFilho from "./ComponenteFilho";

const ComponenteNeto = () => {
    const contador = useContext(MeuContexto);

    return(
        <div>
            <h1>
                Componente Neto
            </h1>
            <img
                src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador+1}.png`}
                alt = "Pokemon"
                style = {{width: "300px"}}
            />
            <ComponenteFilho/>
        </div>
    )
}

export default ComponenteNeto;