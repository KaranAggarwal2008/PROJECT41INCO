class createDrop{
    constructor(x,y){
        var dropOptions ={
         friction:0.1,
         restitution:0.1
        }
      this.drop = Bodies.circle(x,y,5,dropOptions);
      World.add(world,this.drop)
    }
    display(){
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(this.drop.position.x,this.drop.position.y,5);
    }
}