import "../../css/crud.css"
import AlunoService from "../../services/AlunoService";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ListarCurso = () => {

    const [alunos, setAlunos] = useState([]);
    const [color, setColor] = useState(false);
    const [CursoAluno, setCursoAluno] = useState({});

    useEffect(() => {
        AlunoService.getAlunosFetchAsyncAwait((data) => {
            setAlunos(data);
            juntarAlunos(data);  // Chama a função juntarAlunos aqui
        });
    }, []);

    const handleColor = () => {
        setColor(!color);
    };

    const juntarAlunos = (alunos) => {
        const juntos = {};
        alunos.forEach((aluno) => {
            if (!juntos[aluno.curso]) {
                juntos[aluno.curso] = [];
            }
            juntos[aluno.curso].push(aluno);
        });
        setCursoAluno(juntos);
    };

    const getLinha = (ira) => {
        if (!color) {
            return "aluno";
        }
        return ira < 7 ?  "table-danger" : "table-info";
        
    };

    const handleDelete = (id) => {
        if (window.confirm(`Deseja excluir id = ${id}`)) {
            AlunoService.deleteAluno(id, (response) => {
                alert(response);
                const result = alunos.filter((aluno) => aluno._id !== id);
                setAlunos(result);
                juntarAlunos(result);  // Atualiza a lista após deletar
            });
        }
    };

    const renderizarAlunosPorCurso = () => {
        return Object.keys(CursoAluno).map((curso) => (
            <div key={curso} className="mb-4">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="table-dark" colSpan="3">{curso}</th>
                            <th className="table-dark"></th>
                        </tr>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">IRA</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {CursoAluno[curso].map((aluno) => ( // Corrigir o nome do parâmetro para 'aluno'
                            <tr key={aluno._id} className={getLinha(aluno.ira)}>
                                <th scope="row">{aluno._id}</th>
                                <td>{aluno.nome}</td>
                                <td>{aluno.ira}</td>
                                <td>
                                    <div className="button-content">
                                        <Link to={`/aluno/editar/${aluno._id}`} className="btn btn-primary">
                                            Editar
                                        </Link>
                                        <button 
                                            type="button" className="btn btn-danger"
                                            onClick={() => handleDelete(aluno._id)}>
                                            Apagar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ));
    };

    return (
        <div className="page-content">
            <h1>Listar Aluno Por Curso</h1>
            <button onClick={handleColor} className="btn btn-secondary mb-3">
                {color ? "Retornar Padrão" : "Aplicar Cores"}
            </button>
            <div>
                {renderizarAlunosPorCurso()}
            </div>
        </div>
    );
};

export default ListarCurso;
