const express = require('express');
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

app.get('/api/tarotcards', (req, res)=>{
    res.json(tarotCardsData)
})

app.get('/api/tarotcards/allcards/:cardName', (req, res)=>{
    for (let i = 0; i < tarotCardsData.length; i++) {
        const card = tarotCardsData[i];
        const cardArr = (card.cardName).split(' ');
        const reqArr = (req.params.cardName).split(' ');
        const cards = cardArr.join('');
        const reqParams = reqArr.join('');
        if(cards.toLocaleLowerCase()==reqParams.toLocaleLowerCase()){
            return res.json(card)
        }
    }
    return res.send("No such card")
})

app.get('/api/tarotcards/randomcard', (req, res) => {
    const randomNum = Math.floor(Math.random()*tarotCardsData.length)
    res.json(tarotCardsData[randomNum])
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:3000`)
});