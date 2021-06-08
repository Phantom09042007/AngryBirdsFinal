class Base {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':0.01
      }
      this.Image = loadImage("sprites/base.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      //stroke("green");
      //strokeWeight(5);
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      //fill("yellow");
      imageMode(CENTER);
      image(this.Image,0,0,this.width,this.height);
      //rect(0, 0, this.width, this.height);
      pop();
    }
  };
  