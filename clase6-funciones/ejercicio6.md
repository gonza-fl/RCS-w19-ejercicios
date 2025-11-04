# 🧠 Clase 06 – Ejercicios de práctica: Funciones

## 🎯 Objetivo
Aplicar funciones junto con todos los conceptos vistos desde la clase 1 hasta la clase 6. Se permite `prompt()` y `alert()`. **NO usar objetos** (aún no vistos).

---

## 🧩 Ejercicio 1: "Calculadora mejorada"

Creá una calculadora que permita realizar operaciones básicas usando funciones.

### Requisitos:
- Creá una función `pedirNumero(mensaje)` que reciba un mensaje, use `prompt()` y devuelva el número validado (retorna `null` si no es válido).
- Creá una función `pedirOperador()` que pida un operador (`+`, `-`, `*`, `/`) y lo valide.
- Creá una función `calcular(num1, num2, operador)` que reciba dos números y un operador, y devuelva el resultado usando `switch`.
- Creá una función `mostrarResultado(num1, num2, operador, resultado)` que muestre un mensaje formateado con `alert()`.
- En el código principal, usá un bucle `while` para permitir múltiples cálculos hasta que el usuario decida salir.

### Validaciones:
- Los números deben ser válidos (no `NaN`).
- El operador debe ser uno de los permitidos.
- Si hay división por cero, mostrar un error.

---

## 🧩 Ejercicio 2: "Sistema de gestión de notas"

Creá un sistema que permita gestionar las notas de un estudiante.

### Requisitos:
- Comenzá con un array vacío: `let notas = []`.
- Creá una función `agregarNota(nota)` que reciba una nota (número del 0 al 10), valide que esté en ese rango, y la agregue al array con `push()`. Retorna `true` si se agregó correctamente, `false` si no.
- Creá una función `calcularPromedio(notas)` que reciba el array de notas y devuelva el promedio (usa un `for` para sumar y luego divide por la cantidad).
- Creá una función `mostrarNotas(notas)` que recorra el array con un `for` y muestre cada nota numerada en consola.
- Creá una función `obtenerEstado(promedio)` que reciba el promedio y retorne un string:
  - Si `promedio >= 7`: `"Aprobado"`
  - Si `promedio >= 4 && promedio < 7`: `"Regular"`
  - Si `promedio < 4`: `"Reprobado"`
- En el código principal:
  - Mostrá un menú con `switch`:
    - `1) Agregar nota`
    - `2) Ver todas las notas`
    - `3) Ver promedio y estado`
    - `4) Salir`
  - Usá un bucle `while` para mantener el menú activo hasta que elijan salir.

---

## 🧩 Ejercicio 3: "Lista de compras inteligente"

Creá un sistema para gestionar una lista de compras con validaciones.

### Requisitos:
- Comenzá con un array vacío: `let listaCompras = []`.
- Creá una función `agregarItem(item)` que reciba un string (nombre del producto), valide que no esté vacío (usa `trim()` y operadores lógicos), y lo agregue al array. Retorna `true` o `false`.
- Creá una función `eliminarItem(item)` que reciba el nombre del producto, busque su índice en el array, y lo elimine con `splice()`. Si no existe, retorna `false`.
- Creá una función `buscarItem(item)` que reciba un string y use un `for` para buscar si existe en el array. Retorna `true` si existe, `false` si no.
- Creá una función `mostrarLista(lista)` que recorra el array y muestre cada item numerado.
- Creá una función `contarItems(lista)` que retorne la cantidad de elementos usando `length`.
- En el código principal, mostrá un menú con estas opciones (usando `switch` y `while`):
  - `1) Agregar producto`
  - `2) Eliminar producto`
  - `3) Buscar producto`
  - `4) Ver lista completa`
  - `5) Ver cantidad de productos`
  - `6) Salir`

---

## 🧩 Ejercicio 4: "Juego de adivinanza"

Creá un juego donde el usuario debe adivinar un número secreto.

### Requisitos:
- Creá una función `generarNumeroSecreto(min, max)` que reciba dos números y retorne un número aleatorio entre esos valores (usá `Math.random()` y `Math.floor()`).
- Creá una función `pedirIntento()` que use `prompt()` para pedir un número y lo valide.
- Creá una función `verificarIntento(intento, secreto)` que reciba el intento y el número secreto, y retorne:
  - `"Ganaste!"` si son iguales
  - `"Muy alto"` si el intento es mayor
  - `"Muy bajo"` si el intento es menor
- Creá una función `jugarPartida()` que:
  - Genere un número secreto entre 1 y 100
  - Use un bucle `while` para permitir hasta 5 intentos
  - Muestre con `alert()` si el intento es muy alto, muy bajo o si ganó
  - Si se quedó sin intentos, muestre el número secreto
- En el código principal, preguntá si quiere jugar otra vez después de cada partida.

---

## 🧩 Ejercicio 5: "Sistema de gestión de inventario"

Creá un sistema simple para gestionar productos en un inventario.

### Requisitos:
- Comenzá con estos arrays (mismo índice = mismo producto):
  ```js
  let productos = ['Laptop', 'Mouse', 'Teclado', 'Monitor'];
  let stock = [5, 20, 15, 8];
  let precios = [1200, 25, 80, 350];
  ```
- Creá una función `mostrarProductos(productos, stock, precios)` que recorra los arrays con un `for` y muestre cada producto con su stock y precio numerado.
- Creá una función `buscarProducto(nombre, productos)` que busque un producto por nombre y retorne su índice (usá `for` y `===`). Si no existe, retorna `-1`.
- Creá una función `agregarProducto(nombre, cantidad, precio, productos, stock, precios)` que agregue un nuevo producto a los tres arrays.
- Creá una función `actualizarStock(indice, cantidad, stock)` que reciba el índice del producto y la nueva cantidad, y actualice el stock en ese índice.
- Creá una función `calcularValorTotal(stock, precios)` que recorra ambos arrays y retorne el valor total del inventario (suma de stock × precio de cada producto).
- Creá una función `productosBajoStock(stock, umbral, productos)` que reciba un umbral (número mínimo) y retorne un array con los nombres de productos que tienen stock menor al umbral.
- En el código principal, creá un menú con `switch` y `while`:
  - `1) Ver todos los productos`
  - `2) Buscar producto`
  - `3) Agregar producto`
  - `4) Actualizar stock`
  - `5) Ver valor total del inventario`
  - `6) Ver productos con stock bajo`
  - `7) Salir`

---

## 🧩 Ejercicio 6: "Validador de contraseñas"

Creá un sistema que valide contraseñas según diferentes criterios.

### Requisitos:
- Creá una función `validarLongitud(password, min)` que reciba una contraseña y una longitud mínima, y retorne `true` si cumple, `false` si no.
- Creá una función `tieneMayuscula(password)` que recorra el string con un `for` y verifique si tiene al menos una letra mayúscula (usá comparaciones y operadores lógicos).
- Creá una función `tieneNumero(password)` que verifique si tiene al menos un número (usá `Number()` o comparaciones).
- Creá una función `validarPassword(password)` que reciba una contraseña y use todas las funciones anteriores para validar:
  - Longitud mínima de 8 caracteres
  - Al menos una mayúscula
  - Al menos un número
  - Retorna un objeto de resultado (pero como no vimos objetos, retorná un array: `[esValida, mensaje]`)
- Creá una función `mostrarResultado(resultado)` que reciba el resultado y muestre con `alert()` si es válida o el mensaje de error.
- En el código principal, pedí una contraseña con `prompt()` y validala. Permití hasta 3 intentos con un bucle `while`.

---

## 🧩 Ejercicio 7: "Convertidor de unidades"

Creá un sistema que convierta entre diferentes unidades de medida.

### Requisitos:
- Creá una función `convertirCelsiusAFahrenheit(celsius)` que reciba grados Celsius y retorne Fahrenheit: `(celsius * 9/5) + 32`.
- Creá una función `convertirFahrenheitACelsius(fahrenheit)` que haga la conversión inversa: `(fahrenheit - 32) * 5/9`.
- Creá una función `convertirKilometrosAMillas(km)` que convierta kilómetros a millas: `km * 0.621371`.
- Creá una función `convertirMillasAKilometros(millas)` que haga la conversión inversa.
- Creá una función `mostrarMenu()` que use `alert()` o `prompt()` para mostrar opciones:
  - `1) Celsius a Fahrenheit`
  - `2) Fahrenheit a Celsius`
  - `3) Kilómetros a Millas`
  - `4) Millas a Kilómetros`
  - `5) Salir`
- Creá una función `realizarConversion(opcion, valor)` que reciba la opción y el valor, y use `switch` para llamar a la función de conversión correspondiente.
- En el código principal, usá un bucle `while` para mantener el menú activo hasta que elijan salir. Validá que el valor ingresado sea numérico.

---

## 💡 Extra (opcional): "Sistema de reservas"

Creá un sistema simple para gestionar reservas de un restaurante.

### Requisitos:
- Comenzá con un array vacío: `let reservas = []`.
- Creá una función `generarID()` que retorne un ID único (puede ser un contador global).
- Creá una función `crearReserva(nombre, fecha, hora, personas)` que reciba estos datos, valide que todos los campos estén completos, y retorne un array con los datos: `[id, nombre, fecha, hora, personas]`.
- Creá una función `agregarReserva(reserva, reservas)` que agregue la reserva al array.
- Creá una función `eliminarReserva(id, reservas)` que busque una reserva por ID y la elimine.
- Creá una función `buscarReservaPorNombre(nombre, reservas)` que busque todas las reservas de una persona y retorne un array con los índices.
- Creá una función `mostrarReservas(reservas)` que muestre todas las reservas numeradas.
- Creá una función `contarReservasPorFecha(fecha, reservas)` que cuente cuántas reservas hay para una fecha específica.
- En el código principal, creá un menú completo con todas las opciones usando `switch` y `while`.

---

## 🧱 Entrega
1. Creá tu archivo `solucion6.js` dentro de tu rama en `clase6-funciones/`.
2. Resolvé al menos **3 ejercicios** de los propuestos (los ejercicios 1, 2 y 3 son obligatorios).
3. Commit con mensaje:
   ```
   feat: ejercicio6 - práctica de funciones
   ```
4. Push y **Pull Request** asignando a `@gonza-fl` como reviewer.

---

## 📝 Notas importantes
- Usá funciones para organizar el código.
- Validá todas las entradas del usuario.
- Usá `prompt()` y `alert()` para interactuar.
- Combiná todos los conceptos vistos: tipos de datos, variables, operadores, condicionales, bucles, arrays y funciones.
- Documentá tus funciones con comentarios explicando qué hacen.

