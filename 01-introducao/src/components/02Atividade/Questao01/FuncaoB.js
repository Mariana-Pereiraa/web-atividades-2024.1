import CorAtiv from "./MeuContexto";

const FuncaoB = () => {
    return (
        <CorAtiv.Consumer>
            {
                ({bkgB}) => {
                    return (
                        <div>
                            <h1 
                            style={{backgroundColor:bkgB}}>Função B
                            </h1>
                        </div>
                    )
                }
            }
        </CorAtiv.Consumer>
    )
}

export default FuncaoB;