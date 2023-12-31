// CARROSSEL DOS CONVITES
let cartaoAtual = 0

const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao")

function esconderCartaoSelecionado(){
    document.querySelector(".selecionado").classList.remove("selecionado")
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado")
}

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) cartaoAtual = -1

    esconderCartaoSelecionado()

    cartaoAtual ++

    mostrarCartao(cartaoAtual)
})

btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0 ) cartaoAtual = cartoes.length

    esconderCartaoSelecionado()

    cartaoAtual --

    mostrarCartao(cartaoAtual)
})
