const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Theme extends Model{}

Theme.init({
    theme:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize
});

module.exports=Theme