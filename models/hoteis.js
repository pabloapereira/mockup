const Sequelize = require('sequelize');
const db = require('./db.js');
const Cidade = require('./cidade.js');

const Hotel = db.define('hoteis', {
    id_hotel: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto: {
        type: Sequelize.BLOB,
        allowNull: false
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    rua: {
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

Hotel.sync();

module.exports = Hotel;