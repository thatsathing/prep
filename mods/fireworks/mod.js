/*  Is 'ayy' still a meme? 'ayy' is probably gonna be like what rage comics are now by the time someone reads this.
 *
 *  Fireworks module!
 * 
 *  ~ Ethan
 */
var modFW_grav = .2
var fw = [];
var particles = [];
var backGroundUseAlpha = true;

function modSetup() {
  fw.push(new firework())
}

function modLoop() {
  for (var i = 0; i < fw.length; i++) {
    fw[i].update();
    fw[i].show();
    if (fw[i].yVel >= -4) {
      fw[i].boom();
      fw.splice(i);
    }
  }
  if (random(0,1) < .005) {
    fw.push(new firework())
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].show()
    particles[i].update()
    if (floor(particles[i].lifespan) <= 2) {
      particles.splice(i)
    }
  }
}

function firework() {
  this.x = random(0,width);
  this.y = height;
  this.yVel = 0;
  this.yAcc = random(-8,-15);
  this.hue = floor(random(0,360))
}

function particle(x,y,hue,xAcc,yAcc) {
  this.x = x;
  this.y = y;
  this.xVel = 0;
  this.xAcc = xAcc;
  this.yVel = 0;
  this.yAcc = yAcc;
  this.lifespan = 250;
  this.hue = hue;
}

firework.prototype.update = function() {
  this.yAcc += modFW_grav;
  this.yVel += this.yAcc
  this.y += this.yVel
  this.yAcc = 0;
}

firework.prototype.show = function() {
  colorMode(HSB, 360, 100, 100, 255);
  fill(this.hue,200,100,255);
  ellipse(this.x,this.y,10,10);
}

firework.prototype.boom = function() {
  for (var i = 0; i < random(100,150); i++) {
    particles.push(new particle(this.x,this.y,this.hue,random(-8,8),random(-.5,-2.3)))
  }
}

particle.prototype.show = function() {
  ellipseMode(CENTER);
  colorMode(HSB, 360, 100, 100, 255);
  fill(this.hue,100,100,this.lifespan);
  ellipse(this.x,this.y,5,5);
}

particle.prototype.update = function() {
  this.yAcc += modFW_grav;
  this.yVel += this.yAcc
  this.y += this.yVel

  this.xVel += this.xAcc
  this.xVel *= .98
  this.x += this.xVel
  this.xAcc = 0

  this.lifespan *= .97
}
