class Bird extends Base {
  constructor(x, y, width, height) {
    super(x,y,width,height);
    this.Image = loadImage("sprites/bird.png");
    //Matter.Body.setDensity(this.body,0.1);
    this.trajectory = []
    this.ImageSmoke = loadImage("sprites/smoke.png");
    
  }
  display(){
    super.display();
   // this.body.position.x = mouseX;
   //his.body.position.y = mouseY;
  //  Matter.Body.setPosition(this.body, {x:mouseX, y:mouseY});
  if(this.body.velocity.x>10 && this.body.position.x>220){
    var Birdpos = [this.body.position.x,this.body.position.y];
    this.trajectory.push(Birdpos);

  }
 
  for(var i = 0; i<this.trajectory.length; i++){
    image(this.ImageSmoke,this.trajectory[i][0], this.trajectory[i][1]);
  }
  }
}
