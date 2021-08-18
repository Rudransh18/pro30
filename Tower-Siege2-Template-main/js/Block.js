class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         this.image= loadImage("block.png")
        World.add(world, this.body);


      this.visiblity=225

      }
      
      display(){

        var pos= this.body.position;
        imageMode(CENTER);

        if(this.body.speed <6){
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
        else{

          
          
          
          push();
          
          
          this.visiblity = this.visiblity - 5;
          
        
          
          
          tint(255,this.visiblity);
          image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
          pop();
          World.remove(world, this.body);
        }


        }
}