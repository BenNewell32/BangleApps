var start = "false";
var score1 = 0;
var score2 = 0;
var setServerVar = 0;
var team1server = 0;
var team2server = 0;
var scoreLog = [];
var logCounter = 0;
var resetLog = [];

function setServer() {
  setServerVar = 1;
  if (setServerVar === 1) {
    g.clear(reset);
    g.setFont("Vector", 20).setFontAlign(0, 0);
    g.drawString("SetServer", 130, 120);
    g.drawString("top btn: Team 1", 130, 70);
    g.drawString("bottom btn: Team 2", 130, 180);
  }
}

function pickServer(btn) {
  if (btn === 3) {
    team2server = 2;
    setServerVar = 0;
  }
  if (btn === 1) {
    team1server = 2;
    setServerVar = 0;
  }
  g.clear(reset).setFont("6x8");
  g.setFont("Vector", 15).setFontAlign(0, 0);
  g.drawString("Game Time:", 130, 90);

  g.setFont("Vector", 20).setFontAlign(0, 0);
  if (btn === 3) {
    g.drawString("Team 2 Starting!", 130, 130);
  } else {
    g.drawString("Team 1 Starting!", 130, 130);
  }
}

function startGame() {
  start = "true";
  score1 = 0;
  score2 = 0;
  g.clear(reset);
  g.setFont("Vector", 20).setFontAlign(0, 0);
  g.drawString("Started!", 130, 90);
  g.drawString(score1 + ":" + score2, 130, 120);
  g.drawString("Team 1 Server:" + team1server, 130, 150);
  g.drawString("Team 2 Server:" + team2server, 130, 180);
  Bangle.buzz();
}

function countPoint(team) {
  if ((team === "team1") & (team1server === 1)) {
    score1 = score1 + 1;
  } else if ((team === "team1") & (team1server === 2)) {
    score1 = score1 + 1;
  } else if ((team === "team1") & (team2server === 1)) {
    team2server = 2;
  } else if ((team === "team1") & (team2server === 2)) {
    team2server = 0;
    team1server = 1;
  } else if ((team === "team2") & (team2server === 1)) {
    score2 = score2 + 1;
  } else if ((team === "team2") & (team2server === 2)) {
    score2 = score2 + 1;
  } else if ((team === "team2") & (team1server === 1)) {
    team1server = 2;
  } else if ((team === "team2") & (team1server === 2)) {
    team1server = 0;
    team2server = 1;
  }
  logRecord(
    start,
    score1,
    score2,
    setServerVar,
    team1server,
    team2server,
    "point"
  );
  g.clear(reset);
  g.setFont("Vector", 20).setFontAlign(0, 0);
  g.drawString("Point!", 130, 90);
  g.drawString(score1 + ":" + score2, 130, 120);
  g.drawString("Team 1 Server:" + team1server, 130, 150);
  g.drawString("Team 2 Server:" + team2server, 130, 180);
  Bangle.buzz();
}

function logRecord(
  gameStarted,
  T1Score,
  T2Score,
  ServerVar,
  T1Server,
  T2Server,
  action
) {
  logCounter = logCounter + 1;
  var record = {
    start: gameStarted,
    score1: T1Score,
    score2: T2Score,
    setServerVar: ServerVar,
    team1server: T1Server,
    team2server: T2Server,
    action: action,
    counter: logCounter,
  };
  scoreLog.push(record);
  console.log(JSON.stringify(scoreLog));
  console.log("");
}

var start = "false";
var score1 = 0;
var score2 = 0;
var setServerVar = 0;
var team1server = 0;
var team2server = 0;

function resetRecords() {
  logCounter = logCounter + 1;
  var resetRecord = scoreLog[scoreLog.length - 1];
  resetRecord.action = "reset";
  resetRecord.counter = logCounter;
  resetLog.push(resetRecord);
  console.log(JSON.stringify(resetLog));
  console.log("");
  scoreLog.pop();
  if (scoreLog.length < 1) {
    start = "true";
    score1 = 0;
    score2 = 0;
    setServerVar = 0;
  } else {
    var resetVariables = scoreLog[scoreLog.length - 1];
    start = resetVariables.start;
    score1 = resetVariables.score1;
    score2 = resetVariables.score2;
    setServerVar = resetVariables.setServerVar;
    team1server = resetVariables.team1server;
    team2server = resetVariables.team2server;
  }

  g.clear(reset);
  g.setFont("Vector", 20).setFontAlign(0, 0);
  g.drawString("Reset Point", 130, 90);
  g.drawString(score1 + ":" + score2, 130, 120);
  g.drawString("Team 1 Server:" + team1server, 130, 150);
  g.drawString("Team 2 Server:" + team2server, 130, 180);
  Bangle.buzz();
}
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
  //Set Server
  if ((team1server === 0) & (team2server === 0)) {
    if (setServerVar === 1) {
      pickServer(1);
    } else {
      setServer();
    }
  }

  //Start Game
  if (team1server >= 1 || team2server >= 1) {
    if (start === "false") {
      startGame();
    } else {
      //Count Point
      if (start === "true") {
        countPoint("team1");
      }
    }
  }
}

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
  resetRecords();
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
  if (setServerVar === 1) {
    pickServer(3);
  }

  //Count Point
  if (start === "true") {
    countPoint("team2");
  }
}

//LOAD APP
Bangle.loadWidgets();
Bangle.drawWidgets();
