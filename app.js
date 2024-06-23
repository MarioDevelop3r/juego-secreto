let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si ya sorteamos todos los números
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    //Si el numero generado está incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  console.log(numeroSecreto);
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de números
  //Generar el número aleatorio
  //Inicializar el número intentos
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

// // Desafíos
// // Crea una lista vacía llamada "listaGenerica".
// let listaGenerica = [];

// // Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
// let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// // Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
// lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

// // Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
// function mostrarLista(lista) {
//   lista.forEach((element) => {
//     console.log(element);
//   });
// }

// // Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
// function mostrarListaInversa(lista) {
//   for (let i = lista.length - 1; i >= 0; i--) {
//     console.log(lista[i]);
//   }
// }

// // Crea una función que calcule el promedio de los elementos en una lista de números.
// function promedioLista(lista) {
//   let suma = 0;
//   lista.forEach((element) => {
//     suma += element;
//   });
//   return suma / lista.length;
// }
// // Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
// function mayorMenorLista(lista) {
//   let mayor = lista[0];
//   let menor = lista[0];
//   lista.forEach((element) => {
//     if (element > mayor) {
//       mayor = element;
//     }
//     if (element < menor) {
//       menor = element;
//     }
//   });
//   console.log(`El número mayor es ${mayor} y el menor es ${menor}`);
// }
// // Crea una función que devuelva la suma de todos los elementos en una lista.
// function sumaLista(lista) {
//   let suma = 0;
//   lista.forEach((element) => {
//     suma += element;
//   });
//   return suma;
// }
// // Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// function buscarElemento(lista, elemento) {
//   return lista.indexOf(elemento);
// }
// // Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// function sumarListas(lista1, lista2) {
//   let listaSumada = [];
//   for (let i = 0; i < lista1.length; i++) {
//     listaSumada.push(lista1[i] + lista2[i]);
//   }
//   return listaSumada;
// }
// // Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
// function cuadradoLista(lista) {
//   let listaCuadrada = [];
//   lista.forEach((element) => {
//     listaCuadrada.push(element * element);
//   });
//   return listaCuadrada;
// }
