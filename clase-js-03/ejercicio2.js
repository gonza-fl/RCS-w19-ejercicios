//* 🧩 Ejercicio 2: "Newsletter con preferencia opcional"

/*Pedí al usuario un texto con prompt("Tema de interés").
Convertí el valor a boolean con !! para detectar si escribió algo (no vacío).
Si no escribió nada (falsy), usá un valor por defecto: "general" (con ||).
Muestre con alert el tema final elegido.
*/

let temaUsuario = prompt("Por favor, escriba un tema de su interés") || "General";

//* Este ejercicio pedía hacer una evaluación a la misma variable
if (!!temaUsuario) {
  alert(`Al no seleccionar un tema de intereses, su tema es ${temaUsuario}`);
} else {
  alert(temaUsuario);
}
