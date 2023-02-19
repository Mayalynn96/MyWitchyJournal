require("dotenv").config();
const sequelize = require("../config/connection.js");
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
} = require('../models')

const seed = async () => {
    await sequelize.sync({ force: true });
    const cards = await Card.bulkCreate([
        {
            "cardName": "The Fool",
            "cardNumber": 0,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The Magician",
            "cardNumber": 1,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The High Priestess",
            "cardNumber": 2,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The Emperor",
            "cardNumber": 3,
            "arcana": "Major",
            "suit": null
        }
    ])
    const users = await User.bulkCreate([
        {
            "firstName": "Maya Lynn",
            "lastName": "Cohen",
            "username": "Malyco",
            "email": "malyco11@gmail.com",
            "password": "password",
            "birthDateAndTime": null,
            "isAdmin": true
        },
        {
            "firstName": "Bear",
            "lastName": null,
            "username": "CareBear",
            "email": "bear@gmail.com",
            "password": "password",
            "birthDateAndTime": null
        }
    ])
    // const records = await Record.bulkCreate([
    //     {
    //         "visitNotes": "Lil' Timmy was such a trooper! Great job Timmy!",
    //         "PatientId": 1,
    //         "PhysicianId": 1
    //     },
    //     {
    //         "visitNotes": "Lil' Timmy blood was delicious.... I mean, clean",
    //         "PatientId": 1,
    //         "PhysicianId": 2
    //     },
    // ])
    process.exit(1)
}

seed();