class login {
  constructor() {
    this.loginSubmit();
  }

  loginSubmit() {
    const loginbutton = document.querySelector(".loginButton");

    loginbutton.addEventListener("click", () => {
      const username = document.querySelector(".username").value;
      const password = document.querySelector(".password").value;

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    });
  }
}

new login();
