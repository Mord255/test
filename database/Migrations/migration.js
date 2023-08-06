const { sequelize } = require('../connection');
const models = require("../../app/Models/index");

const conexionDB = async ()=> {
    try {
        // await sequelize.authenticate();
        await sequelize.sync({force:true});
        console.log("Base de Datos Conectada")
    } catch (error) {
        console.log(error);
    }
}

conexionDB();