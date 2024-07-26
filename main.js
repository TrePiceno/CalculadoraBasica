let inputUno = document.getElementById("valorUno");
let inputDos = document.getElementById("valorDos");
let resultado = document.getElementById("resultado");

function sumar() {
    let ingresoUno = inputUno.value;
    let valorUno = Number(ingresoUno);

    let ingresoDos = inputDos.value;
    let valorDos = Number(ingresoDos);

    let suma = valorUno + valorDos;
    resultado.value = suma;
}

function restar() {
    let ingresoUno = inputUno.value;
    let valorUno = Number(ingresoUno);

    let ingresoDos = inputDos.value;
    let valorDos = Number(ingresoDos);

    let resta = valorUno - valorDos;
    resultado.value = resta;
}

function multiplicar() {
    let ingresoUno = inputUno.value;
    let valorUno = Number(ingresoUno);

    let ingresoDos = inputDos.value;
    let valorDos = Number(ingresoDos);

    let multiplicacion = valorUno * valorDos;
    resultado.value = multiplicacion;
}

function dividir() {
    let ingresoUno = inputUno.value;
    let valorUno = Number(ingresoUno);

    let ingresoDos = inputDos.value;
    let valorDos = Number(ingresoDos);

    let division = valorUno / valorDos;
    resultado.value = division;
}

function sacarRaiz() {
    let ingresoUno = inputUno.value;
    let valorUno = Number(ingresoUno);

    let ingresoDos = inputDos.value;
    let valorDos = Number(ingresoDos);

    let raizCuadrara = Math.sqrt(valorUno);
    let raizCuadraraDos = Math.sqrt(valorDos);
    resultado.value = `V1: ${raizCuadrara} V2: ${raizCuadraraDos}`;
}

function potenciar() {
    let ingresoUno = inputUno.value;
    let valorUno = Number(ingresoUno);

    let ingresoDos = inputDos.value;
    let valorDos = Number(ingresoDos);

    let potencia = Math.pow(valorUno, valorDos)
    resultado.value = potencia;
}

function obtenerAbsoluto() {
    let ingresoUno = inputUno.value;
    let valorUno = Number(ingresoUno);

    let ingresoDos = inputDos.value;
    let valorDos = Number(ingresoDos);

    let valorAbsoluto = Math.abs(valorUno);
    let valorAbsoluto2 = Math.abs(valorDos);
    resultado.value = `V1: ${valorAbsoluto} V2: ${valorAbsoluto2}`
}

function obtenerNumeroRandom() {
    let ingresoUno = inputUno.value;
    let valorUno = Number(ingresoUno);

    let ingresoDos = inputDos.value;
    let valorDos = Number(ingresoDos);

    valorDos++;
    let random = Math.random() * (valorDos - valorUno) + valorUno;
    resultado.value = random;
}

function redondear() {
    let redondearResultado = resultado.value;
    let mostrarResultado = Math.round(redondearResultado);
    resultado.value = mostrarResultado;
}

function redondearAbajo() {
    let redondearResultado = resultado.value;
    let mostrarResultado = Math.floor(redondearResultado);
    resultado.value = mostrarResultado;
}

function redondearArriba() {
    let redondearResultado = resultado.value;
    let mostrarResultado = Math.ceil(redondearResultado);
    resultado.value = mostrarResultado;
}