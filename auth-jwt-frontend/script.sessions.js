var username = localStorage.getItem("username");
var email = localStorage.getItem("email");

document.getElementById("userName").innerHTML = username;
document.getElementById("userEmail").innerHTML = email;

localStorage.removeItem("username");
localStorage.removeItem("email");
