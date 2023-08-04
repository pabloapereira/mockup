const Sequelize = require('sequelize');
const db = require('./db.js');
const Estado = require('./estado.js');

const Cidade = db.define('cidade', {
    id_cidade: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_estado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Estado,
            key: 'id_estado'
        }
    }
});

Cidade.sync();

module.exports = Cidade;