var mongoose = require("mongoose")



var AlunoSchema = mongoose.Schema(
    {
        nome: {type:String, required:true},
        curso: {type:String, required:true},
        ira: {type:Number, required:true},
    }   
)

var AlunoModelMongo = mongoose.model("alunos", AlunoSchema)
module.exports = AlunoModelMongo