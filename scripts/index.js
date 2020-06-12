const buttomSearch = document.querySelector("#page-home main a") //Procurar o botão no HTML
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

buttomSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})
