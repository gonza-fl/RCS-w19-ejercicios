/*
*Ejercicio 3: "Lista de compras inteligente"
TODO Creá un sistema para gestionar una lista de compras con validaciones.

Requisitos:
Comenzá con un array vacío: let listaCompras = [].
Creá una función agregarItem(item) que reciba un string (nombre del producto), valide que no esté vacío (usa trim() y operadores lógicos), y lo agregue al array. Retorna true o false.
Creá una función eliminarItem(item) que reciba el nombre del producto, busque su índice en el array, y lo elimine con splice(). Si no existe, retorna false.
Creá una función buscarItem(item) que reciba un string y use un for para buscar si existe en el array. Retorna true si existe, false si no.
Creá una función mostrarLista(lista) que recorra el array y muestre cada item numerado.
Creá una función contarItems(lista) que retorne la cantidad de elementos usando length.
En el código principal, mostrá un menú con estas opciones (usando switch y while):
1) Agregar producto
2) Eliminar producto
3) Buscar producto
4) Ver lista completa
5) Ver cantidad de productos
6) Salir
*/

let listaCompras= []

//* Agrega un item al array si no está vacío después de trim.
function agregarItem(item) {
  let trimmed = item.trim();
  if (trimmed !== "") {
    listaCompras.push(trimmed);
    return true;
  }
  return false;
}

//* Busca y elimina el item por nombre usando splice; retorna false si no existe.
function eliminarItem(item) {
  let index = listaCompras.indexOf(item);
  if (index !== -1) {
    listaCompras.splice(index, 1);
    return true;
  }
  return false;
}

//* Busca el item en el array con for; retorna true si existe.
function buscarItem(item) {
  for (let i = 0; i < listaCompras.length; i++) {
    if (listaCompras[i] === item) return true;
  }
  return false;
}

//* Muestra cada item numerado en consola.
function mostrarLista(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(`${i + 1}: ${lista[i]}`);
  }
}

//* Retorna la cantidad de items usando length.
function contarItems(lista) {
  return lista.length;
}

while (true) {
  let opcion = prompt("Menú:\n1) Agregar producto\n2) Eliminar producto\n3) Buscar producto\n4) Ver lista completa\n5) Ver cantidad de productos\n6) Salir");
  switch (opcion) {
    case "1":
      let itemAdd = prompt("Ingresa producto");
      if (agregarItem(itemAdd)) alert("Agregado"); else alert("Inválido");
      break;
    case "2":
      let itemDel = prompt("Ingresa producto a eliminar");
      if (eliminarItem(itemDel)) alert("Eliminado"); else alert("No encontrado");
      break;
    case "3":
      let itemBus = prompt("Ingresa producto a buscar");
      alert(buscarItem(itemBus) ? "Existe" : "No existe");
      break;
    case "4":
      mostrarLista(listaCompras);
      break;
    case "5":
      alert(`Cantidad: ${contarItems(listaCompras)}`);
      break;
    case "6":
      break;
    default:
      alert("Opción inválida");
  }
  if (opcion === "6") break;
}
