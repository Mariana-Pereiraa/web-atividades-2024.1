var AlunoModelMongo = require("../models/AlunoModelMongo")

class AlunoServiceMongo {

    static recuperar(request, response) {
        AlunoModelMongo.findById(request.params.id)
        .then( 
            (aluno) => {
                response.json(aluno)
            }
        )
        .catch(error => console.log(error))
    }

    static listar(request, response) {
        AlunoModelMongo.find()
        .then(
            (alunos) => {
                response.json(alunos)       
            }
        )
        .catch( error => console.log(error))
    }

    static criar(request, response) {
        AlunoModelMongo.create(request.body)
        .then(
            (aluno) => {
                response.json(aluno)
            }
        )
        .catch(error => console.log(error))
    } 

    static atualizar(request, response) {
        AlunoModelMongo.findByIdAndUpdate(
            request.params.id,
            request.body
        )
        .then(
            (aluno) => {
                response.json(aluno)
            }
        )
        .catch(error => console.log(error))
    }

    static delete(request, response) {
        AlunoModelMongo.findByIdAndDelete(request.params.id)
        .then(
            (aluno) => {
                response.json(aluno)
            }
        )
        .catch(error => console.log(error))
    }

    static media(request, response) {
        AlunoModelMongo.find()
            .then(alunos => {
                if (alunos.length === 0) {
                    response.json({ media: 0 });
                    return;
                }
    
                const media = alunos.reduce((sum, aluno) => sum + aluno.ira, 0) / alunos.length;
                response.json({ media: media.toFixed(2) });
            })
            .catch(error => {
                console.log(error);
                response.status(500).json({ error: 'Erro ao calcular a média' });
            });
    }

}

module.exports = AlunoServiceMongo