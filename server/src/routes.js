const mysql = require('mysql')
const mysqlConnection = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  password: `root123`,
  database: `fullstack`
})
mysqlConnection.connect()

module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `hai ${req.body.email} password kamu ${req.body.password}`
    })
  })
}
