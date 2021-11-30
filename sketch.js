let angleRotate = 0.0;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  translate(440, 180);
  rotate(radians(angleRotate));
  fill("pink")
  triangle(200,200,50,50,50,150)
  angleRotate += 3.20;
}