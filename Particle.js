class Particle {
    constructor(x,y,r){
        var options = {
            restitution: 0.5,
        }
        this.body = Bodies.circle(x,y,r,options);
        this.color=color(random(0,255),random(0,255),random(0,255))
        this.r = r;
        World.add(world,this.body);
    }

    display(){

        push();  
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop()
    }
}