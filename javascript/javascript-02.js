let botones = document.getElementsByTagName("button");
let resultado = document.getElementById("resultado");
let prm 
let prm2

for (const key in botones ) {
    if (Object.prototype.hasOwnProperty.call( botones , key)) {
    const boton = botones [key];
    console.log(boton)
    boton.addEventListener("click", pintar)
    }
} 

function pintar(e) {
    //console.log(e.target.className)
    resultado.value += e.target.innerText
}


let operadores = document.getElementsByClassName("numeros")
console.log(operadores)

for (const key in operadores) {
    if (Object.prototype.hasOwnProperty.call(operadores, key)) {
    const boton = operadores[key];
    console.log(boton)
    boton.addEventListener("click", pintar2)
    }
}    

function pintar2(e){
    console.log(e.target.innerText)
}

function limpiar(){
    resultado.value = "";
}

function sumar (e){
    prm = resultado.value;
    operacion = e.target.innerText;
    resultado.value = "";
    e.target.style.backgroundColor = "red"
}

function igual(){
    let prm2 = resultado.value
    if (operacion == "+") {
        resultado.value = parseInt(prm) + parseInt(prm2)
    }
}