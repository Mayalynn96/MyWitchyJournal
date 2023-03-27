const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class UserCard extends Model{}

UserCard.init({
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

module.exports=UserCard