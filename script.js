/** @format */

const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,
});

document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    const headerList = document.querySelector(".header-list");
    headerList.style.display =
      headerList.style.display === "flex" ? "none" : "flex";
  });
