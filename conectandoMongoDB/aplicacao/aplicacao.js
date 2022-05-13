const pessoasReporitorio = require('../infraestrutura/repositorio/pessoasRepositorio')

function criarPessoa(nome,dataNascimento){
    pessoasReporitorio.criarPessoa(nome,dataNascimento)
}

function buscarPorPessoa(id){
    pessoasReporitorio.buscarPorPessoa(id)
}

function editarUmaPessoa(id,Nome,Nascimento){
    pessoasReporitorio.editarUmaPessoa(id,Nome,Nascimento)
}


module.exports = {criarPessoa, buscarPorPessoa, editarUmaPessoa}