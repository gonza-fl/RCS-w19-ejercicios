/* Ejercicio 1: "Lista de reproducción"
Comienza con:
let playlist = ["Until I Found You", "Levitating", "As It Was"];
Mostrar un menú numerado con for.
Mostrar también la cantidad total y el último tema mediante índice (length - 1). */

let playlist = ["Until I Found You", "Levitating", "As It Was"];

// for (let i = 0; i < playlist.length; i++) {
//   console.log(`Canción numero ${i + 1} titulo: ${playlist[i]} `);
// }
// console.log(`El número de la lista de reproducción es ${playlist.length}`);
// console.log(`El ultimo tema de la lista es ${playlist[playlist.length - 1]}`);

// //* Ejercicio 2: "Editar playlist"
// playlist.push("Tema nuevo 1");
// playlist.push("Tema nuevo 2");

// console.log(playlist);

// playlist.splice(0, 1, "Remix");
// console.log(playlist);

// playlist.pop();
// console.log(playlist);

// playlist.unshift("Tema nuevo 3");
// console.log(playlist);

// //* Ejercicio 3: "Recortes y reemplazos"

// let miListaMusical = playlist.slice(1, 3);
// console.log(miListaMusical);

// miListaMusical.splice(2, 1, "Nuevo Tema");
// console.log(miListaMusical);

//* Ejercicio 4: "Elegí qué suena"
/* Mostrá el menú numerado y pedile al usuario un número con prompt().
Convertí a número y validá rango 1..playlist.length. Si no es válido, pedí de nuevo.
Al elegir válido, alert("Reproduciendo: <tema>"). */

let menu = "Elegí qué canción escuchar:\n";
for (let i = 0; i < playlist.length; i++) {
  menu += `${i + 1}. ${playlist[i]}\n`;
}

let eleccion = prompt(menu);
let eleccionNum = parseInt(eleccion);
if (eleccionNum >= 1 && eleccionNum <= playlist.length) {
  let indice = eleccionNum - 1;
  let temaElegido = playlist[indice];
  alert(`🎵 Reproduciendo: "${temaElegido}"`);
} else {
  alert(
    `❌ Opción no válida. Por favor, ingresa un número entre 1 y ${playlist.length}.`
  );
}
