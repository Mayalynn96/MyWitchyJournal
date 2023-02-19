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

router.get("/", (req, res) => {
    Meaning.findAll().then(data => {
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
    Meaning.findByPk(req.params.id).then(data => {
        if (data) {
            return res.json(data)
        } else {
            res.status(404).send("No such Meaning")
        }
    })
})

router.post("/", (req, res) => {
    Meaning.create({
        upright: req.body.upright,
        reversed: req.body.reversed,
        CardId: req.body.CardId,
        UserId: req.session.userId
    }).then(data => {
        return res.status(201).send("Meaning added!")
    }).catch(err => {
        console.log(err);
        return res.status(500).send("Something went wrong...")
    })
})

router.delete("/:id", (req, res) => {
    Meaning.destroy({
       where: {
        id: req.params.id
       } 
    }).then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No meaning found with this id" });
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