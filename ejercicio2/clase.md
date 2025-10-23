const VIDA_INICIAL_POKEMON = 2000;

let pikachuVida = VIDA_INICIAL_POKEMON;
// let charmanderVida = VIDA_INICIAL_POKEMON;

if (pikachuVida <= 0) {
  console.log('Combate Finalizado');
  console.log('Pikachu queda fuera de combate');
} else {
  console.log('El combate continua');
  console.log('Turno del siguiente Pokemon');
}

console.log('Evaluar ganador');
console.log('Dar medalla al ganador');


















// Operadores de comparacion

// mayor que ">"
if(1 > 12) {
  console.log('1 es menor a 12')
} else {
  console.log('1 no es menor a 12')
}
// menor que "<"
if(1 < 12) {
  console.log('1 es menor a 12')
} else {
  console.log('1 no es menor a 12')
}
// menor o igual
if(13 <= 12) {
  console.log('El nro es menor o igual a 12')
} else {
  console.log('El nro no es menor o igual a 12')
}
// mayor o igual
if(11 >= 12) {
  console.log('El nro es mayor o igual a 12')
} else {
  console.log('El nro no es mayor o igual a 12')
}

if(12 == 12) {
  console.log('El nro es igual a 12')
} else {
  console.log('El nro no es igual a 12')
}

if(12 == '12') {
  console.log('El nro es igual a 12 str')
} else {
  console.log('El nro no es igual a 12 str')
}
// str == string
if(12 === '12') {
  console.log('El nro es igual a 12 str1')
} else {
  console.log('El nro no es igual a 12 str2')
}

// str == string

console.log('Por favor. Ingrese un nro')

let usuarioNro = 'hola soy german' // ingresado por el usuario
usuarioNro = Number(usuarioNro)
let condicion = Number.isNaN(usuarioNro)
console.log(condicion)
if(condicion) {
  console.log('El dato ingresado por el usuario es un nro')
} else {
  console.log('El dato ingresado no es un nro valido, por favor ingrese un valor numerico')
}


// let nro = Number('123242 odsaois hola mundo')
// console.log(nro)
// console.log(typeof nro)
// if(12 === nro) {
//   console.log('El nro es igual a 12 str1')
// } else {
//   console.log('El nro NO es igual a 12 str2')
// }

let edad = 29
let apellido = 'Messi'
if(edad >= 18) {
  console.log('Puede ingresar')
} else if (apellido == 'Messi') {
  console.log('Pase no mas maestro')
} else {
  console.log('Que has venido a ver como pasa la gente?')
  console.log('No puede ingresar')
}


