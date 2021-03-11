var start = "false";
var score1 = 0;
var score2 = 0;
var team1server = 0;
var team2server = 0;
var log = [];

///////////
//ON LOAD//
///////////
g.clear(reset).setFont("6x8");
g.setFont("Vector", 15).setFontAlign(0, 0);
g.drawString("Pickleball", 130, 90);

g.setFont("Vector", 20).setFontAlign(0, 0);
g.drawString("Score Keeper!", 130, 130);

/////////
//BTN 1//
/////////
setWatch(
  () => {
    pressBtn1();
  },
  BTN1,
  { repeat: true }
);

function pressBtn1() {
  if ((team1server === 0) & (team2server === 0)) {
    setServer();
  }
  if (team1server === 1 || team2server === 1) {
    if (start === "false") {
      startGame();
    }
  }
  if ((start = "true")) {
    countPoint();
    logRecord();
  }
}

function setServer() {
  g.clear(reset);
  g.setFont("Vector", 20).setFontAlign(0, 0);
  g.drawString("SetServer", 130, 90);
}

function startGame() {
  g.clear(reset);
  g.setFont("Vector", 20).setFontAlign(0, 0);
  g.drawString("Started", 130, 90);
}

function countPoint() {
  g.clear(reset);
  g.setFont("Vector", 20).setFontAlign(0, 0);
  g.drawString("CountPoint and Logged!", 130, 90);
}

function logRecord() {
  g.clear(reset);
  g.setFont("Vector", 20).setFontAlign(0, 0);
  g.drawString("CountPoint and Logged!", 130, 90);
}

// if (start === "false") {
//   start = "true";
//   score1 = 0;
//   score2 = 0;
//   g.clear(reset);
//   g.setFont("Vector", 40).setFontAlign(0, 0);
//   g.drawString("Started!", 130, 90);
//   g.drawString(score1 + ":" + score2, 130, 130);
//   Bangle.buzz();
// } else {
//   score1 = score1 + 1;
//   g.clear(reset);
//   g.setFont("Vector", 40).setFontAlign(0, 0);
//   g.drawString("Team 1 Pt!", 130, 90);
//   g.drawString(score1 + ":" + score2, 130, 130);
//   Bangle.buzz();
// }

/////////
//BTN 2//
/////////
setWatch(
  () => {
    pressBtn2();
  },
  BTN2,
  { repeat: true }
);

function pressBtn2() {
  if ((start = "true")) {
    score2 = score2 + 1;
    g.clear(reset);
    g.setFont("Vector", 40).setFontAlign(0, 0);
    g.drawString("Team 2 Pt!", 130, 90);
    g.drawString(score1 + ":" + score2, 130, 130);
    Bangle.buzz();
  }
}

/////////
//BTN 3//
/////////
setWatch(
  () => {
    pressBtn3();
  },
  BTN3,
  { repeat: true }
);

function pressBtn3() {
  if ((start = "true")) {
    score1 = 0;
    score2 = 0;
    start = "false";
    g.clear(reset);
    g.setFont("Vector", 40).setFontAlign(0, 0);
    g.drawString("Game Over!", 130, 90);
    g.drawString(score1 + ":" + score2, 130, 130);
    Bangle.buzz();
  }
}

//LOAD APP
Bangle.loadWidgets();
Bangle.drawWidgets();
