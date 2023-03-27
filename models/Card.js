const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Card extends Model{}

Card.init({
    cardName:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    cardNumber:{
        type: DataTypes.STRING,
        allowNull:false
    },
    arcana:{
        type: DataTypes.STRING,
        validate:{
            isIn:[['Major','Minor']]
        }
    },
    suit: {
        type: DataTypes.STRING,
        validate: {
            isIn:[['Cups','Pentacles','Swords','Wands',null]]
        }
    },
    meaning: {
        type: DataTypes.TEXT,
        allowNull:true
    },
    reveresedMeaning: {
        type: DataTypes.TEXT,
        allowNull:true
    }
},{
    sequelize
});

module.exports=Card