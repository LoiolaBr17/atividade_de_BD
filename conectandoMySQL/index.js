const express = require('express')
const app = express()
const porta = 3000

const pessoaRota = require('./interface/rotas/pessoa/pessoaRota')
const bancodedadosmysql = require('./infraestrutura/database/conexao/conexaobd')

app.use(
    express.urlencoded({
      extended: true,
    }),
)
  
app.use(express.json())

app.get('/buscar/:nome', pessoaRota)

app.get('/inserir/:nome/:nascimento', pessoaRota)

app.get('/atualizar/:nome/:nascimento/:id', pessoaRota)

app.get('/', (req, res) => {
    res.send('Olá mundo')
})

bancodedadosmysql

app.listen(porta, () => {
    console.log("Servidor rodando na porta: "+porta)
})
