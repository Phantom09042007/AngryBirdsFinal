class Log extends Base {
  constructor(x, y, width, height, angle) {
    super(x,y,width,height);
    Matter.Body.setAngle(this.body, angle);
    this.Image = loadImage("sprites/wood2.png");
    Matter.Body.set(this.body, 'friction', 2);
  }
}
