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

/* Data Liburan card */
// Ambil data dari API
fetch('http://localhost:3000/tempat-liburan') 
.then(response => response.json())
.then(data => {
  const cardsContainer = document.getElementById('cards-container-holidayPlace');

  data.forEach(place => {
    const card = document.createElement('div');
    card.classList.add('carousel');

    const imageURL = `http://localhost:3000/images/${place.image}`;

    card.innerHTML = `
      <div class="card">
          <div class="containerImageCard">
              <img src="${imageURL}" alt="${place.location_name}" width="300px" height="220px">
              <div class="containerTextCardImage">
                  <div class="">
                      ${place.date}
                  </div>
              </div>
          </div>
          <div class="containerDescCard">
              <a href="#" class="titleCard">
                  ${place.location_name}
              </a>
              <div class="descCard">
                  ${place.description}
              </div>
              <div class="footerCard">
                  Rp. ${place.price}
              </div>
          </div>
      </div>
    `;
    
    cardsContainer.appendChild(card);
  });
})
.catch(error => {
  console.error('Terjadi kesalahan:', error);
});

/* Data Liburan card */
// Ambil data dari API
fetch('http://localhost:3000/penginapan') 
.then(response => response.json())
.then(data => {
  const cardsContainer = document.getElementById('cards-container-lodgings');

  data.forEach(place => {
    const card = document.createElement('div');
    card.classList.add('carousel');

    const imageURL = `http://localhost:3000/images/${place.image}`;

    card.innerHTML = `
      <div class="card">
          <div class="containerImageCard">
              <img src="${imageURL}" alt="${place.location_name}" width="300px" height="220px">
              <div class="containerTextCardImage">
                  <div class="">
                      ${place.date}
                  </div>
              </div>
          </div>
          <div class="containerDescCard">
              <a href="#" class="titleCard">
                  ${place.location_name}
              </a>
              <div class="descCard">
                  ${place.description}
              </div>
              <div class="footerCard">
                  Rp. ${place.price}
              </div>
          </div>
      </div>
    `;
    
    cardsContainer.appendChild(card);
  });
})
.catch(error => {
  console.error('Terjadi kesalahan:', error);
});




