

function setup() {
  createCanvas(1200, 700);
}

function draw() {
  background(220);
  if(keyIsDown(RIGHT_ARROW)){
    background("red")
  }
  if(keyIsDown(LEFT_ARROW)){
    background("yellow")
  }
}