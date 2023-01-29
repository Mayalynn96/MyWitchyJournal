fetch("/api/tarotcards/randomcard").then(res=>res.json()).then(data=>{
    document.getElementById('randomCard').src = data.imgSrc
    document.getElementById('randomCard').alt = data.cardName
    document.getElementById('randomCardTitle').textContent = data.cardName
})