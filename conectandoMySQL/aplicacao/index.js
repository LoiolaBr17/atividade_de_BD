const express = require('express')
const pessoaRepositorio = require('../infraestrutura/repositorio/pessoaRepositorio')
const formatarNascimento = require('../comuns/validacoes/formatarNascimento')

function buscarPessoa(nome){
    pessoaRepositorio.buscarPorPessoa(nome)
}

function inserirPessoa(nome, nascimento) {
    const nascimentoFormatado = formatarNascimento(nascimento)
    pessoaRepositorio.inserirPessoa(nome,nascimentoFormatado)
}

function atualizarPessoa(nome, novoNascimento, id){
    const novoNascimentoFormatado = formatarNascimento(novoNascimento)
    pessoaRepositorio.AtualizarPessoa(nome,novoNascimentoFormatado, id)
}

module.exports = {buscarPessoa, inserirPessoa, atualizarPessoa}