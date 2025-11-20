const gallery = document.createElement('section')
gallery.classList='container d-flex gap-2 flex-wrap'

const limitSelect = document.getElementById('limitSelect');

limitSelect.onchange = function () {
  limit = limitSelect.value
  renderGallery(limit)
}

document.addEventListener('DOMContentLoaded', () => {
  //Obtener el body
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(gallery);
  renderGallery(limitSelect.value);
})

function renderGallery (limit) {
  gallery.innerHTML = '';
  const img = document.createElement('img');
  img.classList = 'col-3';
  img.style.maxWidth = '20%';
  let counter = 1;
  const galleryFragment = new DocumentFragment()
    do {
      img.src = `https://picsum.photos/id/${counter}/200/300`;
      galleryFragment.appendChild(img.cloneNode(true));
      counter++;
    } while (counter <= limit);
    gallery.appendChild(galleryFragment);
}
