import CorAtiv from "./MeuContexto";
import { useContext } from "react";

const FuncaoD = () => {
    const {bkgD} = useContext(CorAtiv);
    return (
        <CorAtiv.Consumer>
            {
                ({bkgD}) =>
                    <div>
                        <h1 
                            style={{backgroundColor:bkgD}}>Função D
                        </h1>
                    </div>
            }
        </CorAtiv.Consumer>
    )
}

export default FuncaoD;