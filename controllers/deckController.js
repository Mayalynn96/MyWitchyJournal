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
    Deck.findAll({
        include:[Image]
    }).then(data => {
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
    Deck.findByPk(req.params.id).then(data => {
        if (data) {
            return res.json(data)
        } else {
            res.status(404).send("No such Deck")
        }
    })
})

router.post("/", (req, res) => {
    Deck.create({
        name:req.body.name,
        description:req.body.description,
        isPrivate:req.body.isPrivate,
        UserId:req.session.userId
    }).then(data => {
        return res.status(201).send("Deck added!")
    }).catch(err => {
        console.log(err);
        return res.status(500).send("Something went wrong...")
    })
})

router.delete("/:id", (req, res) => {
    Deck.destroy({
       where: {
        id: req.params.id
       } 
    }).then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No deck found with this id" });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router;