//* Ejercicio 2: "Sistema de gestión de notas"

/*
*Creá un sistema que permita gestionar las notas de un estudiante.

 *Requisitos:
 *Comenzá con un array vacío: let notas = [].
 *Creá una función agregarNota(nota) que reciba una nota (número del 0 al 10), valide que esté en ese rango, y la agregue al array con push(). Retorna true si se agregó correctamente, false si no.
 *Creá una función calcularPromedio(notas) que reciba el array de notas y devuelva el promedio (usa un for para sumar y luego divide por la cantidad).
 *Creá una función mostrarNotas(notas) que recorra el array con un for y muestre cada nota numerada en consola.
 *Creá una función obtenerEstado(promedio) que reciba el promedio y retorne un string:
 *Si promedio >= 7: "Aprobado"
 *Si promedio >= 4 && promedio < 7: "Regular"
 *Si promedio < 4: "Reprobado"
 *En el código principal:
 *Mostrá un menú con switch:
 *1) Agregar nota
 *2) Ver todas las notas
 *3) Ver promedio y estado
 *4) Salir
 *Usá un bucle while para mantener el menú activo hasta que elijan salir.
 */

let notas = [];

function agregarNota(nota) {
  if (typeof nota === "number" && nota >= 0 && nota <= 10) {
    notas.push(nota);
    return true;
  }
  return false;
}

function calcularPromedio(notas) {
  if (notas.length === 0) return 0;
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  return suma / notas.length;
}

function mostrarNotas(notas) {
  for (let i = 0; i < notas.length; i++) {
    console.log(`Nota ${i + 1}: ${notas[i]}`);
  }
}

function obtenerEstado(promedio) {
  if (promedio >= 7) return "Aprobado";
  if (promedio >= 4) return "Regular";
  return "Reprobado";
}

while (true) {
  let opcion = prompt(
    "Menú: \n1) Agregar nota \n2) Ver notas \n3) Ver promedio y estado \n4) Salir"
  );
  switch (opcion) {
    case "1":
      let nota = parseFloat(prompt("Ingresa nota (0-10)"));
      if (agregarNota(nota)) {
        alert("Nota agregada");
      } else {
        alert("Nota inválida");
      }
      break;
    case "2":
      mostrarNotas(notas);
      break;
    case "3":
      let promedio = calcularPromedio(notas);
      let estado = obtenerEstado(promedio);
      alert(`Promedio: ${promedio}, Estado: ${estado}`);
      break;
    case "4":
      break;
    default:
      alert("Opción inválida");
  }
  if (opcion === "4") break;
}
