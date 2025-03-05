//Globals
//Nav Bar
class Navbar{

Navbaritem1 = document.querySelector(".navbar--item_1");
h1 = document.querySelector(".bottom--navbar");
Navnavbar = document.querySelector(".Navbar");

this.Navbaritem1.addEventListener("mouseover", () => {
  h1.style.display = "flex";
});

Navnavbar.addEventListener("mouseleave", () => {
  h1.style.display = "none";
});
}
//Calling
