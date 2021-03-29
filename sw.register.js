var regEmail;
var regPassword;
var vPassword;

function Register() {
  document.getElementById("registerError").innerHTML = "";
  regEmail = document.getElementById("registerEmail").value;
  regPassword = document.getElementById("registerPassword").value;
  vPassword = document.getElementById("verifyPassword").value;
  console.log(regEmail);
  console.log(regPassword);
  console.log(vPassword);
  properEmailFormat();
}

function properEmailFormat() {
  console.log("Check email format.");
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(regEmail).toLowerCase()) === true) {
    // console.log("Email format works.");
    checkPassword();
  } else {
    // console.log("Email format error.");
    document.getElementById("registerError").innerHTML =
      "Email format error. Enter proper email.";
  }
}

function checkPassword() {
  if (regPassword === vPassword) {
    checkIfEmailExists();
  } else {
    document.getElementById("registerError").innerHTML =
      "Passwords don't match...";
  }
}

function checkIfEmailExists() {
  const url = "https://evening-springs-78435.herokuapp.com/users";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResponse) {
      var userExists = 0;
      console.log("fetch");
      users = jsonResponse;
      console.log(users);
      for (let i = 0; i < users.length; i++) {
        if (users[i].reg_email === regEmail) {
          userExists = 1;
          document.getElementById("registerError").innerHTML =
            "Email already exists. Log in?";
        }
      }
      return userExists;
    })
    .then(function (userFound) {
      if (userFound === 0) {
        createUser();
      }
    });
}

function createUser() {
  var reg_email = regEmail;
  var reg_pw = regPassword;
  var reg_date = Date();
  postData("https://evening-springs-78435.herokuapp.com/register", {
    reg_email: reg_email,
    reg_pw: reg_pw,
    reg_date: reg_date,
  }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
}

async function postData(
  url = "https://evening-springs-78435.herokuapp.com/register",
  registerData = {}
) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(registerData), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
