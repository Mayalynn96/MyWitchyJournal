const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");

class Reading extends Model{}

Reading.init({
    readingDate:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull:false
    },
    eventDate:{
        type: DataTypes.DATE,
        allowNull:true
    },
    question:{
        type: DataTypes.STRING,
        allowNull: false
    },
    generalTake: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    outcome: {
        type: DataTypes.TEXT,
        allowNull:true
    },
    accuracy: {
        type: DataTypes.INTEGER,
        allowNull:true
    }
},{
    sequelize
});

module.exports=Reading