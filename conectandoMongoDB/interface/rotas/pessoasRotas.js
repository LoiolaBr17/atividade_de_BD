const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()

const aplicacao = require('../../aplicacao/aplicacao')

router.get('/criar/:nome/:nascimento', (req,res) =>{
    const nome = req.params.nome
    const nascimento = req.params.nascimento
    aplicacao.criarPessoa(nome,nascimento)
})
router.get('/buscar/:id', (req,res) => {
    const id = req.params.id
    aplicacao.buscarPorPessoa(id)
})
router.post('edit/:nome/:nascimento', (req, res) => {
    const nome = req.params.nome
    const nascimento = req.params.nascimento
    aplicacao.editarUmaPessoa(nome,nascimento)
})

module.exports = router