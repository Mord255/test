const { Model,DataTypes } = require('sequelize');
const { sequelize } = require('../../database/connection');

const User = sequelize.define('users_test_jeanfranco',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    second_name:{
        type:DataTypes.STRING,
        allowNull:true
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:true
    },
    lastname_mother:{
        type:DataTypes.STRING,
        allowNull:true
    },
    email:{
        type:DataTypes.STRING,
        unique: true,
        allowNull:false
    },
    phone:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    birthdate:{
        type:DataTypes.DATE,
        allowNull:true
    },
    state:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
},{
    freezeTableName:true,
})

module.exports = {User};