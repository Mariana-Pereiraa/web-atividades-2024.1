const Produto = ({nome, categoria, valor}) => {

    let objJSON = {nome:"Mariana", idade: 20, curso: "SI", notas: {nota1:10, nota2:9}}

    return (
        <div>
            {/*<h1>{objJSON.nome}</h1>*/}
            <h3>Nome: {nome}</h3>
            <h3>Categoria: {categoria}</h3>
            <h3>Preço: R$ {valor}</h3>
        </div>
    )
}

export default (Produto)