const express = require('express')
const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pessoabd',
})

conn.connect(function (err) {
    if (err) {
      console.log(err)
    }
  
    console.log('Conectado ao MySQL!')   
})

module.exports = conn 