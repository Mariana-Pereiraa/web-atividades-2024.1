import { useContext } from "react"
import PookemonDecrementar from "./PokemonDecrementar"
import PookemonIncrementar from "./PokemonIncrementar"
import { PokemonContexto } from "./PokemonContext"

const PookemonImagem = () => {
const id = useContext(PokemonContexto)

    return(
        <div>
            <img src = ""
            alt = "Pokemon"
            width = {150}
            />
            <PookemonIncrementar></PookemonIncrementar>
            <PookemonDecrementar></PookemonDecrementar>
        </div>
    )
}

export default PookemonImagem