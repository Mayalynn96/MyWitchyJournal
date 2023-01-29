const express = require('express');
const path = require("path");
const router = express.Router()

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get('/TarotCards', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/allCards.html'));
});

const tarotCardsRoutes = require("./tarotCardsController");
router.use("/api/tarotCards",tarotCardsRoutes);

module.exports = router