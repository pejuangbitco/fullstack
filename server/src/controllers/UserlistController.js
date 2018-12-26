const { User } = require('../models')

module.exports = {
  async getAllUser (req, res) {
    try {
      const users = await User.findAll()
      res.send({
        users
      })
      console.log(`users: ${users}`)
    } catch (error) {
      res.status(500).send({
        error: `an error occured while trying`
      })
    }
  },
  async save (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch (error) {
      res.status(404).send({
        error: `this email already resgitered`
      })
    }
  },
  async update (req, res) {
    try {

    } catch (error) {
      res.status(500).send({
        error: `an error occured trying to log in`
      })
    }
  }
}
