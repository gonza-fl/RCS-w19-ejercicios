/* Ejercicio 1: "Lista de reproducción"
Comienza con:
let playlist = ["Until I Found You", "Levitating", "As It Was"];
Mostrar un menú numerado con for.
Mostrar también la cantidad total y el último tema mediante índice (length - 1). */

let playlist = ["Until I Found You", "Levitating", "As It Was"];

for (let i = 0; i < playlist.length; i++) {
  console.log(`Canción numero ${i + 1} titulo: ${playlist[i]} `);
}
console.log(`El número de la lista de reproducción es ${playlist.length}`);
console.log(`El ultimo tema de la lista es ${playlist[playlist.length - 1]}`);

playlist.push("Tema nuevo 1")
playlist.push("Tema nuevo 2")

console.log(playlist)

playlist.splice(0, 1, "Remix")
console.log(playlist)

playlist.pop()
console.log(playlist)

playlist.unshift("Tema nuevo 3")
console.log(playlist)

let miListaMusical = playlist
console.log(miListaMusical)

miListaMusical.slice(1, 3)
console.log(miListaMusical)