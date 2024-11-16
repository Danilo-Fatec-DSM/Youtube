function getUserData() {
  const email = document.getElementById("userEmail").value;
  const password = document.getElementById("userPassword").value;

  const user = {
    email: email,
    password: password,
  };

  return user;
}

function createAccount() {
  const user = getUserData();
  let users = JSON.parse(localStorage.getItem("users"));

  if (users == null) {
    users = [];
  }

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));
  window.location.replace("../form_login/login.html");
  event.preventDefault();
}
