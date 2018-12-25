module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'fullstack',
    user: process.env.DB_USER || 'fullstack',
    password: process.env.DB_PASS || '123',
    dialect: process.env.DB_DIALECT || 'mysql',
    host: process.env.DB_HOST || 'localhost'
  }
}
