fetch("/api/tarotCards").then(res=>res.json()).then(data=>{
    console.log(data)
    data.forEach(card=>{
        const myLi = document.createElement("li");
        const image = document.createElement("img")
        image.src = card.imgSrc
        myLi.appendChild(image)
        document.getElementById('allCards').appendChild(myLi)
    })
})