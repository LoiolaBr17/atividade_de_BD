const conn = require('../database/conn')

function criarPessoa(name, dataNascimento) {
  conn.db().collection('pessoas').insertOne({
    nome: name,
    nascimento: dataNascimento,
  })  
}

function buscarPorPessoa(id){
  const pessoa = conn.db().collection('products').findOne({ _id: ObjectId(id) })
  console.log(pessoa)
}

function editarUmaPessoa(id,Nome,Nascimento){
  
  conn.db().collection('pessoas').updateOne({ _id: ObjectId(id) }, {nome: Nome, nascimento:Nascimento})

}

module.exports = {criarPessoa, buscarPorPessoa ,editarUmaPessoa}