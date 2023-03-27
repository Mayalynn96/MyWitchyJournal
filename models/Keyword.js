const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Keyword extends Model{}

Keyword.init({
    word:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    }
},{
    sequelize
});

module.exports=Keyword