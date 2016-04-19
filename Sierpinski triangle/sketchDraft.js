function setup() {
  createCanvas(700, 700);
  background(255);
  stroke(0);
  fill(255);
  noLoop();
}

function draw() {
  striangle(250, 20, 460,300, 4);
}

function striangle(x,y,h,width,depth){
  tringle(x,y,x+(width/2),y+h,x+width,y);
  subTri(x,y,x+(width/2),y+h,x+width,y,depth);
}

function subTri(x1,y1,x2,y2,x3,y3,depth){
  if (depth<0) {
    return;
  }
  tringle(x1,y1,x2,y2,x3,y3);
  //var h=y2/2
  
}
