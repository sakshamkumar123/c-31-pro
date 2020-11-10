class Ball {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.color=color(random(0,255),random(0,255),random(0,255))
      this.radius=radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color);
      circle(0, 0, 12);
      pop();
    }
  };