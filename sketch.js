var x, y, sx,sy,r = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = int(random(r, width - r));
  y = int(random(r, height - r));
  sy = random(5, 24);
  sx = random(5, 24);
  
  fill(255);
}

function draw() {
  background(0);
  ellipse(x, y, r);

  if (x >= width - r / 2.0 || x - r / 2.0 <= 0){
    sx = -sx;
  }
  if (y >= height - r / 2.0 || y - r / 2.0 <= 0){
    sy = -sy;
  }
  x += sx;
  y += sy;
}