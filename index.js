const express = require('express');
const { get } = require('http');
const path = require('path')
const tarotCardsData = require('./db/tarotCards.json');

const PORT = 3000
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/TarotCards', (req, res) => {
  res.sendFile(path.join(__dirname, './views/allCards.html'));
});

app.get('/api/all_tarot_cards', (req, res)=>{
    res.json(tarotCardsData)
})

app.get('/api/all_tarot_cards/:cardName', (req, res)=>{
    for (let i = 0; i < tarotCardsData.length; i++) {
        const card = tarotCardsData[i];
        console.log(req.params);
        const cardArr = (card.cardName).split(' ');
        console.log(cardArr);
        const reqArr = (req.params.cardName).split(' ');
        const cards = cardArr.join('');
        console.log(card);
        const reqParams = reqArr.join('');
        if(cards.toLocaleLowerCase()==reqParams.toLocaleLowerCase()){
            return res.json(card)
        }
    }
    return res.send("No such card")
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:3000`)
});