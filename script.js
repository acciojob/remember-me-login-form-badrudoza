const nameInput = document.querySelector("#username");
const passInput = document.querySelector("#password");
const checkboxInput = document.querySelector("#checkbox");
const submitBtn = document.querySelector("#submit");
const exitBtn = document.querySelector("#existing");
const form = document.querySelector("#loginForm");

// Show "Login as existing user" if saved credentials exist
window.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedName && savedPass) {
    exitBtn.style.display = "block";
  } else {
    exitBtn.style.display = "none";
  }
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = nameInput.value;
  const password = passInput.value;

  alert(`Logged in as ${username}`);

  if (checkboxInput.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    exitBtn.style.display = "block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    exitBtn.style.display = "none";
  }

  nameInput.value = "";
  passInput.value = "";
  checkboxInput.checked = false;
});

// Handle login as existing user
exitBtn.addEventListener("click", () => {
  const name = localStorage.getItem("username");
  if (name) {
    alert(`Logged in as ${name}`);
  } else {
    exitBtn.style.display = "none";
  }
});
