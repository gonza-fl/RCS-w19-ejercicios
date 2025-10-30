let loading = 5;

console.log('preparando archivo...');

while (loading >= 0) {
  console.log('uploading...', loading);
  loading = loading - 1;
}

console.log('fin');

let estacion = null;

while (estacion == null) {
  estacion = prompt('Ingrese una estación del año');
  estacion = estacion.toLowerCase();
  estacion = estacion.trim();
  console.log(estacion);
  switch (estacion) {
    case null:
      break;
    case 'primavera':
    case 'verano':
    case 'otoño':
    case 'invierno':
      break;
    default:
      alert(estacion + ' ' + 'No es una estación del año válida');
      estacion = null;
  }
}

alert('Su estación elegida es: ' + estacion);
