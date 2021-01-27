// Tic Tac Toe
// Cooper bunaik
// Jan 27/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let players = ["X", "O"];
let currentPlayer;
let available = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentPlayer = floor(random(players.length));
  for (let j=0; j<3; j++) {
    for (let i=0; i<3; i++) {
      available.push([i,j]);
    }
  }
}

function equals3(a,b,c) {
  return if (a===b && b===c && a===c);
}

function checkWinner() {
  let winner = null;
  for (let i=0; i<3; i++) {
    if (board[i][0] === board[i][1] === board[i][2]) {
      winner = board[i][0];
    }
  }
  for (let i=0; i<3; i++) {
    if (board[0][i] === board[0][i] === board[0][i]) {
      winner = board[0][i];
    }
  }
  if (board[0][0] === board[1][1] === board[2][2]) {
    winner = board [0][0];
  }
  if (board[2][0] === board[1][1] === board[0][2]) {
    winner = board [2][0];
  }
  
  if (winner === null && available.length === 0) {
    console.log("tie");
  }
  else {
    console.log("winner");
  }

}

function nextTurn() {
  let index = floor(random(available.length));
  let spot = available.splice(index,1)[0];
  let i = spot[0];
  let j = spot[1];
  board[i][j] = players[currentPlayer];
  currentPlayer = (currentPlayer + 1) % players.length;
}

function mousePressed() {
  nextTurn();
}

function draw() {
  background(255);
  let w = width/3;
  let h = height/3;

  line(w, 0, w, height);
  line(w*2, 0, w*2, height);
  line(0, h, width, h);
  line(0, h*2, width, h*2);

  for (let j=0; j<3; j++) {
    for (let i=0; i<3; i++) {
      let x = w*i + w/2;
      let y = h*j + h/2;
      let spot = board[i][j];
      textSize(32);
      strokeWeight(4);
      if (spot === players[1]) {
        noFill();
        ellipse(x, y, w/2);
      }
      else if (spot === players[0]) {
        let xr = w/4;
        line(x-xr, y-xr, x+xr, y+xr);
        line(x+xr, y-xr, x-xr, y+xr);
      }
      text(spot, x, y);
    }
  }
  checkWinner();
}