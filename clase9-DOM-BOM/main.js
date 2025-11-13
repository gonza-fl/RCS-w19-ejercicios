// function success(pos) {
//   console.log('Your current position is:');
//   console.log(`Latitude : ${pos.coords.latitude}`);
//   console.log(`Longitude: ${pos.coords.longitude}`);
//   console.log(`More or less ${pos.coords.accuracy} meters.`);
// }

// window.navigator.geolocation.getCurrentPosition(success);

const segundoP = document.getElementsByTagName('p')[1];

document.body.appendChild(segundoP.cloneNode(false))
document.body.appendChild(document.createElement('p'))
document.body.appendChild(segundoP.cloneNode(true))

document.body.insertBefore(
  document.createTextNode('boo!'),
  document.body.getElementsByTagName('p')[1]
)

const btn = document.createElement('button')

document.body.appendChild(btn);

btn.textContent = 'Click'

setTimeout(()=> {
  const res = confirm('Eliminar btn?')
  let ref = null
  if (res) {
    document.body.appendChild(segundoP);
    ref = document.body.removeChild(btn)
    document.body.replaceChild(ref, document.body.lastChild);
  }
  
}, 3000)
