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
    PersonInReading
} = require('../models')

const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
        return res.status(403).json({ msg: "you must be logged in to a Reading" });
    }
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        
        const userReadings = await Reading.findAll({
            where: {
                UserId: tokenData.id
            },
            include: [{model:Position, include: [Card]}]
        })
        res.json(userReadings)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting the current users readings." });
    }
})

router.get("/all", (req, res) => {
    Reading.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            msg: "an error occurred",
            err: err
        })
    })
})

router.get("/positions", (req, res) => {
    Position.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            msg: "an error occurred",
            err: err
        })
    })
})

router.post("/", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
        return res.status(403).json({ msg: "you must be logged in to a Reading" });
    }
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const newReading = await Reading.create({
            UserId: tokenData.id,
            readingDate: req.body.readingDate,
            eventDate: req.body.eventDate,
            question: req.body.question,
            generalTake: req.body.generalTake,
            outcome: req.body.outcome,
            accuracy: req.body.accuracy
        })

        req.body.positions.forEach(async position => {
            const newPosition = await Position.create({
                ReadingId: newReading.id,
                CardId: position.cardId,
                position: position.position,
                personalInterpretation: position.personalInterpretation
            })
        })

        res.json({msg: 'Reading successfully added!'})
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error adding your Reading." });
    }
    
})

module.exports = router;