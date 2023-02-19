const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class PersonInReading extends Model{}

PersonInReading.init({
    share:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    },
    wasPresent:{
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
},{
    sequelize
});

module.exports=PersonInReading