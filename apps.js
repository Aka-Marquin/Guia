var escuro = document.getElementById("cartao1")
var cartao2 = document.getElementById("cartao2")
var cartao3 = document.getElementById("cartao3")
var cartao4 = document.getElementById("cartao4")
var cartao5 = document.getElementById("cartao5")
var cartao6 = document.getElementById("cartao6")
var cartao7 = document.getElementById("cartao7")
var cartao8= document.getElementById("cartao8")
let BotãoSimples = document.getElementById("simples")
let trocaFundo = false

BotãoSimples.onclick = trocaClasse


function trocaClasse(){

    if(trocaFundo == true){
    escuro.classList.remove("claro")
    escuro.classList.add("cartao1")
    cartao2.classList.add("cartao2")
    cartao3.classList.add("cartao3")
    cartao4.classList.add("cartao4")
    cartao5.classList.add("cartao5")
    cartao6.classList.add("cartao6")
    cartao7.classList.add("cartao7")
    cartao8.classList.add("cartao8")
    trocaFundo = false
    }
    
    else{
    escuro.classList.remove("cartao1")
    cartao2.classList.remove("cartao2")
    cartao3.classList.remove("cartao3")
    cartao4.classList.remove("cartao4")
    cartao5.classList.remove("cartao5")
    cartao6.classList.remove("cartao6")
    cartao7.classList.remove("cartao7")
    cartao8.classList.remove("cartao8")
    escuro.classList.add("claro")
    trocaFundo = true
    }
}

