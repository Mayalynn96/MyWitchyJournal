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
        return res.status(403).json({ msg: "you must be logged in to get readings" });
    }
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);

        const userReadings = await Reading.findAll({
            where: {
                UserId: tokenData.id
            },
            attributes: ["id", "readingDate", "eventDate", "question", "generalTake"],
            include: [{
                model: Position,
                attributes: ["id", "position", "personalInterpretation", "isReversed"],
                include: [{
                    model: Card,
                    attributes: ["id", "cardName", "cardNumber", "arcana", "suit"]
                }]
            }]
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
        return res.status(403).json({ msg: "you must be logged in to add a Reading", hasFailed: true });
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
            accuracy: req.body.accuracy,
        })

        req.body.positions.forEach(async position => {
            const newPosition = await Position.create({
                ReadingId: newReading.id,
                CardId: position.cardId,
                position: position.position,
                personalInterpretation: position.personalInterpretation,
                isReversed: position.isReversed
            })
        })

        res.json({ msg: 'Reading successfully added!' })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error adding your Reading." });
    }

})

// Get Reading by Id
router.get("/:readingId", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
        return res.status(403).json({ msg: "you must be logged in to get this reading" });
    }
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);

        const userReadings = await Reading.findByPk(req.params.readingId, {
            include: [{
                model: Position,
                attributes: ["id", "position", "personalInterpretation"],
                include: [{
                    model: Card,
                    attributes: ["id", "cardName", "cardNumber", "arcana", "suit", "meaning", "reveresedMeaning"]
                }]
            }]
        })
        if(!userReadings){
            return res.status(404).json({ msg: "No reading found with this Id" });
        }
        if(tokenData.id!=userReadings.UserId){
            return res.status(403).json({ msg: "you must be logged in to get this reading" });
        }
        res.json(userReadings)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting this reading by Id." });
    }
})

router.delete("/deleteReading/:readingId", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
        return res.status(403).json({ msg: "you must be logged in to a Reading" });
    }
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const readingToDelete = await Reading.findByPk(req.params.readingId)

        if (!readingToDelete) {
            return res.status(404).json({ msg: "Deleting Reading: Reading not found" })
        }

        if (readingToDelete.UserId != tokenData.id) {
            return res.status(403).json({ msg: "Deleting Reading: Reading does not belong to current user" })
        }

        const deletedData = await readingToDelete.destroy()

        return res.json({ msg: "Reading deleted" })

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error deleting your Reading." });
    }
})

module.exports = router;