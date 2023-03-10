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

router.get("/", (req, res) => {
    Keyword.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            msg: "an error occurred",
            err: err
        })
    })
})

router.get("/:id", (req, res) => {
    Keyword.findByPk(req.params.id).then(data => {
        if (data) {
            return res.json(data)
        } else {
            res.status(404).send("No such Keyword")
        }
    })
})

router.get("/Keyword/:word", (req, res) => {
    Keyword.findOne({ where: { word: req.params.word } }).then(data => {
        if (data) {
            return res.json(data)
        } else {
            res.status(404).send("No such Keyword!")
        }
    })
})

router.post("/", (req, res) => {
    Keyword.create({
        word: req.body.word,
        forUpright: req.body.forUpright,
        CardId: req.body.CardId,
        UserId: req.session.userId
    }).then(data => {
        return res.status(201).send("Keyword added!")
    }).catch(err => {
        console.log(err);
        return res.status(500).send("Something went wrong...")
    })
})

module.exports = router;