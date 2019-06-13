const mongoose = require('mongoose')
var MongoClient = require('mongodb').MongoClient
const { DATABASE_URL } = require('../constants')

const connectDb = () => {
  return mongoose.connect(DATABASE_URL)
}

const CreateOne = (collection, data) => {
  MongoClient.connect(DATABASE_URL, function(err, db) {
    if (err) throw err
    var dbo = db.db('')
    console.log(collection, data)
    dbo.collection(collection).insertOne(data, function(err, res) {
      if (err) throw err
      console.log('1 document inserted')
      db.close()
    })
  })
}

module.exports = { connectDb, CreateOne }
