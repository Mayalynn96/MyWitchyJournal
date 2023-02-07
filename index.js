require("dotenv").config();
const express = require('express');

const sequelize = require('./config/connection');

const {User, Card, Keyword} = require('./models')

const PORT = 3000
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'));

const allRoutes = require("./controllers")
app.use(allRoutes)

sequelize.sync({forse:true}).then(function(){
    app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}`)
    });
});