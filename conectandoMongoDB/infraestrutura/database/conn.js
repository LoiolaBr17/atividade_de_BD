const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017/pessoas'

const pessoas = new MongoClient(uri)
async function run() {
  try {
    await pessoas.connect()
    console.log('Conectado ao MongoDB!')
  } catch (err) {
    console.log(err)
  }
}

run()

module.exports = pessoas