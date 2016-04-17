function setup() {
  createCanvas(700, 700);
  background(255);
  stroke(0);
  fill(255);
  noLoop();
  
}

function draw() {
   striangle(250, 20, 460, 4);
}

function striangle(x,y,h,depth){
	if(depth < 1)
		return;
	// draw the triangle
    var a = sqrt((3 * h * h) / 4);
	
    // YOUR CODE HERE - draw the triangle using, x, y, h and a
	triangle(x,y,x+(a/2),h,x+a,y);
    // YOUR CODE HERE
    // work out the new h
    // reduce the depth
    var half = a/2;
	depth--;
    a = sqrt((3 * h * h) / 16); // helpful for working out new x and y
	
    // YOUR CODE here - 3 recursive calls
    striangle(x,y,half,depth);
    striangle(x+a,y,half,depth);
    striangle(x,y+a,half,depth);
}
