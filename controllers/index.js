const express = require('express');
const path = require("path");
const router = express.Router()

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get('/TarotCards', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/allCards.html'));
});

const UserRoutes = require("./UserController")
router.use("/api/Users",UserRoutes);

const CardRoutes = require("./CardController")
router.use("/api/Cards",CardRoutes);

const KeywordRoutes = require("./KeywordController")
router.use("/api/Keywords",KeywordRoutes);

const meaningRoutes = require("./meaningController")
router.use("/api/meanings",meaningRoutes);

const deckRoutes = require("./deckController")
router.use("/api/decks",deckRoutes);

const imageRoutes = require("./imageController")
router.use("/api/images",imageRoutes);


const tarotCardsRoutes = require("./tarotCardsController");
router.use("/api/tarotCards",tarotCardsRoutes);

module.exports = router