let cervezas = ['IPA', 'APA', 'pale ale', 'Porter', 'Witbier', 'NEIPA'];
let contadorExterno = 0;
const saludo = 'hola';

nombre = 'GONZA';

mostrarArr();

cervezas.push('Pilsner');

cervezas.push('Blonde Ale');

mostrarArr();

cervezas[1] = 'REPLACED';

cervezas.slice(5, 7); // (desde, hasta) posiciones

// cervezas.splice(5,1) // (desde, cuantos) posicion y elemento

// cervezas.splice(5,1, '*') //tercer param reemplaza

mostrarArr();

cervezas.splice(4);

mostrarArr();

cervezas.push('Quilmes');

mostrarArr();

cervezas.pop();

cervezas.shift();
cervezas.unshift('NORTE');

mostrarArr();
let contadorInterno = 0;

function mostrarArr() {
  console.log('-------------------------------------------------------');
  var contadorInterno = 0;
  for (let i = 0; i < cervezas.length; i++) {
    console.log(`${i + 1} - ${cervezas[i]}`);
    console.log('cnt int', ++contadorInterno);
  }

  const saludo = 'chau';
  console.log('cnt ext', ++contadorExterno);
  console.log(saludo);
}

contadorInterno++;
contadorInterno++;
contadorInterno++;
contadorInterno++;
contadorInterno++;

console.log(contadorInterno);

let stop = false;

while (stop == false) {
  let respuesta = pedirDatos();
  console.log(respuesta);
  
  let validados = validarDatosNumericos(respuesta[0], respuesta[1]);
  console.log(validados);
  
  if (validados[1] === true) {
    alert('Error. Datos no numericos');
  } else {
    let resultado = calcular(validados[0][0], validados[0][1], respuesta[2]);
    alert(`El resultado es: ${resultado}`);
  }
  
  if (prompt('¿Desea continuar? (1 para salir, Enter para continuar)') === '1') {
    stop = true;
  }
}

function validarDatosNumericos(a, b) {
  let resultado = '';
  let error = false;
  a = Number(a.trim());
  b = Number(b.trim());
  
  if(isNaN(a) || isNaN(b)){
    error = true
  } else {
    resultado = [a, b]
  }

  return [resultado, error]
}

function calcular(n, n2, op) {
  let resultado = 0;
  switch (op) {
    case '+':
      resultado = n + n2;
      break;
    case '-':
      resultado = n - n2;
      break;
    case '*':
      resultado = n * n2;
      break;
    case '/':
      if (n2 === 0) {
        resultado = 'Error. No se puede dividir por cero';
      } else {
        resultado = n / n2;
      }
      break;
    default:
      resultado = 'Error. Operador no valido';
  }
  return resultado;
}

function pedirDatos() {
  a = prompt('Ingrese un nro');
  b = prompt('Ingrese otro nro');
  op = prompt('Ingrese la operacion: +, -, *, /');
  return [a, b, op];
}
