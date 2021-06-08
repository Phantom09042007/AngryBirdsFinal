class Pig extends Base {
  constructor(x, y, width, height) {
    super(x,y,width,height);
    this.Image = loadImage("sprites/enemy.png");
    this.visible = 255;
  }

  display(){
    //console.log(this.body.speed);
    if (this.body.speed>4){
      World.remove(world,this.body);
      push();
      tint(255,this.visible);
      this.visible-=5;
      image(this.Image,this.body.position.x,this.body.position.y,50,50);
      pop();
    } else{
      super.display();
    }
    }

    Score(){
      if (this.visible<255 && this.visible>=-245){
        Score++
      }
    }

}
