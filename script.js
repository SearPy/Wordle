let intentos = 6;
let intento = "";
let mensaje ="";
let max = "3";
let min = "0";


let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
const button = document.getElementById("guess-button");
const GRID = document.getElementById("grid");
const ERROR = document.getElementById("error");
Math.floor(Math.random() * (max - min + 1)) + min;
Math.floor(Math.random() * 10) + 1;
var palabra = diccionario[Math.floor(Math.random() * diccionario.length)];


const endpoint = "https://random-word-api.herokuapp.com/word?length=5"

fetch(endpoint).then((response) =>{
    response.json().then((data) => {
        palabra = data[0].toUpperCase();
        console.log(palabra)
    });
});


button.addEventListener("click", () => {
    let input = document.getElementById("guess-input");
    intento = input.value.toUpperCase();
    ERROR.innerHTML = "<p></p>"
    if(intento.length > 4){
        verificar(intento);
    }else{
        ERROR.innerHTML = "<p>*La palabra debe contener por lo menos 5 letras*</p>"
    }
    
})


function verificar(intento){
    const ROW = document.createElement('div');
    ROW.className = 'row';
    if(intento===palabra){
        mensaje="<h1>GANASTE!😀</h1>"
        terminar(mensaje);
    }
    for (let i = 0; i < palabra.length; i++) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (!palabra.includes(intento[i])){
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = 'grey';
        }else if(intento[i]===palabra[i]){
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = 'green';
        }else{
            SPAN.innerHTML = intento[i];
            SPAN.style.backgroundColor = 'yellow';
        }
        ROW.appendChild(SPAN)
        }
        GRID.appendChild(ROW)
        console.log(GRID)
    
    intentos --
    if (!intentos){
        mensaje="<h1>PERDISTE!😖</h1>"
        terminar(mensaje);
    }
    
}


function terminar(mensaje){
    let input = document.getElementById("guess-input")
    input.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

    