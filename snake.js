class Snake {
  constructor(){
    this.pos = createVector(0,0);
    this.xSpeed = SCL;
    this.ySpeed = 0;
  }
  
  moveDir(){}
  eatsFood(){}
  losesTail(){}
  update(){
    const tempX = this.pos.x + this.xSpeed;
    const tempY = this.pos.y + this.ySpeed;
    this.pos.x = constrain(tempX, 0, width - scl);
    this.pos.y = constrain(tempY, 0, height - scl);
  }

  show(){
    fill(255);
    rect(this.pos.x, this.pos.y, SCL, SCL);
  }
}