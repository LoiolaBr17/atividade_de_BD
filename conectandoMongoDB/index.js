const express = require("express");
const app = express();

const pessoasRotas = require('./interface/rotas/pessoasRotas')

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get('/criar/:nome/:nascimento', pessoasRotas)
app.get('buscar/:id', pessoasRotas)
app.post('edit/:nome/:nascimento', pessoasRotas)

app.get('/', (req, res) => {
    res.send('Olá')
})

app.listen(3000, () => {console.log("Servidor rodando na porta 3000")})