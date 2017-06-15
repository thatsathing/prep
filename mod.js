var modSnow_arr = [];
var modSnow_rad = 6

function modSetup() {
  for (var i = 0; i < width; i++) {
    modSnow_arr[i] = new modSnow_obj();
  }
}

function modLoop() {
  for (var i = 0; i < modSnow_arr.length; i++) {
    modSnow_arr[i].show();
    modSnow_arr[i].update();
  }
}

function modSnow_obj() {
  this.x = random(0,width);
  this.y = random(-100,0);
  this.xVel = random(3,4);
  this.yVel = 1
}

modSnow_obj.prototype.show = function() {
  ellipseMode(CENTER);
  fill('#ffffff');
  ellipse(this.x%width,this.y,modSnow_rad*2,modSnow_rad*2)
}

modSnow_obj.prototype.update = function() {
  this.x += this.xVel
  this.y += this.yVel
}
