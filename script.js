const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const form = document.getElementById("login-form");
const existingBtn = document.getElementById("existing");

/* ---------- INITIAL STATE ---------- */
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
  existingBtn.style.display = "inline-block";
} else {
  existingBtn.style.display = "none";
}

/* ---------- FORM SUBMISSION ---------- */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "inline-block";
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }
});

/* ---------- EXISTING USER LOGIN ---------- */
existingBtn.addEventListener("click", function () {
  const storedUsername = localStorage.getItem("username");
  alert(`Logged in as ${storedUsername}`);
});
