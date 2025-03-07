class initialScreen {
  constructor() {
    this.initialLogin();
    this.initialRegister();
  }

  initialLogin() {
    const loginButton = document.querySelector(".login_initial_screen");
    const initialScreen = document.querySelector(".initial-screen");
    const loginScreen = document.querySelector(".login-container");

    loginButton.addEventListener("click", () => {
      initialScreen.style.display = "none";
      loginScreen.style.display = "unset";
    });
  }
  initialRegister() {
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
  constructor() {}
}
class loginScreen {
  constructor() {}
}
new initialScreen();
new register();
new login();
