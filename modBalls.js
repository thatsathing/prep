var modBalls_arr = [];

function modBallsSetup() {
    for (var p = 0; p < 5; p++) {
        modBalls_arr[p] = new modBalls_obj();
    }
}


function modBalls() {
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
    this.xVel = 4;
    this.yVel = 4;
}

modBalls_obj.prototype.show = function() {
    ellipseMode(CENTER);
    fill(secMain);
    ellipse(this.x,this.y,6,6);
}

modBalls_obj.prototype.update = function() {
    this.x += this.xVel;
    this.y += this.yVel;
    this.checkCollision();
}

modBalls_obj.prototype.checkCollision = function() {
    if (this.x <= 3) {
        this.x = 4;
        this.xVel *= -1;
    }
    if (this.x >= width-3) {
        this.x = width-4;
        this.xVel *= -1;
    }
    if (this.y <= 3) {
        this.y = 4;
        this.yVel *= -1;
    }
    if (this.y >= height-3) {
        this.y = height-4;
        this.yVel *= -1;
    }
}