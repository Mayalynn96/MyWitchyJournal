document.querySelector("#moreI").addEventListener("click", () => {
    let sideBar = document.querySelector("#navMore");
    if(sideBar.style.display == "flex"){
        sideBar.style.display = "none";
    } else {
        sideBar.style.display = "flex";
    }
})

document.querySelector("#navSearch").addEventListener("click", () => {
    let header = document.querySelector("#mainHeader");
    let input = document.querySelector("#searchInput");
    let btn = document.querySelector("#searchBtn");
    if(header.getAttribute('class')){
        if(header.getAttribute('class').includes("openSearchBar")){
            header.classList.remove("openSearchBar");
            input.classList.add("hidden");
            btn.classList.add("hidden");
        } else {
            header.classList.add("openSearchBar");
            input.classList.remove("hidden");
            btn.classList.remove("hidden");
        }
    } else {
        header.classList.add("openSearchBar");
        input.classList.remove("hidden");
        btn.classList.remove("hidden");
    }
})
