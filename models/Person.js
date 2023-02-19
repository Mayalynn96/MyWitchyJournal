const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Person extends Model{}

Person.init({
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    relation:{
        type: DataTypes.STRING,
        allowNull:false
    },
    birthDateAndTime:{
        type: DataTypes.DATE,
        allowNull:true
    }
},{
    sequelize
});

module.exports=Person