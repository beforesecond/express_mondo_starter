const mongoose = require('mongoose')
const db = require('../databases/mongodb')
const { COLLECTION } = require('../constants')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  }
})

const User = mongoose.model(COLLECTION.USER, userSchema)

const CreateOne = data => {
  db.CreateOne(COLLECTION.USER, data)
}

module.exports = {
  User,
  CreateOne
}
