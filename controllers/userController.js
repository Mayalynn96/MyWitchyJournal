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

const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

router.get("/", (req, res) => {
    User.findAll().then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            msg: "an error occurred",
            err: err
        })
    })
})

router.get("/logout", (req,res) => {
    req.session.destroy();
    res.redirect("/sessions");
})

router.get("/:id", (req, res) => {
    User.findByPk(req.params.id).then(data => {
        if (data) {
            return res.json(data)
        } else {
            res.status(404).send("No such user")
        }
    })
})

router.get("/user/:username", (req, res) => {
    User.findOne({where:{username:req.params.username}}).then(data => {
        if (data) {
            return res.json(data)
        } else {
            res.status(404).send("No such user")
        }
    })
})

router.post("/", (req, res) => {
    User.create(req.body).then(data=>{
        res.status(201).json(data)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg:"an error occurred",
            err:err
        })
    })
})

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            [Op.or]: [{ username: req.body.login }, [{ email: req.body.login }]],
        }
    }).then(userData => {
        if (!userData) {
            return res.status(404).json({ msg: "no such user!" })
        } else {
            if (bcrypt.compareSync(req.body.password, userData.password)) {
                req.session.userId = userData.id
                req.session.userEmail = userData.email
                req.session.userUsername = userData.username
                return res.json(userData)
            } else {
                return res.status(401).json({ msg: "wrong password" })
            }
        }
    })
})

module.exports = router;