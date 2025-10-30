# 🧠 Clase 02 - Condicionales e Operadores de Comparación

## 🎯 Objetivo
Practicar el uso de **if / else** y **operadores de comparación** (`>`, `<`, `>=`, `<=`, `==`, `===`) en JavaScript.

---

## 📋 Consigna general
Cada alumno debe crear su rama (por ejemplo `mi-nombre`) dentro de la carpeta `ejercicio2/` y resolver los siguientes ejercicios.

---

## 🧩 Ejercicio: “El control de acceso del club Rolling Code 🕺”

El club Rolling Code tiene un sistema de control de acceso que determina si una persona puede entrar o no, según las siguientes reglas:

1. Solo pueden ingresar **mayores de 18 años**.  
2. Si tienen **exactamente 18 años**, deben mostrar **DNI**.  
3. Si tienen **menos de 18 años**, **no pueden ingresar**.

Además:
- Si el nombre ingresado es `"Messi"`, se muestra el mensaje especial:  
  `"🟢 Bienvenido, GOAT."`
- Si el nombre es `"RollingBot"`, mostrar:  
  `"⚙️ Acceso denegado: solo humanos."`

---

## 🧮 Tu tarea

1. Crear tres variables:

   ```js
   let nombre = "Juan";
   let edad = 20;
   let tieneDNI = true;


2. Usar **if / else if / else** para mostrar en consola:

   * `"✅ Acceso permitido"` si tiene más de 18 años.
   * `"💳 Acceso permitido con DNI"` si tiene 18 años y `tieneDNI` es `true`.
   * `"🚫 Acceso denegado"` si tiene menos de 18 o no cumple las condiciones.
   * Y además los **mensajes especiales** de arriba (`Messi` / `RollingBot`).

3. Usar **operadores de comparación** (`>`, `<`, `>=`, `<=`, `==`, `===`) al menos una vez en la lógica.

4. Mostrar el resultado en consola, por ejemplo:

   ```
   Juan tiene 20 años → ✅ Acceso permitido
   ```

---

## 💡 Extra (para sumar puntos)

* Pedir los datos con `prompt()` (si usan entorno de navegador).
* Agregar un segundo bloque que compare edades de dos personas y diga quién es mayor:

  ```js
  if (edad1 > edad2) {
    console.log(`${nombre1} es mayor que ${nombre2}`);
  } else if (edad1 === edad2) {
    console.log(`${nombre1} y ${nombre2} tienen la misma edad`);
  } else {
    console.log(`${nombre2} es mayor que ${nombre1}`);
  }
  ```

---

## 🧱 Entrega

1. Crear el archivo `ejercicio2.js` dentro de `ejercicio2/`.

2. Hacer commit con un mensaje:

   ```
   feat: - Ejercicio2 - if/else y comparadores
   ```

3. Push y **Pull Request** asignando a `@gonza-fl` como reviewer.
