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
    Image.findAll().then(data => {
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
    Image.findByPk(req.params.id).then(data => {
        if (data) {
            return res.json(data)
        } else {
            res.status(404).send("No such Image")
        }
    })
})

router.put("/:id", (req, res) => {
    Image.update({
        src:req.body.src
    },{
        where:{
            id:req.params.id
        }
    }).then(data => {
        if (data) {
            return res.json(data)
        } else {
            res.status(404).send("No such Image")
        }
    })
})

router.post("/", (req, res) => {
    Image.create({
        src:req.body.src,
        CardId:req.body.CardId,
        artist:req.body.artist,
        DeckId:req.body.DeckId
    }).then(data => {
        return res.status(201).send("Image added!")
    }).catch(err => {
        console.log(err);
        return res.status(500).send("Something went wrong...")
    })
})

router.delete("/:id", (req, res) => {
    Image.destroy({
       where: {
        id: req.params.id
       } 
    }).then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No Image found with this id" });
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