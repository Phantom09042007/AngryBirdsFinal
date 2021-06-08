class SlingShot{
    constructor(body1,point){
        var options = {
            bodyA: body1,
            pointB: point,
            length: 10,
            stiffness:0.04
        }
        this.Image = loadImage("sprites/sling1.png");
        this.Image2 = loadImage("sprites/sling2.png");
        this.Image3 = loadImage("sprites/sling3.png");
        this.point = point;
         this.SlingShot = Constraint.create(options);
         World.add(world,this.SlingShot);
    }

    display(){

        image(this.Image,220,30);
        image(this.Image2,190,20);
        if(this.SlingShot.bodyA){
            var objectA = this.SlingShot.bodyA.position;
            var objectB = this.point
            stroke("#301608");
            strokeWeight(8);
            if (objectA.x < 230){
            line(objectA.x-20,objectA.y,objectB.x-20,objectB.y);
            line(objectA.x-20,objectA.y,objectB.x+20,objectB.y+10);
            image(this.Image3,objectA.x-20,objectA.y-10,5,20);
            } else {
                line(objectA.x+20,objectA.y,objectB.x-20,objectB.y);
                line(objectA.x+20,objectA.y,objectB.x+20,objectB.y+10);
                image(this.Image3,objectA.x+20,objectA.y-10,5,20);
            }
            
        }
        
    }

    detach(){
        this.SlingShot.bodyA = null;
    }

    attach(body){
        this.SlingShot.bodyA = body;
    }
  
    
}