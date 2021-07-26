class JBody{
    constructor(x,y,width ,height,pic,) {
      var options = {
          isStatic: true,
         // density : 1.2,
          //restitution : 0.4,
          //friction : 4
      
        // frictionStatic : this.friction,
         

         
      }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.pic = pic;
      this.body.velocityX = -2
      //this.re = rect(x-100,y-100,this.width,this.height)
      //this.friction = friction
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // imageMode(CENTER);
      //fill(this.outline);
      //stroke("white");
      //strokeWeight(10)
     // image(this.pic,pos.x, pos.y, this.width, this.height);
     
    
      if(this.pic === eT1)
      {
        rectMode(CENTER);
        
        stroke("blue");
        strokeWeight(4);
        fill("#FF0099")//26,163,232)
         rect(pos.x, pos.y, this.width, this.height);
        fill("gray");
        
        //rect(this.re.x,this.re.y,100,100)
      
       
        }
      if(this.pic === eB1)
      {
        rectMode(CENTER);
        stroke("blue");
        strokeWeight(4);
        fill("cyan")//26,163,232)
        rect(pos.x, pos.y, this.width, this.height);
       }
      //var jp = createSprite(pos.x-50,pos.y-50,100,100);
    //jp.x = pos.x-50;
   // jp.y = pos.y-50;

      /*if(player.isTouching(this.re))
      {
        player.velocityY = -3;
      }
      else if(player.velocityY<0)
      {
        player.velocityY= player.velocityY + 0.8;
      }*/
      // cloud.addImage(cloudImage);
     // cloud.scale = 0.5;
     // cloud.velocityX = -3;
      
       //assign lifetime to the variable
      //
      //adjust the depth
      //cloud.depth = trex.depth;
     // trex.depth = trex.depth + 1;
      
      //add each cloud to the group
      /*if(frameCount !== -1)
{
  
  //cloudsGroup.add(cloud);


}*/
Ky = this.y;
  Kx = this.x;
if(frameCount %60 ===0)
{
  
  var kop = createSprite(Kx,Ky,50,50);
  
  kop.lifetime = 200;
  //kop.debug = true;
  kopGroup.add(kop)
 // kop.setCollider("circle", kop.width, kop.height,20)
}
     

      }
  };
