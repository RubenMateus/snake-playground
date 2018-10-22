let snake, food, cols, rows;
const SCL = 20;

function setup() {
  createCanvas(600, 600);
  cols = floor(width / SCL);
  rows = floor(height / SCL);
  pickFoodLocation();

  snake = new Snake();
  frameRate(10);
}

function draw() {
  background(51);
  fill(255, 0, 0);
  rect(food.x, food.y, SCL, SCL);
  snake.update();
  snake.show();
}

function keyPressed() {

  switch (keyCode) {
    case UP_ARROW:
      snake.moveDir(0, -1);
      break;
    case DOWN_ARROW:
      snake.moveDir(0, 1);
      break;
    case LEFT_ARROW:
      snake.moveDir(-1, 0);
      break;
    case RIGHT_ARROW:
      snake.moveDir(1, 0);
      break;
  }
}

function pickFoodLocation() {
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(SCL);
}