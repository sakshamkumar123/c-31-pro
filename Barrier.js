class Bar {
    constructor(x, y) {
      var options = {
          isStatic:true,
          'restitution':0.4,
          
      }
      this.body = Bodies.circle(x, y,10, options);
    
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      circle(0, 0, 13);
      pop();
    }
  };