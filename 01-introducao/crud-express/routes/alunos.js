var express = require('express');
var router = express.Router();

const AlunoService = require("../services/AlunoService")
const alunos = require("../data/data")
const AlunoServiceMongo = require("../services/AlunoServiceMongo")
const { request } = require('express');
const { response } = require('express');



router.get(
    "/listar",
    (request,response,next) => {
       AlunoServiceMongo.listar(request,response)
    }
)

router.get(
    "/recuperar/:id",
    (request, response, next) => {
       AlunoServiceMongo.recuperar(request,response)
    }
)


//MONGODB
router.post(
    "/criar",
    (request,response,next) => {
        AlunoServiceMongo.criar(request,response)
    }
)


router.put(
    "/atualizar/:id",
    (request,response,next) => {
        AlunoServiceMongo.atualizar(request,response)
    }
)


//MONGO
router.delete(
    "/apagar/:id",
    (request,response,next) => {
        AlunoServiceMongo.delete(request,response)
    }
)

router.get(
    "/media",
    (request, response) => {
       AlunoServiceMongo.media(request,response)
    }
)



module.exports = router;