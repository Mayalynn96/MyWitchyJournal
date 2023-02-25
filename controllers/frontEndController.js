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
        const randomCard = hbsCards[Math.floor(Math.random()*hbsCards.length)];
        const cardSrc = randomCard.Images[0].src;
        res.render("home", {
            randomCard,
            cardSrc,
            isSignedIn:req.session.userId
        })
    })
})

router.get("/login", (req,res) => {
    res.render("login", {layout:"loginMain"})
})

router.get("/tarotCards/deck", (req,res) => {
    Card.findAll({
        include: {
            model:Image,
            where:{
                DeckId: +req.query?.id
            }
        }
    }).then(deckData => {
        const hbsCards = deckData.map((Card) => Card.toJSON());
        res.render("allCards", {
            allCards:hbsCards,
            isSignedIn:req.session.userId
        })
    })
})

router.get("/profile", (req,res) => {
    if(req.session.userId){
        User.findByPk(req.session.userId).then(userData => {
            const hbsUser = userData.toJSON();
            res.render("profile", {
                user:hbsUser,
                isSignedIn:req.session.userId
            })
        })
    } else {
        res.redirect("/login")
    }
})

module.exports = router;