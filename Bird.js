class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
  this.image = loadImage("sprites/bird.png");
    this.trajectoryX=[];
    this.trajectoryY=[];
    this.image2=loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.speed>10 && this.body.position.x>200){
      this.trajectoryX.push(this.body.position.x);
      this.trajectoryY.push(this.body.position.y);
      
    }
    for(var i=0;i<this.trajectoryX.length;i++){
image(this.image2,this.trajectoryX[i],this.trajectoryY[i],10,10);
    }
  }
}
