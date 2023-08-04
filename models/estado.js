const Sequelize = require('sequelize');
const db = require('./db.js');

const Estado = db.define('estado', {
    id_estado: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Estado.sync();

module.exports = Estado;