// Uncomment if using jQuery
// $(document).ready(function(){  });

// Ignore ES6 lint issues
/*jshint esnext: true */


// Open Menu

const overlay = document.querySelector('#overlay');
const menuOpen = document.querySelector('#top-nav');
const overlayClose = document.querySelector('#overlay-close');

menuOpen.addEventListener('click', () => {
  overlay.classList.add('open');
  return false;
});

overlayClose.addEventListener('click', () => {
  overlay.classList.remove('open');
  return false;
});

// Open Showreel Overlay

const showreelButton = document.querySelector('#overlay');

menuOpen.addEventListener('click', () => {
  overlay.classList.add('open');
  overlay.classList.add('open');
  return false;
});