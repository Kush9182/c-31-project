class Divider {
    constructor(x,y,h){
        var options = {
            isStatic: true,
            restitution: 0.5,
            friction:1.3
        }
        this.body = Bodies.rectangle(x,y,10,h,options);
        this.width = 10;
        this.height = h;
        World.add(world,this.body);
    }

    display(){

        push();  
        fill("white");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
        pop()
    }
}