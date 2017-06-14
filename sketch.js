var fontSize = 72;
var d = new Date();
var x = 0;
var y = 0;
function setup() {
  createCanvas(windowWidth-4,windowHeight-4);
}

function draw() {

  textSize(fontSize);
  textAlign(CENTER);
  text("Lafayete",width/2, height/2)
  text("Morning Announcements", width/2, (height/2)+(fontSize+8)*1)
  text(d, width/2, (height/2)+(fontSize+8)*2)
}
