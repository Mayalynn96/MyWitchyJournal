fetch("/api/tarotCards").then(res=>res.json()).then(data=>{
    console.log(data)
    for(let i = 0; i < data.length; i++){
        const myDiv = document.createElement('div')
        const myLi = document.createElement("li");
        const image = document.createElement("img")
        const title = document.createElement('h3')
        title.textContent = data[i].cardName
        image.src = data[i].imgSrc
        myDiv.appendChild(image)
        myDiv.appendChild(title)
        myLi.appendChild(myDiv)
        document.getElementById('allCards').appendChild(myLi)
        if(i%2==0){
            myDiv.classList.add('even')
        } else {
            myDiv.classList.add('odd')
        }
    }
})