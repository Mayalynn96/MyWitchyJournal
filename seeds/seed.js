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
            "cardName": "The Empress",
            "cardNumber": 3,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The Emperor",
            "cardNumber": 4,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The Hierophant",
            "cardNumber": 5,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The Lovers",
            "cardNumber": 6,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The Chariot",
            "cardNumber": 7,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "Strenght",
            "cardNumber": 8,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The Hermit",
            "cardNumber": 9,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "Wheel Of Fortune",
            "cardNumber": 10,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "Justice",
            "cardNumber": 11,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The Hanged Man",
            "cardNumber": 12,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "Death",
            "cardNumber": 13,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "Temperance",
            "cardNumber": 14,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The Devil",
            "cardNumber": 15,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The Tower",
            "cardNumber": 16,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The Star",
            "cardNumber": 17,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The Moon",
            "cardNumber": 18,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The Sun",
            "cardNumber": 19,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "Judgement",
            "cardNumber": 20,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "The World",
            "cardNumber": 21,
            "arcana": "Major",
            "suit": null
        },
        {
            "cardName": "Ace of Wands",
            "cardNumber": "Ace",
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "Two of Wands",
            "cardNumber": 2,
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "Three of Wands",
            "cardNumber": 3,
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "Four of Wands",
            "cardNumber": 4,
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "Five of Wands",
            "cardNumber": 5,
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "Six of Wands",
            "cardNumber": 6,
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "Seven of Wands",
            "cardNumber": 7,
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "Eight of Wands",
            "cardNumber": 8,
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "Nine of Wands",
            "cardNumber": 9,
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "Ten of Wands",
            "cardNumber": 10,
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "Page of Wands",
            "cardNumber": "Page",
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "Knight of Wands",
            "cardNumber": "Knight",
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "Queen of Wands",
            "cardNumber": "Queen",
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "King of Wands",
            "cardNumber": "King",
            "arcana": "Minor",
            "suit": "Wands"
        },
        {
            "cardName": "Ace of Cups",
            "cardNumber": "Ace",
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "Two of Cups",
            "cardNumber": 2,
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "Three of Cups",
            "cardNumber": 3,
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "Four of Cups",
            "cardNumber": 4,
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "Five of Cups",
            "cardNumber": 5,
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "Six of Cups",
            "cardNumber": 6,
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "Seven of Cups",
            "cardNumber": 7,
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "Eight of Cups",
            "cardNumber": 8,
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "Nine of Cups",
            "cardNumber": 9,
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "Ten of Cups",
            "cardNumber": 10,
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "Page of Cups",
            "cardNumber": "Page",
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "Knight of Cups",
            "cardNumber": "Knight",
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "Queen of Cups",
            "cardNumber": "Queen",
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "King of Cups",
            "cardNumber": "King",
            "arcana": "Minor",
            "suit": "Cups"
        },
        {
            "cardName": "Ace of Swords",
            "cardNumber": "Ace",
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "Two of Swords",
            "cardNumber": 2,
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "Three of Swords",
            "cardNumber": 3,
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "Four of Swords",
            "cardNumber": 4,
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "Five of Swords",
            "cardNumber": 5,
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "Six of Swords",
            "cardNumber": 6,
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "Seven of Swords",
            "cardNumber": 7,
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "Eight of Swords",
            "cardNumber": 8,
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "Nine of Swords",
            "cardNumber": 9,
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "Ten of Swords",
            "cardNumber": 10,
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "Page of Swords",
            "cardNumber": "Page",
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "Knight of Swords",
            "cardNumber": "Knight",
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "Queen of Swords",
            "cardNumber": "Queen",
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "King of Swords",
            "cardNumber": "King",
            "arcana": "Minor",
            "suit": "Swords"
        },
        {
            "cardName": "Ace of Pentacles",
            "cardNumber": "Ace",
            "arcana": "Minor",
            "suit": "Pentacles"
        },
        {
            "cardName": "Two of Pentacles",
            "cardNumber": 2,
            "arcana": "Minor",
            "suit": "Pentacles"
        },
        {
            "cardName": "Three of Pentacles",
            "cardNumber": 3,
            "arcana": "Minor",
            "suit": "Pentacles"
        },
        {
            "cardName": "Four of Pentacles",
            "cardNumber": 4,
            "arcana": "Minor",
            "suit": "Pentacles"
        },
        {
            "cardName": "Five of Pentacles",
            "cardNumber": 5,
            "arcana": "Minor",
            "suit": "Pentacles"
        },
        {
            "cardName": "Six of Pentacles",
            "cardNumber": 6,
            "arcana": "Minor",
            "suit": "Pentacles"
        },
        {
            "cardName": "Seven of Pentacles",
            "cardNumber": 7,
            "arcana": "Minor",
            "suit": "Pentacles"
        },
        {
            "cardName": "Eight of Pentacles",
            "cardNumber": 8,
            "arcana": "Minor",
            "suit": "Pentacles"
        },
        {
            "cardName": "Nine of Pentacles",
            "cardNumber": 9,
            "arcana": "Minor",
            "suit": "Pentacles"
        },
        {
            "cardName": "Ten of Pentacles",
            "cardNumber": 10,
            "arcana": "Minor",
            "suit": "Pentacles"
        },
        {
            "cardName": "Page of Pentacles",
            "cardNumber": "Page",
            "arcana": "Minor",
            "suit": "Pentacles"
        },
        {
            "cardName": "Knight of Pentacles",
            "cardNumber": "Knight",
            "arcana": "Minor",
            "suit": "Pentacles"
        },
        {
            "cardName": "Queen of Pentacles",
            "cardNumber": "Queen",
            "arcana": "Minor",
            "suit": "Pentacles"
        },
        {
            "cardName": "King of Pentacles",
            "cardNumber": "King",
            "arcana": "Minor",
            "suit": "Pentacles"
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
            "description": "My name is Maya, and I'm a big fan of all things witchy! I have been dabbling in tarot card readings for a few years now. I decided that I wanted to make my very own deck using Midjourney AI.",
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
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/00TheFool.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 1,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/01TheMagician.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 2,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/02TheHighPriestess.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 3,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/03TheEmpress.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 4,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/04TheEmperor.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 5,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/05TheHierophant.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 6,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/06TheLovers.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 7,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/07TheChariot.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 8,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/08Strength.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 9,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/09TheHermit.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 10,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/10WheelOfFortune.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 11,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/11Justice.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 12,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/12TheHangedMan.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 13,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/13Death.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 14,
            "DeckId": 2,
        },
        {
            "src": "https://raw.githubusercontent.com/Mayalynn96/MyWitchyJournal/Dev/public/images/tarotCards/majorArcana/14Temperance.png",
            "artist": "Maya Lynn Cohen",
            "CardId": 15,
            "DeckId": 2,
        }
    ],{
        validate:true
      })
    process.exit(1)
}

seed();