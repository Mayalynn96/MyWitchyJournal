const allCards = document.querySelectorAll(".allCardsCard")
for(let i = 0; i < allCards.length; i++){
    if(i%2==0){
        allCards[i].classList.add('even')
    } else {
        allCards[i].classList.add('odd')
    }
}