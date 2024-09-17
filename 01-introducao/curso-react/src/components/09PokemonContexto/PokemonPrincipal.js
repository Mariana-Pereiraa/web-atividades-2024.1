
import PookemonImagem from "./PokemonImagem"
import { PokemonContexto } from "./PokemonContext"
import { useState } from "react"

const PokemonPrincipal = () => {
    // const id = 10
    const [id, set] = useState(150)
    const url = "" 
    return(
        <div>
            <h3>
                Pokemon!
            </h3>
            <PokemonContexto.Provider value = {id}>
            <PookemonImagem />
            </PokemonContexto.Provider>
            
        </div>
    )
}

export default PokemonPrincipal