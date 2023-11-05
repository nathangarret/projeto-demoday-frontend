const verMais = document.querySelectorAll(".ver-mais")
const btnModal = document.querySelectorAll(".btn-modal")
console.log(btnModal);

verMais[0].addEventListener("click", () => {
    document.querySelector(".modal-gratuito").classList.add("abrir-modal")
})

btnModal[0].addEventListener("click", () => {
    document.querySelector(".modal-gratuito").classList.remove("abrir-modal")
})

verMais[1].addEventListener("click", () => {
    document.querySelector(".modal-pago").classList.add("abrir-modal")
})

btnModal[1].addEventListener("click", () => {
    document.querySelector(".modal-pago").classList.remove("abrir-modal")
})