# 🧠 Clase 04 – Nuevos ejercicios: Bucles y switch

## 🎯 Objetivo
Aplicar `while`, `for` y `switch` en situaciones diferentes a las vistas. Se permite `prompt()` y `alert()`.

---

## 🧩 Ejercicio 1: "Cuenta regresiva del cohete"
- Empezá con `let t = 10;` y usá `while` para mostrar en consola `Despegue en: 10, 9, ... 0`.
- Al finalizar, `alert("🚀 Despegue!")`.
- Evitá números mágicos: explicá en un comentario por qué `t >= 0`.

---

## 🧩 Ejercicio 2: "Menú de opciones hasta salir"
- Mostrá un `prompt` en bucle `while` que ofrezca:
  - `1) Ver hora`
  - `2) Saludar`
  - `3) Salir`
- Normalizá la entrada (trim) y usá `switch` para resolver cada opción:
  - `1` → mostrar hora actual con `alert(new Date().toLocaleTimeString())`.
  - `2` → pedir nombre y `alert("Hola, <nombre>!")`.
  - `3` → terminar el bucle.
  - default → `alert("Opción inválida")` y seguir.

---

## 🧩 Ejercicio 3: "Sumatoria con corte"
- Usá un `for` para sumar los números del `1` al `n` (pedí `n` por `prompt` y convertí a `Number`).
- Si `n` es mayor a `1000`, interrumpí con `break` y mostrá `alert("Número demasiado grande")`.
- Si `n` es válido, mostr `alert("La suma total es: <resultado>")`.

---

## 💡 Extra (opcional)
- Reescribí la sumatoria con `while` y compará brevemente la lógica.

---

## 🧱 Entrega
1. Creá tu archivo `solucion4.js` dentro de tu rama en `clase4/`.
2. Commit con mensaje:
   ```
   feat: ejercicio4 - nuevos casos con bucles y switch
   ```
3. Push y **Pull Request** asignando a `@gonza-fl` como reviewer.


