const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Card extends Model{}

Card.init({
    card_name:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    card_number:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true
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
    reversed:{
        type: DataTypes.BOOLEAN
    }
},{
    sequelize
});

module.exports=Card