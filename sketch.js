// created the variables
var sc = 0;
var mn = 0;
var hr = 0;
const canvasSize = 500;

function setup() {

  createCanvas(canvasSize,canvasSize);

// changed the angleMode to Degrees
  angleMode(DEGREES);

}

function draw() {
  background(0);

// calling the hour(), minute(), second()
  hr = hour();
  mn = minute();
  sc = second();

  translate(canvasSize/2, canvasSize/2);
  rotate(-90);

  clock();

}

function clock(){
  noFill();

// created the second hand
  strokeWeight(6);
  stroke("red");
  var scDegree = map(sc, 0, 60, 0, 360);
  arc(0, 0, canvasSize*17/20, canvasSize*17/20, 0, scDegree);

  push();
  rotate(scDegree);
  line(0, 0, canvasSize/3, 0);
  pop();

// craeted the minute hand
  strokeWeight(5);
  stroke("blue");
  var mnDegree = map(mn, 0, 60, 0, 360);
  arc(0, 0, canvasSize*16/20, canvasSize*16/20, 0, mnDegree);

  push();
  rotate(mnDegree);
  line(0, 0, canvasSize/3, 0);
  pop();

// created the hour hand
  strokeWeight(5);
  stroke("green");
  var hrDegree = map(hr, 0, 60, 0, 360);
  arc(0, 0, canvasSize*15/20, canvasSize*15/20, 0, hrDegree);

  push();
  rotate(hrDegree);
  line(0, 0, canvasSize/3, 0);
  pop();

  
}
