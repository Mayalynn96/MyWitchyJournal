const express = require('express');
const allRoutes = require('./controllers');
const sequelize = require('./config/connection');
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3002;
// Requiring our models for syncing
const {
    User,
    Card,
    Keyword,
    Meaning,
    Image,
    Reading,
    Deck,
    Theme,
    Position,
    Person,
    PersonInReading,
    KeywordConnector
} = require('./models')

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())


app.use('/',allRoutes);


sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});