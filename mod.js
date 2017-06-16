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
var modFW_grav = 4
var fw;

function modSetup() {
  fw = new firework();
}

function modLoop() {
  fw.particle.show();
  fw.particle.update();
}

function firework() {
  this.x = random(0,width);
  this.y = 0;
  this.yVel = 0;
  this.yAcc = random(150,200);
  this.hue = random(0,255);
  this.particle = new particle(this.x,this.y,this.hue,true);
}

function particle(x,y,hue,fw) {
  this.x = x;
  this.y = y;
  this.xVel = 0;
  this.yAcc = 0;
  this.lifespan = 250;
  this.fw = fw
}

particle.prototype.show = function() {
  ellipseMode(CENTER);
  colorMode(HSB, 100);
  fill(120,255);
  ellipse(this.x,this.y,8,8);
}

particle.prototype.update = function() {
  this.yAcc += modFW_grav;
  this.yVel += this.yAcc
  this.y += this.yVel

}
