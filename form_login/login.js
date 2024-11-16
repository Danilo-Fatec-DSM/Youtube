const users = JSON.parse(localStorage.getItem("users"));
function login() {
  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;

  for (let i = 0; i < users.length; i++) {
    if ((users[i].email == userEmail) & (users[i].password == userPassword)) {
      window.location.href = "../index.html";
    }
  }
  event.preventDefault();
}