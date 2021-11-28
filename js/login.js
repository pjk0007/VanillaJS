const loginForm = document.querySelector(".login");
const input = document.querySelector(".login input");
const user = document.querySelector(".info");
const userName = document.querySelector(".info .user_name");
const btnLogout = document.querySelector(".info button");

const HIDE_CLASS = "hide";
const USER_KEY = "user";

function paintUserName(name) {
  loginForm.classList.add("hide");
  userName.innerText = name;
  user.classList.remove("hide");
}

function paintLoginForm() {
  loginForm.classList.remove("hide");
  user.classList.add("hide");
}

function onLoginSubmit(event) {
  event.preventDefault();
  const name = input.value;
  localStorage.setItem(USER_KEY, name);
  paintUserName(name);
}

function onLogoutClick() {
  localStorage.removeItem(USER_KEY);
  input.value = "";
  paintLoginForm();
}

const savedUsername = localStorage.getItem(USER_KEY);
if (savedUsername === null) {
  paintLoginForm();
} else {
  paintUserName(savedUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);
btnLogout.addEventListener("click", onLogoutClick);
