import "./estilos.css"

// arrow function sem return
// const MeusDados = () =>
//     <div>
//         <h1>
//             Nome: Mariana Pereira da Silva
//         </h1>
//         <h1>
//             Curso: Sistemas de Informação
//         </h1>
//         <h1>
//             Universidade: Universidade Federal do Ceará - Campus Quixadá
//         </h1>
//     </div>

export default MeusDados

//arrow function com return

// const MeusDados = () => {
//     return (
//         <div>
//             <h1>
//                 Nome: Mariana Pereira da Silva
//             </h1>
//             <h1>
//                 Curso: Sistemas de Informação
//             </h1>
//             <h1>
//                 Universidade: Universidade Federal do Ceará - Campus Quixadá
//             </h1>
//         </div>
//     )
// }

// funciton

function MeusDados() {
    return (
        <div>
            <h1>
                Nome: Mariana Pereira da Silva
            </h1>
            <h1>
                Curso: Sistemas de Informação
            </h1>
            <h1>
                Universidade: Universidade Federal do Ceará - Campus Quixadá
            </h1>
        </div>
    )
}