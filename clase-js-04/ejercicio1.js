//* 🧩 Ejercicio 1: "Cuenta regresiva del cohete"
//*Empieza con let t = 10; y usá while para mostrar en consola Despegue en: 10, 9, ... 0.
//*Al finalizar, alert("🚀 Despegue!").
//!Evita números mágicos: explica en un comentario por qué t >= 0.

let t = 10;

while (t >= 0) {
  console.log(`Despegue en ${t}`);
  t = t - 1;
}
console.log("¡Despegue! 🚀");
