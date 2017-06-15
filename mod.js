var modBalls_arr = [];
var modBalls_rad = 4;

function modSetup() {
    for (var p = 0; p < 5; p++) {
        modBalls_arr[p] = new modBalls_obj();
    }
}


function modLoop() {
    for (var p = 0; p < modBalls_arr.length; p++) {
        modBalls_arr[p].show();
        modBalls_arr[p].update();
    }
    modBalls_checkKeys();
}

function modBalls_checkKeys() {
    if(keyIsDown(32)) {
        modBalls_arr.push(new modBalls_obj())
    }
}

function modBalls_obj() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.xVel = random(3.99,4.01);
    this.yVel = random(3.99,4.01);
}

modBalls_obj.prototype.show = function() {
    ellipseMode(CENTER);
    fill(secMain);
    ellipse(this.x,this.y,modBalls_rad*2,modBalls_rad*2);
}

modBalls_obj.prototype.update = function() {
    this.x += this.xVel;
    this.y += this.yVel;
    this.checkCollision();
    if (this.xVel >= 7 || this.xVel <= -7) {
        this.xVel *= .5
    }
    if (this.yVel >= 7 || this.yVel <= -7) {
        this.yVel *= .5
    }
}

modBalls_obj.prototype.checkCollision = function() {
    if (this.x <= modBalls_rad) {
        this.x = modBalls_rad+1;
        this.xVel *= random(-.9,-1.1);
    }
    if (this.x >= width-modBalls_rad) {
        this.x = width-modBalls_rad-1;
        this.xVel *= random(-.9,-1.1);
    }
    if (this.y <= modBalls_rad) {
        this.y = modBalls_rad + 1;
        this.yVel *= random(-.9,-1.1);
    }
    if (this.y >= height-modBalls_rad) {
        this.y = height-modBalls_rad-1;
        this.yVel *= random(-.9,-1.1);
    }
    for (var p = 0; p < modBalls_arr.length; p++)
    if (dist(this.x,this.y,modBalls_arr[p].x,modBalls_arr[p].y) <= modBalls_rad*2 && dist(this.x,this.y,modBalls_arr[p].x,modBalls_arr[p].y) != 0) {
        this.xVel *= random(-.9,-1.1);
        this.yVel *= random(-.9,-1.1);
    }
}