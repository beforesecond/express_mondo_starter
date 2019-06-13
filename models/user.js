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
  },
  wallet: {
    type: Object
  }
})

const User = mongoose.model(COLLECTION.USER, userSchema)

const CreateOne = data => {
  db.CreateOne(COLLECTION.USER, data)
}

const Find = async data => {
  const result = await db.Find(COLLECTION.USER, data)
  return result
}

const Update = async (data, newData) => {
  const query = {
    username: data.username
  }
  const result = await db.Update(COLLECTION.USER, query, newData)
  return result
}

const Delete = async data => {
  const { username } = data
  const user = {
    username: username
  }
  const result = await db.Delete(COLLECTION.USER, user)
}

module.exports = {
  User,
  CreateOne,
  Find,
  Update,
  Delete
}
