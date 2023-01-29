const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get("/", (req, res) => {
    fs.readFile("./db/tarotCards.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("oh no!");
            throw err;
        } else {
            const tarotCardsData = JSON.parse(data);
            res.json(tarotCardsData);
        }
    });
});

router.get('/allcards/:cardName', (req, res) => {
    fs.readFile("./db/tarotCards.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("oh no!");
            throw err;
        } else {
            const tarotCardsData = JSON.parse(data);
            for (let i = 0; i < tarotCardsData.length; i++) {
                const card = (((tarotCardsData[i].cardName).split(' ')).join('')).toLocaleLowerCase();
                const reqParams = (((req.params.cardName).split(' ')).join('')).toLocaleLowerCase();
                if (card == reqParams) {
                    return res.json(tarotCardsData[i])
                }
            }
            return res.send("No such card")
        }
    });
    //     
})

router.get('/randomcard', (req, res) => {
    fs.readFile("./db/tarotCards.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("oh no!");
            throw err;
        } else {
            const tarotCardsData = JSON.parse(data);
            const randomNum = Math.floor(Math.random()*tarotCardsData.length)
            res.json(tarotCardsData[randomNum])
        }
    });
});

module.exports = router;