# 🧠 Clase 03 – Nuevos ejercicios: Operadores lógicos y truthy/falsy

## 🎯 Objetivo
Usar `!`, `&&`, `||`, `!!` y evaluación de valores truthy/falsy en situaciones nuevas. Se permite `prompt()` y `alert()`.

---

## 🧩 Ejercicio 1: "Registro a torneo de eSports"
- Variables iniciales sugeridas:
  ```js
  let edad = 16;         // número
  let permisoTutor = true; // boolean
  let baneado = false;     // boolean
  ```
- Reglas:
  - Puede registrarse si es `>= 18 && !baneado`.
  - Si es menor de 18, solo puede registrarse si `permisoTutor === true && !baneado`.
- Mostrá por consola uno de estos mensajes:
  - "✅ Registro aceptado"
  - "🚫 Registro rechazado"
- Debe aparecer al menos un `&&` y un `||` en tu solución.

---

## 🧩 Ejercicio 2: "Newsletter con preferencia opcional"
- Pedí al usuario un texto con `prompt("Tema de interés")`.
- Convertí el valor a boolean con `!!` para detectar si escribió algo (no vacío).
- Si no escribió nada (falsy), usá un valor por defecto: `"general"` (con `||`).
- Mostrá con `alert` el tema final elegido.

---

## 🧩 Ejercicio 3: "Login simplificado"
- Variables:
  ```js
  let usuario = "alex";
  let password = "1234";
  ```
- Pedí `prompt` para usuario y contraseña.
- Condición de acceso (con comparaciones y `&&`):
  - Si coincide usuario y contraseña, `alert("Bienvenido/a")`.
  - Si el usuario es "invitado" (exacto) y la contraseña está vacía o es falsy, `alert("Acceso de invitado")`.
  - En cualquier otro caso, `alert("Credenciales inválidas")`.
- Usá `!` para validar la contraseña vacía de invitado.

---

## 💡 Extra (opcional)
- Creá una variable `recordarme` que puede ser `null` o `"si"` y mostrala como boolean con `!!recordarme` explicando en un comentario por qué.

---

## 🧱 Entrega
1. Creá tu archivo `solucion3.js` dentro de tu rama en `clase3/`.
2. Commit con mensaje:
   ```
   feat: ejercicio3 - nuevos casos con operadores lógicos
   ```
3. Hacé Push y **Pull Request** asignando a `@gonza-fl` como reviewer.


