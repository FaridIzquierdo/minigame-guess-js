let numRandom = Math.floor(Math.random()*100) + 1;
let numInput = document.getElementById("numeroEntrada");
let message = document.getElementById("mensaje");
let intento = document.getElementById("intento");

let intentos = 0;
function checkingResult(){
    intentos++;
    intento.textContent = "Intento: " + intentos;
    let numInputParse=parseInt(numInput.value);

    if(numInputParse<1 || numInputParse>100 || isNaN(numInputParse)){
        message.textContent = "Ingrese un número válido entre 1 al 100";
        message.style.color = 'red';
        return;
    }
    
    if(numInputParse==numRandom){
        message.textContent = "Felicitaciones, haz adivinado el numero!";
        message.style.color ="green";
    }if(numInputParse<numRandom){
        message.textContent = "El numero a adivinar es mayor!!";
        message.style.color = 'red';
    }else if(numInputParse>numRandom){
        message.textContent = "El numero a adivinar es menor!!";
        message.style.color = 'red';
    }
    
}

