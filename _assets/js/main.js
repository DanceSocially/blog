document.addEventListener('DOMContentLoaded', function() {
  var HEADER_HEIGHT = 256;
  var FIXED_CLASS = 'js-fixed-header';
  var lastScrollY = window.scrollY;

  if (lastScrollY > HEADER_HEIGHT) {
    document.body.className += ' ' + FIXED_CLASS;
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY <= HEADER_HEIGHT && lastScrollY > HEADER_HEIGHT) {
      document.body.className = document.body.className.replace(FIXED_CLASS, '');
    } else if (window.scrollY > HEADER_HEIGHT && lastScrollY <= HEADER_HEIGHT) {
      document.body.className += ' ' + FIXED_CLASS;
    }
    lastScrollY = window.scrollY;
  });

  var OPENED_MENU_CLASS = 'js-opened-main-menu';
  document.getElementById('js-menu-icon').addEventListener('click', function() {
    document.body.className += ' ' + OPENED_MENU_CLASS;
  });
  document.getElementById('js-offset-overlay').addEventListener('click', function() {
    document.body.className = document.body.className.replace(OPENED_MENU_CLASS, '');
  });
});
