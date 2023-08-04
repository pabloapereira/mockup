const Sequelize = require('sequelize');
const db = require('./db.js');
const Cidade = require('./cidade.js');

const User = db.define('usuario', {
    id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_cidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Cidade,
            key: 'id_cidade'
        }
    }
});

User.sync();

module.exports = User;