let snake;
const SCL = 20;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
}

function draw() {
  background(51);
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