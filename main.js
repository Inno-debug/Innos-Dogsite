Navbaritem1 = document.querySelector(".navbar--item_1");
h1 = document.querySelector(".h1");
Navnavbar = document.querySelector(".Navnavbar");

Navbaritem1.addEventListener("mouseover", () => {
  h1.style.display = "flex";
});

Navnavbar.addEventListener("mouseleave", () => {
  h1.style.display = "none";
});
