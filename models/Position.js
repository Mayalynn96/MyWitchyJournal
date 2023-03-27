const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Position extends Model{}

Position.init({
    position:{
        type: DataTypes.STRING,
        allowNull:false
    }, 
    personalInterpretation:{
        type: DataTypes.TEXT,
        allowNull:true
    }
},{
    sequelize
});

module.exports=Position