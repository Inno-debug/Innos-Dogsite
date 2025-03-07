class initialScreen {
  constructor() {
    this.initialLogin_Button();
    this.initialRegister_Button();
  }

  initialLogin_Button() {
    const loginButton = document.querySelector(".login_initial_screen");
    const initialScreen = document.querySelector(".initial-screen");
    const loginScreen = document.querySelector(".login-container");

    loginButton.addEventListener("click", () => {
      initialScreen.style.display = "none";
      loginScreen.style.display = "unset";
    });
  }
  initialRegister_Button() {
    const registerButton = document.querySelector(".register_initial_screen");
    const initialScreen = document.querySelector(".initial-screen");
    const registerScreen = document.querySelector(".register-container");

    registerButton.addEventListener("click", () => {
      initialScreen.style.display = "none";
      registerScreen.style.display = "unset";
    });
  }
}

class registerScreen {
  constructor() {
    this.registerLogin_Button();
    this.register();
  }
  register() {
    const form = document.querySelector(".registerform");
    const registerScreen = document.querySelector(".register-container");
    const loginScreen = document.querySelector(".login-container");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const username = formData.get("username");
      const password = formData.get("password");
      let formArray = localStorage.getItem("formArray");
      formArray = formArray ? JSON.parse(formArray) : [];
      formArray.push({ username, password });
      localStorage.setItem("formArray", JSON.stringify(formArray));
      registerScreen.style.display = "none";
      loginScreen.style.display = "unset";
    });
  }
  registerLogin_Button() {
    const loginButton = document.querySelector(".backloginButton");
    const registerScreen = document.querySelector(".register-container");
    const loginScreen = document.querySelector(".login-container");

    loginButton.addEventListener("click", () => {
      registerScreen.style.display = "none";
      loginScreen.style.display = "unset";
    });
  }
}
class loginScreen {
  constructor() {
    this.loginRegister_Button();
    this.login();
  }
  login() {
    const form = document.querySelector(".loginform");
    const welcomeScreen = document.querySelector(".home-screen");
    const loginScreen = document.querySelector(".login-container");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const username = formData.get("username");
      const password = formData.get("password");
      let formArray = localStorage.getItem("formArray");
      formArray = JSON.parse(formArray);
      const formarrayLength = formArray.length;
      for (let i = 0; i < formarrayLength; i++) {
        const storedusername = formArray[i].username;
        const storedpassword = formArray[i].password;
        if (storedusername === username && storedpassword === password) {
          loginScreen.style.display = "none";
          welcomeScreen.style.display = "unset";
        }
      }
    });
  }
  loginRegister_Button() {
    const registerButton = document.querySelector(".backregisterButton");
    const registerScreen = document.querySelector(".register-container");
    const loginScreen = document.querySelector(".login-container");

    registerButton.addEventListener("click", () => {
      registerScreen.style.display = "unset";
      loginScreen.style.display = "none";
    });
  }
}
new initialScreen();
new registerScreen();
new loginScreen();
