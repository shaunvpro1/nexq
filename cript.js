
/* =========================================
   NXQ — WEBSITE FUNCTIONALITY
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  // MOBILE NAVIGATION
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav");

  if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

      const isOpen = navigation.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.innerHTML = isOpen ? "✕" : "☰";

    });

    // Close menu after selecting a navigation link
    navigation.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        navigation.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.innerHTML = "☰";

      });

    });

  }

  // AUTOMATIC COPYRIGHT YEAR
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
