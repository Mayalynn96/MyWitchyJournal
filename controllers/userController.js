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
const jwt = require("jsonwebtoken");

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

router.get("/user/:username", (req, res) => {
    User.findOne({ where: { username: req.params.username } }).then(data => {
        if (data) {
            return res.json(data)
        } else {
            res.status(404).send("No such user")
        }
    })
})

router.post("/", (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    })
        .then((newUser) => {
            const token = jwt.sign(
                {
                    username: newUser.username,
                    id: newUser.id,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "6h",
                }
            );
            res.json({
                token,
                user: newUser,
            });
        })
        .catch((err) => {
            console.log(err);
            res.json({ msg: "oh no", err });
        });
});

router.post("/login", (req, res) => {
    User.findOne({
        where: {
            [Op.or]: [{ username: req.body.login }, [{ email: req.body.login }]],
        }
    }).then((foundUser) => {
        //is email wrong?
        if (!foundUser) {
            return res.status(401).json({ msg: "invalid login credentials" });
        }
        //is password wrong
        if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
            return res.status(401).json({ msg: "invalid login credentials" });
        }
        //at this point, we know email and password are correct
        const token = jwt.sign(
            {
                username: foundUser.username,
                id: foundUser.id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "12h",
            }
        );
        res.json({
            token,
            user: foundUser,
        });
    })
        .catch((err) => {
            console.log(err);
            res.json({ msg: "oh no", err });
        });
})

router.get("/isValidToken", (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
        return res
            .status(403)
            .json({ isValid: false, msg: "you must be logged in to create a play!" });
    }
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        res.json({
            isValid: true,
            user: tokenData,
        });
    } catch (err) {
        res.status(403).json({
            isValid: false,
            msg: "invalid token",
        });
    }
});

router.get("/:id", (req, res) => {
    User.findByPk(req.params.id, {
        include: [Play],
    })
        .then((userData) => {
            res.json(userData);
        })
        .catch((err) => {
            console.log(err);
            res.json({ msg: "oh no", err });
        });
});

module.exports = router;