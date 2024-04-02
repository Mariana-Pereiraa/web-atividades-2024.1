const MeusDadosProps = ({nome, curso, universidade}) => {

    // let objJSON = {nome, curso, universidade};

    return (
        <div>
            {/*<h1>{objJSON.nome}</h1>*/}
            <h3>Nome: {nome}</h3>
            <h3>Curso: {curso}</h3>
            <h3>Universidade: {universidade}</h3>
        </div>
    )
}

export default MeusDadosProps