import FuncaoB from './FuncaoB';
import FuncaoC from './FuncaoC';
import CorAtiv from './MeuContexto';

const FuncaoA = () => {
    const cores = {bkgA:"green", bkgB:"white", bkgC:"yellow", bkgD:"blue"};

    return (
        <CorAtiv.Provider valor = {cores}>
            <div>
                <h1 
                    style={{backgroundColor:cores.bkgA}}>Função A
                </h1>
                <FuncaoB/>
                <FuncaoC/>
            </div>
        </CorAtiv.Provider>
    )
}

export default FuncaoA;