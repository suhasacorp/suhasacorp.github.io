document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

document.querySelectorAll('[data-placeholder="true"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    alert('Replace this placeholder with the real project, LinkedIn, booking, or case-study URL.');
  });
});
