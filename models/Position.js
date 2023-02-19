const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Position extends Model{}

Position.init({
    name:{
        type: DataTypes.STRING,
        allowNull:true
    }, 
    question:{
        type: DataTypes.STRING,
        allowNull:true
    }, 
    personalTakeOnCard:{
        type: DataTypes.STRING,
        allowNull:true
    }
},{
    sequelize
});

module.exports=Position