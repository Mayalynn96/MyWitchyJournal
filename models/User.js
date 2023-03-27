const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model{}

User.init({
    firstName:{
        type: DataTypes.STRING,
        allowNull:true
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull:true
    },
    username:{
        type: DataTypes.STRING,
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
    },
    birthDateAndTime: {
        type: DataTypes.DATE,
        allowNull:true
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    profilePicture: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:"https://cdn.discordapp.com/attachments/1054153893795348523/1089886725758787775/Beatiful-green-whitch.png"
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