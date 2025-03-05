//Globals
//Nav Bar
class Nav {
  constructor() {
    this.Navbaritem1();
    this.Navbaritem2();
    this.Navbaritem3();
    this.Navbaritem4();
    this.Navbaritem5();
  }
  //Navbar item 1
  Navbaritem1() {
    const navbaritem1 = document.querySelector(".navbar--item_1");

    navbaritem1.addEventListener("mouseover", () => {
      navbaritem1.style.filter = "var(--hover-textopacity)";
      navbaritem1.style.cursor = "pointer";
    });
    navbaritem1.addEventListener("mouseout", () => {
      navbaritem1.style.filter = "var(--nohover-textopacity)";
      navbaritem1.style.cursor = "default";
    });
  }
  //Navbar item 2
  Navbaritem2() {
    const navbaritem2 = document.querySelector(".navbar--item_2");

    navbaritem2.addEventListener("mouseover", () => {
      navbaritem2.style.filter = "var(--hover-textopacity)";
      navbaritem2.style.cursor = "pointer";
    });
    navbaritem2.addEventListener("mouseout", () => {
      navbaritem2.style.filter = "var(--nohover-textopacity)";
      navbaritem2.style.cursor = "default";
    });
  }
  //Navbar item 3
  Navbaritem3() {
    const navbaritem3 = document.querySelector(".navbar--item_3");

    navbaritem3.addEventListener("mouseover", () => {
      navbaritem3.style.filter = "var(--hover-textopacity)";
      navbaritem3.style.cursor = "pointer";
    });
    navbaritem3.addEventListener("mouseout", () => {
      navbaritem3.style.filter = "var(--nohover-textopacity)";
      navbaritem3.style.cursor = "default";
    });
  }
  //Navbar item 4
  Navbaritem4() {
    const navbaritem4 = document.querySelector(".navbar--item_4");

    navbaritem4.addEventListener("mouseover", () => {
      navbaritem4.style.filter = "var(--hover-textopacity)";
      navbaritem4.style.cursor = "pointer";
    });
    navbaritem4.addEventListener("mouseout", () => {
      navbaritem4.style.filter = "var(--nohover-textopacity)";
      navbaritem4.style.cursor = "default";
    });
  }
  //Navbar item 5
  Navbaritem5() {
    const navbaritem5 = document.querySelector(".navbar--item_5");

    navbaritem5.addEventListener("mouseover", () => {
      navbaritem5.style.filter = "var(--hover-textopacity)";
      navbaritem5.style.cursor = "pointer";
    });
    navbaritem5.addEventListener("mouseout", () => {
      navbaritem5.style.filter = "var(--nohover-textopacity)";
      navbaritem5.style.cursor = "default";
    });
  }
}
//Calling
new Nav();
