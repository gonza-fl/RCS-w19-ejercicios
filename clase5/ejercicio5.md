# 🧠 Clase 05 – Nuevos ejercicios: Arrays y recorrido con for

## 🎯 Objetivo
Trabajar con arreglos usando índices, `length` y métodos básicos (`push`, `pop`, `shift`, `unshift`, `splice`, `slice`), recorriéndolos con `for`. Se permite `prompt()` y `alert()`.

---

## 🧩 Ejercicio 1: "Lista de reproducción"
- Comenzá con:
  ```js
  let playlist = ["Until I Found You", "Levitating", "As It Was"];
  ```
- Mostrá un menú numerado con `for`.
- Mostrá también la cantidad total y el último tema mediante índice (`length - 1`).

---

## 🧩 Ejercicio 2: "Editar playlist"
- Agregá dos temas al final con `push` y volvé a listar.
- Reemplazá el tema en la posición `0` por `"(Remix)"` concatenado al nombre original.
- Quitá el último con `pop` y agregá un tema al inicio con `unshift`.

---

## 🧩 Ejercicio 3: "Recortes y reemplazos"
- Guardá en una variable una copia parcial con `slice(1, 3)` y mostralo.
- Usá `splice(2, 1, "Nuevo Tema")` para reemplazar un tema en `playlist`.
- Mostrá la lista final numerada.

---

## 🧩 Ejercicio 4: "Elegí qué suena"
- Mostrá el menú numerado y pedile al usuario un número con `prompt()`.
- Convertí a número y validá rango `1..playlist.length`. Si no es válido, pedí de nuevo.
- Al elegir válido, `alert("Reproduciendo: <tema>")`.

---

## 💡 Extra (opcional)
- Mostrá los índices impares primero y luego los pares en dos recorridos separados.

---

## 🧱 Entrega
1. Creá tu archivo `solucion5.js` dentro de tu rama en `clase5/`.
2. Commit con mensaje:
   ```
   feat: ejercicio5 - nuevos casos con arrays y for
   ```
3. Push y **Pull Request** asignando a `@gonza-fl` como reviewer.
