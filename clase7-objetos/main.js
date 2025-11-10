let pokemon = {
  altura: '',
  peso: '',
  color: '',
  especie: '',
  evoluciones: [],
  poderes: [],
  debilidades: '',
  naturaleza: '',
  genero: '',
}

let pikachu = {
  color: 'amarillo',
  especie: 'roedor',
  naturaleza: 'electrico',
  genero: 'hembra',
}

// Recorrer objeto
// for (const prop in pikachu) {
//   if(prop === 'error') {
//     console.log('Ups... Ocurrio un error');
//   } else {
//     console.log(`${prop}: ${pikachu[prop]}`);
//   }
// }

let products = [
  { id: 1, name: 'Leche', price: 120, categories: ['familiar', 'comida'] },
  { id: 2, name: 'Arroz', price: 80, categories: ['familiar', 'comida'] },
  { id: 3, name: 'Lavadora', price: 7800, categories: ['electrodomésticos'] },
];

// for (var i = 0; i < products.length; i++) {
//   var product = products[i];
//   console.log(product.name);
//   console.log('  Id: ' + product.id);
//   console.log('  Precio: ' + product.price);
//   console.log('  Categorías: ' + product.categories.join(', '));
// }

// Función constructora de objetos
function Auto(color, marca, modelo, anio) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

var auto1 = new Auto("rojo", "fiat", "bravo", 2008);
console.log(auto1.color);
var auto2 = new Auto("blanco", "renault", "sdaf", 2025);
console.log(auto2.color);
