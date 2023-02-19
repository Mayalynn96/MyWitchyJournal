const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Deck extends Model{}

Deck.init({
    name:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize
});

module.exports=Deck