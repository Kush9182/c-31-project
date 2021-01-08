class Plinko {
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution: 0.5
        }
        this.body = Bodies.circle(x,y,r,options)
        this.r=r;
        World.add(world,this.body)
    }

    display(){
         
        push();
        fill("white");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }
}