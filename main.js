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
  constructor() {
    this.registerLogin();
    this.register();
  }
  register() {
    const form = document.querySelector(".registerform");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let user = localStorage.getItem("user");
      user = user ? parseInt(user) : 0;
      if (user === 0) {
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        ++user;
        localStorage.setItem("user", user);
      } else if (user === 1) {
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");
        localStorage.setItem("username1", username);
        localStorage.setItem("password1", password);
        ++user;
        localStorage.setItem("user", user);
      } else if (user === 2) {
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");
        localStorage.setItem("username2", username);
        localStorage.setItem("password2", password);
        ++user;
        localStorage.setItem("user", user);
      } else if (user === 3) {
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");
        localStorage.setItem("username3", username);
        localStorage.setItem("password3", password);
        ++user;
        localStorage.setItem("user", user);
      } else if (user === 4) {
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");
        localStorage.setItem("username4", username);
        localStorage.setItem("password4", password);
        ++user;
        localStorage.setItem("user", user);
      } else if (user === 5) {
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");
        localStorage.setItem("username5", username);
        localStorage.setItem("password5", password);
        ++user;
        localStorage.setItem("user", user);
      } else if (user === 6) {
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");
        localStorage.setItem("username6", username);
        localStorage.setItem("password6", password);
        ++user;
        localStorage.setItem("user", user);
      } else if (user === 7) {
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");
        localStorage.setItem("username7", username);
        localStorage.setItem("password7", password);
        ++user;
        localStorage.setItem("user", user);
      } else if (user === 8) {
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");
        localStorage.setItem("username8", username);
        localStorage.setItem("password8", password);
        ++user;
        localStorage.setItem("user", user);
      } else if (user === 9) {
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");
        localStorage.setItem("username9", username);
        localStorage.setItem("password9", password);
        ++user;
        localStorage.setItem("user", user);
      } else if (user === 10) {
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");
        localStorage.setItem("username10", username);
        localStorage.setItem("password10", password);
        ++user;
        localStorage.setItem("user", user);
      } else if (user === 11) {
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");
        localStorage.setItem("username11", username);
        localStorage.setItem("password11", password);
        ++user;
        localStorage.setItem("user", user);
      }
    });
  }
  registerLogin() {
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
    this.loginRegister();
  }
  loginRegister() {
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
