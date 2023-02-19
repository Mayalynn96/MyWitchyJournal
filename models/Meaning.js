const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Meaning extends Model{}

Meaning.init({
    upright:{
        type: DataTypes.TEXT,
        allowNull:true
    }, 
    reversed:{
        type: DataTypes.TEXT,
        allowNull:true
    }
},{
    sequelize
});

module.exports=Meaning