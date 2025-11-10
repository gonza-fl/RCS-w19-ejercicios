//* Ejercicio 1: "Calculadora mejorada"
/* Creá una calculadora que permita realizar operaciones básicas usando funciones.

Requisitos:
Creá una función pedirNumero(mensaje) que reciba un mensaje, use prompt() y devuelva el número validado (retorna null si no es válido).
Creá una función pedirOperador() que pida un operador (+, -, *, /) y lo valide.
Creá una función calcular(num1, num2, operador) que reciba dos números y un operador, y devuelva el resultado usando switch.
Creá una función mostrarResultado(num1, num2, operador, resultado) que muestre un mensaje formateado con alert().
En el código principal, usá un bucle while para permitir múltiples cálculos hasta que el usuario decida salir.
Validaciones:
Los números deben ser válidos (no NaN).
El operador debe ser uno de los permitidos.
Si hay división por cero, mostrar un error. */

function pedirNumero(mensaje) {
  let input = prompt(mensaje);
  let num = parseFloat(input);
  if (isNaN(num)) {
    return null;
  } else {
    return num;
  }
}

function pedirOperador() {
  let operador;
  while (true) {
    operador = prompt("Ingresa un operador: +, -, *, /");
    if (["+", "-", "*", "/"].includes(operador)) return operador;
    alert("Operador inválido");
  }
}

function calcular(num1, num2, operador) {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: División por cero";
      } else {
        return num1 / num2;
      }
    default:
      return "Operador inválido";
  }
}

function mostrarResultado(num1, num2, operador, resultado) {
  alert(`${num1} ${operador} ${num2} = ${resultado}`);
}

while (true) {
  let num1 = pedirNumero("Ingresa primer número");
  if (num1 === null) continue;
  let num2 = pedirNumero("Ingresa segundo número");
  if (num2 === null) continue;
  let operador = pedirOperador();
  let resultado = calcular(num1, num2, operador);
  mostrarResultado(num1, num2, operador, resultado);
  if (!confirm("¿Otro cálculo?")) break;
}
