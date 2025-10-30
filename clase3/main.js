let nombre = '             Gonzalo'
let apellido = 'Flamenci                 '

let edad = 29

console.log(nombre)
console.log(edad)

console.log(typeof nombre)
console.log(typeof edad)

console.log(!!nombre)
console.log(!!edad)
console.log(Number(edad));

if (Number.isNaN(Number(edad))) {
  console.log('Es NaN')
}

console.log(nombre.trim())

if (!nombre.trim())
  console.log('El nombre esta vacio')
else
  console.log('El nombre NO esta vacio')


let personaLuciano = {
  nombre: 'Luciano',
  apellido: 'Caro',
  edad: 24
};

let persona = {
  nombre: 'Luciano',
  apellido: 'Caro',
  edad: 24
};

console.log(persona)

persona.nombre = nombre.trim()
persona.edad = edad
persona.apellido = apellido.trim()

persona.teconologia = prompt('Ingrese su tecnologia')

console.log(persona.teconologia)

