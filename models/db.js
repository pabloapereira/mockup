const Sequelize = require('sequelize');
//conectando banco de dados
const sequelize = new Sequelize('viagens', 'root', 'pablo', {
    host:'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log('conexão realizada com sucesso');
}).catch((error) => {
    console.log(`error ao conctar ${error}`);
});

module.exports = sequelize;