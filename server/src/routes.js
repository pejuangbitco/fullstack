const AuthenticationController = require('./controllers/AuthenticationController')
const UserlistController = require('./controllers/UserlistController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.post('/users',
    AuthenticationControllerPolicy.register,
    UserlistController.save)

  app.get('/users',
    UserlistController.getAllUser)
}
