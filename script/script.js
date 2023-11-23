function toggleNav() {
  var sidebar = document.getElementById("sidebar");
  var currentWidth = sidebar.style.width;

  if (currentWidth === "250px") {
    //sidebar tertutup
    sidebar.style.width = "0";
  } else {
    //sidebar terbuka
    sidebar.style.width = "250px";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbarDekstop');

  function handleScroll() {
      if (window.scrollY > 70) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
  }

  document.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbarMobile');

  function handleScroll() {
      if (window.scrollY > 70) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
  }

  document.addEventListener('scroll', handleScroll);
});

/* Carousel Script */




