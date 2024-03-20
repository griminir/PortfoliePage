//dark - light mode
const enableDarkMode = () => {
  darkModeEnabled = true;
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkModeEnabled', 'true');
};

const disableDarkMode = () => {
  darkModeEnabled = false;
  document.body.classList.remove('dark-mode');
  localStorage.setItem(('darkModeEnabled', 'false'));
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
