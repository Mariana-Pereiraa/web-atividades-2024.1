import MeuContexto from "./MeuContexto";
import ComponenteNeto from "./ComponenteNeto";

const ComponenteAvo = () => {
    const numero = 1;

    return(
        <MeuContexto.Provider value = {numero}>
            <div>
                <h1>
                    Componente Avô
                </h1>
                <img 
                    src = {'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png'}
                    alt = "Pokemon"
                    style = {{width: "300px"}}
                />

                <ComponenteNeto/>
            </div>
        </MeuContexto.Provider>
    )
}

export default ComponenteAvo;











