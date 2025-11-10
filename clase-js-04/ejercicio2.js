//* Ejercicio 2: "Menú de opciones hasta salir"

/*Mostrar un prompt en bucle while que ofrezca:
1) Ver hora
2) Saludar
3) Salir
Normaliza la entrada (trim) y usá switch para resolver cada opción:
1 → mostrar hora actual con alert(new Date().toLocaleTimeString()).
2 → pedir nombre y alert("Hola, <nombre>!").
3 → terminar el bucle.
default → alert("Opción inválida") y seguir. */

let salir = false;
let entrada;

while (!salir) {
  entrada = prompt("Elije la opción de acuerdo a su numero o palabra:\n1) Ver hora\n2) Saludar\n3) Salir");

  if (entrada === null) {
    salir = true;
    break;
  }

  let opción = entrada.trim();
  switch (opción) {
    case "1":
    case "hora":
      alert(`La hora es ${new Date().toLocaleTimeString()}`);
      break;
    case "2":
      let nombre = prompt("Ingrese su nombre");
      if (nombre === null) {
        alert("Saliste del saludo.");
      } else if (nombre.trim() === "") {
        alert("No ingresaste nombre.");
      } else {
        alert(`Hola ${nombre}`);
      }
      break;
    case "3":
      salir = true;
      break;
    default:
      alert("Opción inválida");
  }
}
