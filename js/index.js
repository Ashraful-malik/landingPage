// hamburger
function myFunction() {
  const humBurgerMenu = document.getElementById("imgClickAndChange");
  const navLink = document.getElementById("hideShow");
  if (navLink.style.display === "none") {
    humBurgerMenu.src = "images/icon-close.svg";
    navLink.style.display = "block";
  } else {
    navLink.style.display = "none";
    humBurgerMenu.src = "images/icon-hamburger.svg";
  }
}
