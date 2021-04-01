function showPage(page) {
  hideAllPages();
  document.getElementById(page).style.display = "block";
}

function hideAllPages() {
  document.getElementById("loadScreen").style.display = "none";
  document.getElementById("registerScreen").style.display = "none";
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("helpScreen").style.display = "none";
  document.getElementById("resetScreen").style.display = "none";
  document.getElementById("bangleScreen").style.display = "none";
  document.getElementById("sideBarScreen").style.display = "none";
  document.getElementById("aboutScreen").style.display = "none";
  document.getElementById("contactScreen").style.display = "none";
  document.getElementById("createMatchScreen").style.display = "none";
  document.getElementById("tournamentScreen").style.display = "none";
}

var closeBar = "true";
function closeSideBar() {
  if (closeBar === "true") {
    console.log("close");
    document.getElementById("sideBarScreen").style.display = "block";
    closeBar = "false";
  } else {
    console.log("open");
    document.getElementById("sideBarScreen").style.display = "none";
    closeBar = "true";
  }
}
