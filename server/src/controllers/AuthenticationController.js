module.exports = {
  register (req, res) {
    res.send({
      message: `hai ${req.body.email} password kamu ${req.body.password}`
    })
  }
}
