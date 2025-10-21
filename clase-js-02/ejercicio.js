//* Control de acceso del club Rolling Code

let nombre = "Luciano";
let edad = 17;
let tieneDNI = true;

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
  } else {
    console.log(`${nombre} tiene ${edad} años. Acceso denegado 🚫`);
  }
}
