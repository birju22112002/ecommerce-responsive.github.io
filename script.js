/** @format */

const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,
});

document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.querySelector('.header-list').classList.toggle('active');
  });
