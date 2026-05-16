

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');


menuBtn.addEventListener('click', () => {
  navLinks.style.display =
    navLinks.style.display === 'block' ? 'none' : 'block';
});

gallery.addEventListener('click', openModal);

function openModal(e) {
    
console.log(e.target)

const img= e.target

const src = img.getAttribute('src')

const alt = img.getAttribute('alt')

const full = src.replace('sm','full')

modalImage.src = full
modalImage.alt = alt

modal.showModal()


}

closeButton.addEventListener('click', () => {
    modal.close();
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.open) {
    modal.close();
  }
});