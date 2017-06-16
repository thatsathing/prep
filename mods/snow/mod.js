var modSnow_arr = [];
var modSnow_rad = 6
var modSnow_grav = .05

function modSetup() {
  for (var i = 0; i < width-width/6; i++) {
    modSnow_arr[i] = new modSnow_obj();
  }
}

function modLoop() {
  modCheckKeys();
  for (var i = 0; i < modSnow_arr.length; i++) {
    modSnow_arr[i].show();
    modSnow_arr[i].update();
  }
  fill(255);
  rect(0,height-floor(width/25)+8,width,floor(width/25));
}

function modCheckKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    for (var i = 0; i < modSnow_arr.length; i++) {
      modSnow_arr[i].xAcc += -.5;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    for (var i = 0; i < modSnow_arr.length; i++) {
      modSnow_arr[i].xAcc += .5;
    }
  }
  if (keyIsDown(UP_ARROW)) {
    for (var i = 0; i < modSnow_arr.length; i++) {
      modSnow_grav += -.00003;
      if (modSnow_grav <= 0) {
        modSnow_grav = 0.01
      }
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    for (var i = 0; i < modSnow_arr.length; i++) {
      modSnow_grav += .00003;
      if (modSnow_grav >= .1) {
        modSnow_grav = .09
      }
    }
  }
}

function modSnow_obj() {
  this.x = random(0,width);
  this.y = random(-10000,0);
  this.xVel = random(3,4);
  this.xAcc = 0;
  this.yVel = 1;
  this.yAcc = 0;
}

modSnow_obj.prototype.show = function() {
  ellipseMode(CENTER);
  fill('#ffffff');
  ellipse(this.x%width,this.y,modSnow_rad*2,modSnow_rad*2)
}

modSnow_obj.prototype.update = function() {
  this.xAcc += random(-.03,.03)
  this.xVel += this.xAcc;
  this.xAcc = 0
  this.yAcc += modSnow_grav
  this.yVel += this.yAcc
  this.yAcc = 0
  this.x += this.xVel
  this.y += this.yVel
  if (this.y >= height) {
    this.y = random(-500,-100);
    this.yVel = 0;
  }
  if (this.xVel >= 24) {
    this.xAcc += -1
  }
  if (this.xVel <= -24) {
    this.xAcc += 1
  }
}
