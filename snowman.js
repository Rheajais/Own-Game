class Snowman{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            setStatic:true
        }
        this.body = Bodies.rectangle(x,y,options);
        this.image = loadImage("Sprites/snowman.jpeg");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0);
        pop();
      }
}
