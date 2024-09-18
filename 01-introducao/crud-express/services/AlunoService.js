const AlunoModel = require("../models/AlunoModel")
const alunos = require("../data/data")

//controle de ids
let id = 4 

class AlunoService {

    static listar() {
        return alunos
    }

    static criar(data) {
        let novoAluno = new AlunoModel(
            ++id,
            data.nome,
            data.curso,
            data.ira,
        )
        alunos.push(novoAluno)
        return novoAluno
    }

    static recuperar(id) {
        for(let i=0; i<alunos.length; i++) {
            if(alunos[i].id == id) return alunos[i]
        }
        return null
    }

    static atualizar(id, aluno) {
        for(let i=0; i<alunos.length; i++) {
            if(alunos[i].id == id){
                alunos[i].nome = aluno.nome
                alunos[i].curso = aluno.curso
                alunos[i].ira = aluno.ira
                return alunos[i]
             }
        }
    }

    static apagar(id) {
        for(let i=0; i<alunos.length; i++) {
            if(alunos[i].id == id){
                alunos.splice(i,1)
                return true
            }
        }
        return false
    }

}

module.exports = AlunoService