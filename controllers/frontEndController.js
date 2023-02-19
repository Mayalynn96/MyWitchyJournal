const express = require('express');
const router = express.Router();
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

router.get("/", (req,res) => {
    res.redirect("/home")
})

router.get("/home", (req,res) => {
    Card.findAll({
        include: {
            model:Image,
            where:{
                DeckId: 2
            }
        }
    }).then(deckData => {
        const hbsCards = deckData.map((Card) => Card.toJSON());
        const randomCard = hbsCards[Math.floor(Math.random()*hbsCards.length)]
        res.render("home", {
            randomCard
        })
    })
})

router.get("/tarotCards", (req,res) => {
    Card.findAll({
        include: {
            model:Image,
            where:{
                DeckId: 2
            }
        }
    }).then(deckData => {
        const hbsCards = deckData.map((Card) => Card.toJSON());
        const side = []
        for(let i = 0; i < hbsCards; i++){
            if(i%2===0){
                side.push("even")
            } else {
                side.push("odd")
            }
        }
        res.render("allCards", {
            allCards:hbsCards,
            order:side
        })
    })
})

module.exports = router;