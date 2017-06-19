/* This is the template file for what I'm calling a module.
 *
 * A few key things to note here:
 *
 * The function 'modSetup()' is run at the very end of setup
 * The function 'modLoop()'  is the last thing run before the text in the draw loop.
 * Try to use the colors:
 *      secMain
 *      secLight
 *      secDark
 * and  secText,
 *  if you need the values, they are the values of Grey 900 from material.io/color
 *
 */
var modFW_grav = 7
var fw = [];

function modSetup() {
  fw.push(new firework())
}

function modLoop() {
  for (var i = 0; i < fw.length; i++) {
    fw[i].update();
    fw[i].show();
    if (fw[i].yAcc >= 0) {
      fw.splice(i)
    }
  }
  if (random(0,1) < .5) {
    fw.push(new firework())
  }
}

function firework() {
  this.x = random(0,width);
  this.y = 0;
  this.yVel = 0;
  this.yAcc = random(3,8);
  this.hue = floor(random(0,255))
}

function particle(x,y,hue) {
  this.x = x;
  this.y = y;
  this.yVel = 0;
  this.yAcc = 0;
  this.lifespan = 250;
  this.hue = hue
}

firework.prototype.update = function() {
  this.yAcc += modFW_grav;
  this.yVel += this.yAcc
  this.y += this.yVel
  this.yAcc = 0;
}

firework.prototype.show = function() {
  fill(this.hue,100,50);
  ellipse(this.x,this.y,5,5);
}

particle.prototype.show = function() {
  ellipseMode(CENTER);
  colorMode(HSB, 100);
  fill(120,255);
  ellipse(this.x,this.y,2,2);
}

particle.prototype.update = function() {
  this.yAcc += modFW_grav;
  this.yVel += this.yAcc
  this.y += this.yVel

}
