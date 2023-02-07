const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

router.get("/", (req, res) => {
    Card.findAll().then(data => {
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
    Card.findByPk(req.params.id).then(data => {
        if (data) {
            return res.json(data)
        } else {
            res.status(404).send("No such card")
        }
    })
})

// router.get("/card/:card_name", (req, res) => {
//     Card.findOne({where:{card_name:req.params.card_name}}).then(data => {
//         if (data) {
//             return res.json(data)
//         } else {
//             res.status(404).send("No such card")
//         }
//     })
// })

router.post("/", (req, res) => {
    Card.create(req.body).then(data => {
        return res.status(201).send("Card added!")
    }).catch(err => {
        console.log(err);
        return res.status(500).send("Something went wrong...")
    })
})

module.exports = router;