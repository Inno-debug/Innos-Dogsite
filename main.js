//Globals
//Nav Bar
class Nav{
constructor(){
  this.Navbaritem1 = document.querySelector(".navbar--item_1");
  this.Navbaritem2 = document.querySelector(".navbar--item_2");
  this.Navbaritem3 = document.querySelector(".navbar--item_3");
  this.Navbaritem4 = document.querySelector(".navbar--item_4");
  this.Navbaritem5 = document.querySelector(".navbar--item_5");
  this.B_navbar1 = document.querySelector(".bottom--navbar1");
  this.B_navbar2 = document.querySelector(".bottom--navbar2");
  this.B_navbar3 = document.querySelector(".bottom--navbar3");
  this.B_navbar4 = document.querySelector(".bottom--navbar4");
  this.B_navbar5 = document.querySelector(".bottom--navbar5");
  this.Navbar = document.querySelector(".Navbar");
  //Mini bar 1
  this.Navbaritem1.addEventListener("mouseover", () => {
    this.B_navbar1.style.display = "flex";
    this.B_navbar2.style.display = "none";
    this.B_navbar3.style.display = "none";
    this.B_navbar4.style.display = "none";
    this.B_navbar5.style.display = "none";
  });
  
  this.Navbar.addEventListener("mouseleave", () => {
    this.B_navbar1.style.display = "none";
  });
  //Mini bar 2
  this.Navbaritem2.addEventListener("mouseover", () => {
    this.B_navbar2.style.display = "flex";
    this.B_navbar1.style.display = "none";
    this.B_navbar3.style.display = "none";
    this.B_navbar4.style.display = "none";
    this.B_navbar5.style.display = "none";
  });
  
  this.Navbar.addEventListener("mouseleave", () => {
    this.B_navbar2.style.display = "none";
  });
//Mini bar 3
  this.Navbaritem3.addEventListener("mouseover", () => {
    this.B_navbar3.style.display = "flex";
    this.B_navbar2.style.display = "none";
    this.B_navbar1.style.display = "none";
    this.B_navbar4.style.display = "none";
    this.B_navbar5.style.display = "none";
  });
  
  this.Navbar.addEventListener("mouseleave", () => {
    this.B_navbar3.style.display = "none";
  });
//Mini bar 4
  this.Navbaritem4.addEventListener("mouseover", () => {
    this.B_navbar4.style.display = "flex";
    this.B_navbar2.style.display = "none";
    this.B_navbar3.style.display = "none";
    this.B_navbar1.style.display = "none";
    this.B_navbar5.style.display = "none";
  });
  
  this.Navbar.addEventListener("mouseleave", () => {
    this.B_navbar4.style.display = "none";
  });
//Mini bar 5
  this.Navbaritem5.addEventListener("mouseover", () => {
    this.B_navbar5.style.display = "flex";
    this.B_navbar2.style.display = "none";
    this.B_navbar3.style.display = "none";
    this.B_navbar4.style.display = "none";
    this.B_navbar1.style.display = "none";
  });
  
  this.Navbar.addEventListener("mouseleave", () => {
    this.B_navbar5.style.display = "none";
  });
}
}
//Calling
new Nav();