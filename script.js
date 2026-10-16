const modal = document.querySelector('.modal');
const openers = document.querySelectorAll('.js-open-enquiry');
const closeButton = document.querySelector('.modal-close');
const backdrop = document.querySelector('.modal-backdrop');
const form = document.querySelector('#enquiry-form');
const status = document.querySelector('.form-status');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');

function openModal() {
  modal.hidden = false;
  document.body.classList.add('modal-open');
  setTimeout(() => modal.querySelector('input')?.focus(), 50);
}
function closeModal() {
  modal.hidden = true;
  status.textContent = '';
}
openers.forEach((button) => button.addEventListener('click', openModal));
closeButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  status.textContent = `Thanks, ${name}! Your enquiry is ready for our team. We’ll be in touch shortly.`;
  form.reset();
});

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  nav.style.display = isOpen ? '' : 'flex';
  nav.style.position = isOpen ? '' : 'absolute';
  nav.style.top = isOpen ? '' : '70px';
  nav.style.right = isOpen ? '' : '16px';
  nav.style.flexDirection = isOpen ? '' : 'column';
  nav.style.background = isOpen ? '' : '#fffdf8';
  nav.style.padding = isOpen ? '' : '20px';
  nav.style.borderRadius = isOpen ? '' : '16px';
  nav.style.boxShadow = isOpen ? '' : '0 12px 30px #17223820';
});

document.querySelectorAll('.desktop-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 800) {
      menuToggle.click();
    }
  });
});
