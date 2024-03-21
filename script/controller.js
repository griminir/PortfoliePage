//dark - light mode
let darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

const enableDarkMode = () => {
  darkModeEnabled = true;
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkModeEnabled', 'true');
};

const disableDarkMode = () => {
  darkModeEnabled = false;
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkModeEnabled', 'false');
};

document.addEventListener('DOMContentLoaded', () => {
  darkModeButton.checked = darkModeEnabled;
  document.body.classList.toggle('dark-mode', darkModeEnabled);
});

darkModeButton.addEventListener('change', () => {
  if (darkModeButton.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

//menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

//multiple text
const typed = new Typed('.multiple', {
  strings: ['a programmer', 'an avid learner', 'and a gamer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 500,
  loop: true,
});

//Header Shadow on scroll effect

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
});

//scroll section active link
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      document
        .querySelector('header nav ul li a[href="#' + id + '"]')
        .classList.add('active');
    }
  });
};
