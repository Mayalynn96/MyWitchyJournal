const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Image extends Model{}

Image.init({
    src:{
        type: DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize
});

module.exports=Image