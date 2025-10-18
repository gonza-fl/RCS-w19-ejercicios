# CLASE JS - OPERADORES Y TIPOS DE DATOS

##Tipos de datos
*
* Tipado dinámico: pueden en tiempos de
* ejecución.
* Es decir, que los puedo una variable que
* tenia un tipo de dato string a otro por
* ejemplo entero
*
**/

// Cadena de caracteres (string)
// Todo entre comillas es string
let string = "Esto es un string"
let nombre = 'gonzalo'
let edad = `15`

// Enteros (number)
let entero = 10 // 0.15, -55, 3.14

// Booleanos (boolean)
let verdadero = true
let falso = false

'falso: ' + falso
falso = verdadero
'falso: ' + falso

let indefinida

console.log(indefinida)

let nulo = null
'nulo: ' + nulo
nulo = undefined

'nulo: ' + nulo

console.log(nulo)

typeof verdadero
typeof nombre
typeof edad

typeof indefinida
typeof nulo
typeof null

typeof entero

// Constantes: const

const ESTO_ES_UN_VALOR_CONSTANTE = "Esto es un valor constante"
const IVA = 21
const PI = 3.14

'PI: ' + PI

// PI = 1 !No se puede reasignar

'Continua ejecución'
'HERE'

// Estructuras o colecciones de datos
let alumnos = ['Alexis', 'Miguel', 'Francisco']
console.log(alumnos[0])
typeof alumnos

let persona = {
  nombre: 'gonzalo',
  edad: 29,
  dni: '423123410',
  user_active: true,
  es_profe: true,
  roles: ['profe', 'empleado', 'dev']
}

persona['nombre']
persona['roles']
persona.nombre














//Operadores


// Asignación

let edad2 = 29
edad2
edad2 = 30

edad2 += 1
edad2 -= 2
edad2 /= 2
edad2 *= 5

// Aritmeticos

let suma = 10 + 32

suma

let resta = 20 - 32

resta

let multiplicacion = 20 * 12

multiplicacion

let division = 145 / 7

division

let resto = 145 % 7

resto



