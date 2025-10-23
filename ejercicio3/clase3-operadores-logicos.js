// Operadores lógicos

// El Y y el O

/**
 * 
 * Anda al super
 * 
 * trae salame y queso
 * 
 * jabon para la ropa liquido o en polvo
 * 
 * 
 * 
 * 
 * 
 * 
 * Si aprendo php Y javscript:
 * - Puedo postular para empresa A
 * 
 * Si aprendo php O javascript:
 * - Puedo postular a empresa B
 * 
 * 
 * 
 */


// Y/AND -> && (se deben cumplir todas condiciones)

// O/OR -> || (se debe cumplir una de las condiciones)


let personaNombre = 'Gerardo'
let personaApellido = 'Perez'
let personaComision = 'w-19'
let personaTecnologia = 'JavaScript'
let personaEdad = 20
let personaConCuentaActiva = false
let personaCuentaBan = false

if (personaNombre === '' && personaApellido === '') {
  console.log('Persona no está logeada en el sistema');
} else if (personaConCuentaActiva || personaCuentaBan) {
  console.log('Logeado correctamente pero sin acceso al sistema');
} else {
  console.log('Bienvenido al sistema')
}

if (personaApellido === 'Messi' || personaApellido === 'De Paul' || personaApellido === 'Scaloni') {
  console.log('Puede ingresar. Campeon!')
}

if(!(personaEdad === 18) && (personaApellido > 18)) {
  console.log('Puede ingresar.');
}

//... continuo

