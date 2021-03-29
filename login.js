var users = [];
var userName;
var userPassword;

var currentUser;

function logIn() {
  getUserInput();
}
function getUserInput() {
  userName = document.getElementById("logInEmail").value;
  userPassword = document.getElementById("logInPassword").value;
  console.log(userName);
  console.log(userPassword);
  getUsers();
}

function getUsers() {
  const url = "https://evening-springs-78435.herokuapp.com/users";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResponse) {
      console.log("fetch");
      users = jsonResponse;
      console.log(users);
      checLogInCreds(userName, userPassword, users);
    });
}

function checLogInCreds(inputUsername, inputPassword, users) {
  var arrayLength = users.length;
  var userfound = 0;
  console.log("checking user credentials...");
  for (let i = 0; i < arrayLength; i++) {
    if (users[i].username === inputUsername) {
      userfound = 1;
      console.log(users[i].username);
      if (users[i].password === inputPassword) {
        currentUser = inputUsername;
        console.log("user found");
        console.log(currentUser);
        showPage("homeScreen");
        document.getElementById("sidebarUserName").innerHTML = currentUser;
      } else {
        document.getElementById("logInError").innerHTML = "Incorrect password.";
      }
      break;
    } else {
      document.getElementById("logInError").innerHTML = "User not found.";
    }
  }
}
