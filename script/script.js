/* Set the width of the sidebar to 250px (show it) */
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