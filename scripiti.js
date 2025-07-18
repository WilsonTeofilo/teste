let numero = window.document.getElementById("num")
let resultado = window.document.getElementById("seletor")

function tabuada(){
    if (numero.value.length == 0){
        window.alert(`digite um número, caixa vazia.`)
    }else{
resultado.innerHTML= ""
    let numeror = Number(numero.value)
    for (contador = 0; contador <=10; contador++){
        var elemento = window.document.createElement("option")
        elemento.text= (`${numeror} x ${contador} = ${numeror*contador}`)
        elemento.value=`tab ${contador}`
        resultado.appendChild(elemento)
    }
    } 

}