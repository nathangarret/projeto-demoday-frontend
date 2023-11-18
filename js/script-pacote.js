const verMais = document.querySelector(".ver-mais")
const btnModal = document.querySelector(".btn-modal")

verMais.addEventListener("click", () => {
    document.querySelector(".modal-pago").classList.add("abrir-modal")
})

btnModal.addEventListener("click", () => {
    document.querySelector(".modal-pago").classList.remove("abrir-modal")
})