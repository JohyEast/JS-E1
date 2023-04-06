//ejercicio 1
function paresOimpares(numero) {
  let resto = numero % 2;
  if (resto === 0) {
    console.log("El numero es par");
  } else {
    console.log("El numero es impar");
  }
}

paresOimpares(5);

//ejercicio 2
function numeroMayor(numero1, numero2) {
  switch (true) {
    case numero1 > numero2:
      console.log(`${numero1} es mayor que ${numero2}`);
      break;
    case numero1 < numero2:
      console.log(`${numero2} es mayor que ${numero1}`);
      break;
    case numero1 === numero2:
      console.log(`${numero1} y ${numero2} son iguales`);
      break;
  }
}

numeroMayor(4, 5);

//ejercicio 3
function multiploDeCinco(numero) {
  let resto = numero % 5;
  if (resto === 0) {
    console.log(`El numero ${numero} es multiplo de 5`);
  } else {
    console.log(`El numero ${numero} no es multiplo de 5`);
  }
}

multiploDeCinco(14);

//ejercicio 4

function imprimir(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

imprimir(8);

//ejercicio 5

function imprimirPalabra(palabra, numero) {
  for (let i = 0; i < numero; i++) {
    console.log(`${palabra}`);
  }
}

imprimirPalabra("hola", 5);

//ejercicio 6
