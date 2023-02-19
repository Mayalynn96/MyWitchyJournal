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
    ],{
        validate:true,
        individualHooks:true
      })
      const decks = await Deck.bulkCreate([
        {
            "name": "Rider-Waite",
            "description": "The Rider-Waite Tarot is a widely popular deck for tarot card reading. It is also known as the Waite-Smith, Rider-Waite-Smith, or Rider Tarot. Based on the instructions of academic and mystic A. E. Waite and illustrated by Pamela Colman Smith, both members of the Hermetic Order of the Golden Dawn, the cards were originally published by the Rider Company in 1909. The deck has been published in numerous editions and inspired a wide array of variants and imitations. It is estimated that more than 100 million copies of the deck exist in more than 20 countries.",
            "isPrivate": false,
            "UserId": 1,
        },
        {
            "name": "Maya's deck",
            "description": "A deck I created using Midjourney AI generation.",
            "isPrivate": false,
            "UserId": 1,
        }
    ],{
        validate:true
      })
      const images = await Image.bulkCreate([
        {
            "src": "https://upload.wikimedia.org/wikipedia/commons/9/90/RWS_Tarot_00_Fool.jpg",
            "artist": "A.E. Waite and Pamela Colman Smith",
            "CardId": 1,
            "DeckId": 1,
        },
        {
            "src": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg",
            "artist": "A.E. Waite and Pamela Colman Smith",
            "CardId": 2,
            "DeckId": 1,
        },
        {
            "src": "./images/tarotCards/majorArcana/00TheFool.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 1,
            "DeckId": 2,
        },
        {
            "src": "./images/tarotCards/majorArcana/00TheMagician.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 2,
            "DeckId": 2,
        }
    ],{
        validate:true
      })
    process.exit(1)
}

seed();