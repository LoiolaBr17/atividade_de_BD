const express = require('express')
const router = express()

const aplicacao = require('../../../aplicacao/index')

router.use(
    express.urlencoded({
      extended: true,
    }),
)
  
router.use(express.json())

router.get('/buscar/:nome', (req,res) => {
    res.send('buscando pessoa')

    const nome = req.params.nome

    aplicacao.buscarPessoa(nome)
})

router.get('/inserir/:nome/:nascimento', (req, res) => {
    const nome = req.params.nome
    const nascimento = req.params.nascimento

    aplicacao.inserirPessoa(nome,nascimento)

    res.send('inserindo pessoa')
})

router.get('/atualizar/:nome/:nascimento/:id', (req, res) => {
    const nome = req.params.nome
    const nascimento = req.params.nascimento
    const id = req.params.id

    aplicacao.atualizarPessoa(nome, nascimento,id)

    res.send('atualizando pessoa')
})

module.exports = router