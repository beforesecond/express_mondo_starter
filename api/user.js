const { UserModel } = require('../models')

const register = (req, res) => {
  const { body } = req
  UserModel.CreateOne(body)
  res.status(200).json(req.body)
}

module.exports = {
  register
}
