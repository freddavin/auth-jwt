const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUpLink = document.querySelector(".signup-link");
const loginLink = document.querySelector(".login-link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

signUpLink.addEventListener("click", () => {
  container.classList.add("active");
});

loginLink.addEventListener("click", () => {
  container.classList.remove("active");
});

const login = () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPw").value;

  console.log({ email, password });

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:5500/auth/login");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({ email, password }));

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const { token } = JSON.parse(this.response);
      localStorage.setItem("token", token);
      window.location.href = "./session.html";
    }
  };
};
