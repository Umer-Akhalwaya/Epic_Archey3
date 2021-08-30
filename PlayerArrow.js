class PlayerArrow {
  constructor(x, y, width, height) {
      var options = {
          restitution: 0.8,
          //frictionAir: 0.01,
          density: 1.0,
          isStatic: true,
       };

       this.width = width;
       this.height = height;
       this.body = Bodies.rectangle(x, y, this.width, this.height, options);
       this.image = loadImage("arrow.png");
       this.trajectory = [];

       World.add(world, this.body);

  }
  shoot() {
    var velocity = p5.Vector.fromAngle (playerArcher.angle);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {x: velocity.x + 30, y: velocity.y - 0.2});
    velocity.mult(40);
  }

  display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle *  1.1);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

        if (this.body.velocity.x > 0 && this.body.position.x > 300) {
          var position = [this.body.position.x, this.body.position.y];
          this.trajectory.push(position);
    
        }

        for (var i = 0; i < this.trajectory.length; i++) {
          image (this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
  
        }

    
    }
}