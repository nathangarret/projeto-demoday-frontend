document.querySelector(".titulo-pricipal").addEventListener("click", () => {
    document.querySelector(".caixa").classList.add("aparecer")
})


document.querySelector(".btn-voltar").addEventListener("click", () => {
    document.querySelector(".caixa").classList.remove("aparecer")
})