const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Deck extends Model{}

Deck.init({
    name:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    description:{
        type: DataTypes.TEXT,
        allowNull:true
    },
    isPrivate:{
        type: DataTypes.BOOLEAN,
        defaultValue:false
    }
},{
    sequelize
});

module.exports=Deck