//nome, código da disciplina, créditos, período

const Disciplina = ({nome, cod, cred, periodo}) => {

    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Cod: {cod}</h3>
            <h3>Cred: {cred}</h3>
            <h3>Periodo: {periodo}</h3>
        </div>
    )
}

export default Disciplina