//* Ejercicio 1: "Registro a torneo de eSports"
//* and (&&)
//* or (||)

/* Reglas:

//* Puede registrarse si es >= 18 && !baneado.
//* Si es menor de 18, solo puede registrarse si permisoTutor === true && !baneado.
//*Muestra por consola uno de estos mensajes:
"✅ Registro aceptado"
"🚫 Registro rechazado"
//*Debe aparecer al menos un && y un || en tu solución.
*/

let edad = 24; // número
let permisoTutor = false; // boolean
let sanción = false; // boolean

//! if (edad >=18 && sanción === true)
//*v1
if (edad >= 18 && !sanción) {
  console.log("✅ Registro aceptado");
} else if (edad < 18 && permisoTutor === true && !sanción) {
  console.log("✅ Registro aceptado");
} else {
  console.log("🚫 Registro rechazado");
}

//*v2
if (
  (edad >= 18 && !sanción) ||
  (edad < 18 && permisoTutor === true && !sanción)
) {
  console.log("✅ Registro aceptado");
} else {
  console.log("🚫 Registro rechazado");
}
