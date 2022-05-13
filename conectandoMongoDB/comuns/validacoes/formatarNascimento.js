function formatarNascimento(nascimento){
    const nomeFormatado  = nascimento.substring(0,2) + '/' + nascimento.substring(2,4) + '/' +nascimento.substring(4,8)

    return nomeFormatado
}

module.exports = formatarNascimento