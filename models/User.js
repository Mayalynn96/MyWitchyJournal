const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model{}

User.init({
    username:{
        type: DataTypes.STRING(25),
        allowNull:false,
        unique:true
    },
    email:{
        type: DataTypes.STRING,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            len: [8,20]
        }
    }
},{
    sequelize,
    hooks:{
        beforeCreate:userObj=>{
            userObj.password = bcrypt.hashSync(userObj.password,4);
        }
    }
});

module.exports=User