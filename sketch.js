//create empty array to represent each die
//note that there are only two unique dice
//the other two are duplicates
let logo;
let round = 0;
let die1 = [];
let die2;
let die3 = [];
let die4;

// sizing and scaling
let padding = 20;
let diceY;
let diceX = [];
let diceSize;

function preload() {
  logo = loadImage('assets/logo.png');

  //load images for first and second dice
  die1.push(loadImage('assets/dice/0_0.svg'));
  die1.push(loadImage('assets/dice/0_1.svg'));
  die1.push(loadImage('assets/dice/0_2.svg'));
  die1.push(loadImage('assets/dice/0_3.svg'));
  die1.push(loadImage('assets/dice/0_4.svg'));
  die1.push(loadImage('assets/dice/0_5.svg'));
  die2 = die1;

  //load images for third and fourth dice
  die3.push(loadImage('assets/dice/1_0.svg'));
  die3.push(loadImage('assets/dice/1_1.svg'));
  die3.push(loadImage('assets/dice/1_2.svg'));
  die3.push(loadImage('assets/dice/1_3.svg'));
  die3.push(loadImage('assets/dice/1_4.svg'));
  die3.push(loadImage('assets/dice/1_5.svg'));
  die4 = die3;
}

function setup() {
  rectMode(CENTER);
  createCanvas(windowHeight, windowHeight);
  makeScale();
  decorations();
  makeButton();
  makeDice();
}

function draw() {
  fill(255);
  stroke(42, 55, 118);
  rect(width/2, height*(40/64), width/2, height/16);
  fill(0);
  noStroke();
  text("Round: " + round, width/2, height*(40/64));
  
}

function makeScale() {
  diceSize = (width - 7 * padding) / 4;
  diceY = (25 / 32) * height;
  let x = 2 * padding + diceSize / 2;
  for (let i = 0; i < 4; i++) {
    diceX.push(x);
    x += padding + diceSize;
  }
}

function decorations() {
  background(42, 55, 118);
  rect(width / 2, height / 2, width - padding, height - padding);
  image(logo, padding / 2, padding / 2,
    width - padding, 0.5 * (width - padding));
}

function makeButton() {
  // button
  fill(42, 55, 118);
  stroke(236, 96, 80);
  strokeWeight(5);
  rect(width / 2, height / 2 + padding,
    width - padding - 5, height / 16);

  // label text
  textAlign(CENTER, CENTER);
  textSize(32);
  noStroke();
  fill(255);
  text("Click to roll the dice",
    width / 2, height / 2 + padding,
    width - padding - 5, height / 16)
}

function makeDice() {
  for (let i = 0; i < 4; i++) {
    stroke(0);
    noFill();
    square(diceX[i], diceY, diceSize, padding);
  }
}

function mousePressed() {
  if (mouseY >= height / 2 &&
    mouseY <= (9 / 16) * height + 5 &&
     mouseX >= 0 && mouseX <= width) {
    rollDice();
  }
}

function rollDice() {
  image(random(die1),
    diceX[0] - diceSize / 2, diceY - diceSize / 2,
    diceSize, diceSize);
  image(random(die2),
    diceX[1] - diceSize / 2, diceY - diceSize / 2,
    diceSize, diceSize);
  image(random(die3),
    diceX[2] - diceSize / 2, diceY - diceSize / 2,
    diceSize, diceSize);
  image(random(die4),
    diceX[3] - diceSize / 2, diceY - diceSize / 2,
    diceSize, diceSize);
  makeDice();
  if (round < 7){
    round++;
  } else {
    round = 1;
  }
}