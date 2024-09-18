import "../../css/crud.css"
import AlunoService from "../../services/AlunoService";

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";



const Listar = () => {

  const [alunos, setAlunos] = useState([])
  const navigate = useNavigate()

  useEffect(
    () => {
      AlunoService
      .getAlunosFetchAsyncAwait(data => setAlunos(data))
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
      })

    }
  }

  const renderizarAlunos = () => {
    const vetorResultado = alunos.map(
        (aluno) => {
            return (
                <tr>
                    <th scope="row">{aluno._id}</th>
                    <td>{aluno.nome}</td>
                    <td>{aluno.curso}</td>
                    <td>{aluno.ira}</td>
                    <td>
                        <div className="button-content">
                            <Link 
                              to={`/aluno/editar/${aluno._id}`}
                              className="btn btn-primary"
                            >
                              Editar
                            </Link>
                            <button 
                              type="button" 
                              className="btn btn-danger"
                              onClick={() => handleDelete(aluno._id)}
                            >
                              Apagar
                            </button>
                        </div>
                    </td>
                </tr>
            )
        }
    )
    return vetorResultado;
  };

  return (
    <div className="page-content">
      <h1>Listar Aluno</h1>
      <div className="table-content">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">Ira</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {renderizarAlunos()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listar;