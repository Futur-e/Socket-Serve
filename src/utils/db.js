// sequelize连接数据库
const DB = require('sequelize')

const sequelize = new DB.Sequelize('socket_chat', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    charset: 'utf8mb4'
  }
});

module.exports = {
  sequelize
}