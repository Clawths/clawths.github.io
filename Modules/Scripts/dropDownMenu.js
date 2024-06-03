document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menu-icon");
    var dropdownMenu = document.getElementById("dropdown-menu");

    menuIcon.addEventListener("click", function() {
      dropdownMenu.classList.toggle("show");
    });

    // Close dropdown menu when clicking outside of it
    document.addEventListener("click", function(event) {
      if (!dropdownMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        dropdownMenu.classList.remove("show");
      }
    });
  });