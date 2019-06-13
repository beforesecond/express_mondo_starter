require('dotenv').config()

const Constants = {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT || 3000,
  COLLECTION: {
    USER: 'users'
  }
}

module.exports = Constants
