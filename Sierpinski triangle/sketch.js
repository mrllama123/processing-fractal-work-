function setup() {
 size(500, 500);
  background(255);
  stroke(0);
  fill(255);
  noLoop();
}

function draw() {
   striangle(250, 20, 460, 4);
}

void striangle(float x,float y,float h,int depth){
	if(depth < 1)
		return;
	// draw the triangle
    float a = sqrt((3 * h * h) / 4);
	
    // YOUR CODE HERE - draw the triangle using, x, y, h and a
	triangle(x,y,x+(a/2),h,x+a,y);
    // YOUR CODE HERE
    // work out the new h
    // reduce the depth
    float half = h/2;
	depth--;
    a = sqrt((3 * h * h) / 16); // helpful for working out new x and y
	
    // YOUR CODE here - 3 recursive calls
    striangle();	
}
