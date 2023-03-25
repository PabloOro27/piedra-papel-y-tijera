let manoPiedra
let manoPapel 
let manoTijera
let manoJugador 
let manoEnemiga
let victorias = 0  
let derrotas = 0

const botonIniciar = document.querySelector('#iniciarJuego');
const imagenJugador = document.querySelector('#imagenJugador');
const imagenEnemigo = document.querySelector('#imagenEnemigo');
const spanvictorias = document.querySelector('#win')
const spanDerrotas = document.querySelector('#lose')

function iniciarJuego() {
    manoPiedra = document.querySelector('#manoPiedra');
    manoPapel = document.querySelector('#manoPapel'); 
    manoTijera = document.querySelector('#manoTijera');

    botonIniciar.addEventListener('click', seleccionarMano)
}

function seleccionarMano(){
    if(manoPiedra.checked){
        manoJugador = 'PIEDRA';
        imagenJugador.setAttribute('src', './Assets/Piedra.png');            
    }
    else if(manoPapel.checked){
        manoJugador = 'PAPEL';
        imagenJugador.setAttribute('src', './Assets/Papel.png');            
    }
    else if(manoTijera.checked){
        manoJugador = 'TIJERA';
        imagenJugador.setAttribute('src', './Assets/Tijeras.png');            
    }
    else{
        alert('No has seleccionado ninguna de las manos'); 
        location.reload()
    }

    seleccionarMascotaEnemiga()
}

function seleccionarMascotaEnemiga(){
    let selectEnemigo = aleatorio(1,3);

    if(selectEnemigo === 1){
        manoEnemiga = "PIEDRA";
        imagenEnemigo.setAttribute('src', './Assets/Piedra.png')
    }
    else if(selectEnemigo === 2){
        manoEnemiga = "PAPEL"; 
        imagenEnemigo.setAttribute('src', './Assets/Papel.png')
    }
    else {
        manoEnemiga = "TIJERA"; 
        imagenEnemigo.setAttribute('src', './Assets/Tijeras.png')
    }

    iniciarBatalla(); 
}

function iniciarBatalla(){
    if(manoJugador === manoEnemiga){
        alert('EMPATE--');
    }
    else if(manoJugador === 'PIEDRA' && manoEnemiga === 'TIJERA'){
        alert('GANASTE--');
        victorias++;
    }
    else if(manoJugador === 'PAPEL' && manoEnemiga === 'PIEDRA'){
        alert('GANASTE--');
        victorias++;
    }
    else if(manoJugador === 'TIJERA' && manoEnemiga === 'PAPEL'){
        alert('GANASTE--');
        victorias++;
    }
    else{
        alert('PERDISTE--')
        derrotas++;
    }

    spanvictorias.innerHTML = victorias
    spanDerrotas.innerHTML = derrotas
}

//funciona aleatorio
function aleatorio (min, max)
{
    return Math.floor(Math.random()*(max - min + 1)+min)
}
window.addEventListener('load', iniciarJuego)