const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

/* ---------- ON PAGE LOAD ---------- */
window.onload = function () {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingBtn.style.display = "block";
    }
};

/* ---------- FORM SUBMIT ---------- */
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingBtn.style.display = "block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
    }

    // Clear fields after submit
    usernameInput.value = "";
    passwordInput.value = "";
    checkbox.checked = false;
});

/* ---------- EXISTING USER LOGIN ---------- */
existingBtn.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");
    alert(`Logged in as ${savedUsername}`);
});
