const conn = require('../database/conexao/conexaobd')

function buscarPorPessoa(nome){
    const sql = `SELECT * FROM pessoa WHERE nome = '${nome}'`

    conn.query(sql, (err, data) => {
        if(err) {
            console.log(err)
            return
        }

        const resposta = data

        console.log(resposta)
    })
}

function inserirPessoa(nome, nascimento){

    const sql = `INSERT INTO pessoa (nome, dataNascimento) VALUES ('${nome}', '${nascimento}')`

    conn.query(sql, (err)=> {
        if(err){
            console.log(err)
        }
        console.log(`A pessoa ${nome} foi inserida com sucesso`)
    })
}

function AtualizarPessoa(nome, novoNascimento,id){

    const sql = `UPDATE pessoa SET nome = '${nome}', dataNascimento = '${novoNascimento}' WHERE id = ${id}`

    conn.query(sql, (err) => {
        if(err){
            console.log()
        }
    })
}

module.exports = {buscarPorPessoa, inserirPessoa, AtualizarPessoa}