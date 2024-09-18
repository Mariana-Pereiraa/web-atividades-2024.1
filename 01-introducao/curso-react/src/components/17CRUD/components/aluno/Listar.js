import "../../css/crud.css"
import AlunoService from "../../services/AlunoService";

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";



const Listar = () => {

  const [alunos, setAlunos] = useState([])
  const navigate = useNavigate()
  const [color, setColor] = useState(false);
  const [media, setMedia] = useState(0);


  useEffect(
    () => {
      AlunoService
      .getAlunosFetchAsyncAwait(data => setAlunos(data))
      AlunoService.media((data) => setMedia(data))
    }
    ,
    []
  )

  //delet aluno
  const handleDelete = (id) => {
    if (window.confirm(`Deseja excluir id = ${id}`)) {
      AlunoService.deleteAluno(
        id,
      (response) =>{
        alert(response)
        const result = alunos.filter((aluno) => aluno._id!==id)
        setAlunos(result)
        AlunoService.media((data) => setMedia(data))
      })

    }
  }

    const calcularMediaIRA = () => {
        if (alunos.length === 0) return 0;
        const somaIRA = alunos.reduce((acc, aluno) => acc + parseFloat(aluno.ira), 0);
        return (somaIRA / alunos.length).toFixed(2);
    };


    const handleColor = () => {
        setColor(!color);
    };


    const getLinha = (ira) => {
        if (!color) {
            return "aluno";
        }
        const media = calcularMediaIRA();
        console.log(`IRA: ${ira}, Média: ${media}`); // Debug: Verificar valores de IRA e Média
        if (Number(ira) < Number(media)) return "table-danger"; // Vermelho
        if (Number(ira) > Number(media)) return "table-info"; // Azul
        return ""; 
        
    };



  const renderizarAlunos = () => {
    return alunos.map((aluno) => {
        return (
            <tr key={aluno._id} className={getLinha(aluno.ira)}>
                <th scope="row">{aluno._id}</th>
                <td>{aluno.nome}</td>
                <td>{aluno.curso}</td>
                <td>{aluno.ira}</td>

                <td>
                    <div className="button-content">
                        <Link to={`/aluno/editar/${aluno._id}`} className="btn btn-primary">
                            Editar
                        </Link>
                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(aluno._id)}>
                            Apagar
                        </button>
                    </div>
                </td>
            </tr>

        )
    })

    
  }



    return (
        <div className={"page-content"}>
            <h1>Listar Alunos</h1>
            <button onClick={handleColor} className="btn btn-secondary" >
                {color ? "Retornar Padrão" : "Classificando Por Média"}
            </button>
            <div>
                <table className="table table-striped table-bordered table-content">
                    <thead>
                    <tr>
                        <th scope="col" >ID</th>
                        <th scope="col" >Nome</th>
                        <th scope="col" >Curso</th>
                        <th scope="col" >IRA</th>
                        <th scope="col" ></th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderizarAlunos()}
                    <tr>
                        <th className="table-warning"  scope="row">Média dos IRAS</th>
                        <td className="table-warning"></td>
                        <td className="table-warning"></td>
                        <td className="table-warning" >{media.media}</td>
                        <td className="table-warning"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Listar;