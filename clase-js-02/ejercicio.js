//* Control de acceso del club Rolling Code

let nombre = "Luciano";
let edad = 2;
let tieneDNI = true;
//* Datos Usuario 1
let nombreUsuario1 = prompt("Ingrese su nombre Usuario 1")
let edadUsuario1 = prompt("Ingrese su edad Usuario 1")
//* Datos Usuario 2
let nombreUsuario2 = prompt("Ingrese su nombre Usuario 2")
let edadUsuario2 = prompt("Ingrese su edad Usuario 2")

if (nombre === "Messi") {
  console.log("Bienvenido, GOAT. 🟢");
} else if (nombre === "RollingBot") {
  console.log("Acceso denegado: solo humanos. ⚙️");
} else {
  if (edad > 18) {
    console.log(`${nombre} tiene ${edad} años. Acceso permitido✅`);
  } else if (edad === 18) {
    if (tieneDNI) {
      console.log(`${nombre} tiene ${edad} años. Acceso permitido con DNI  🪪 `);
    } else {
      console.log(`${nombre} tiene ${edad} años. Acceso denegado 🚫`);
    }
  } else if (edad < 18) {
    console.log(`${nombre} tiene ${edad} años. Acceso denegado 🚫`);
  }
}

if (edadUsuario1 > edadUsuario2) {
  alert(`${nombreUsuario1} es mayor que ${nombreUsuario2}`);
  console.log(`${nombreUsuario1} es mayor que ${nombreUsuario2}`);
}else if (edadUsuario1 < edadUsuario2){
  alert(`${nombreUsuario1} es menor que ${nombreUsuario2}`);
  console.log(`${nombreUsuario1} es menor que ${nombreUsuario2}`);
}else {
  alert(`${nombreUsuario1} tienes la misma edad que ${nombreUsuario2}`);
  console.log(`${nombreUsuario1} tienes la misma edad que ${nombreUsuario2}`);
}