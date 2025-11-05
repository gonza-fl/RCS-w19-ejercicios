//* 🧩 Ejercicio 3: "Login simplificado"
/*
Pedí prompt para usuario y contraseña.
Condición de acceso (con comparaciones y &&):
Si coincide usuario y contraseña, alert("Bienvenido/a").
Si el usuario es "invitado" (exacto) y la contraseña está vacía o es falsy, alert("Acceso de invitado").
En cualquier otro caso, alert("Credenciales inválidas").
Usá ! para validar la contraseña vacía de invitado.
*/

let usuario = "Luciano";
let password = "contraseña";

let nombreUsuario = prompt("Ingrese su nombre Usuario");
let passwordUsuario = prompt("Ingrese su contraseña");

if (nombreUsuario === usuario && password === passwordUsuario) {
  alert("Bienvenido/a");
} else if (nombreUsuario === "invitado" && !!password) {
  alert("Acceso de invitado");
} else {
  alert("Credenciales inválidas");
}

//* Extra
let recordarme = null || "si"
console.log(!!recordarme)

//* Explicación: la variable recordarme muestra en la consola un true porque niega el null al usar !!
//* !! este doble signo convierte a boolean real y el || (or) significa que puede ser null o si
