function isTouching(object1,object2){

  if (object1.x-object2.x < object1.width/2+object2.width/2 &&
    object2.x-object1.x < object1.width/2+object2.width/2 &&
    object1.y-object2.y < object1.height/2+object2.height/2 &&
    object2.y-object1.y < object1.height/2+object2.height/2){

      return true;
} else {

      return false;
}
}
function drawGrid(color,cnw,cnh) {
  
  for (var x = 0; x < width; x += width / cnw/100) {
		for (var y = 0; y < height; y += height / (cnh/100)) {
			stroke(color);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
}