//  Program for the pre-airing Morning Announcements time!
//  ~Ethan

var fontSize = 72;

var borderWidth;
var d;

//  COLORS!
//  From material.io
//  But without all the shadows and good-looking bits of material.

var primMain;
var primLight;
var primDark;
var primText;

var secMain;
var secLight;
var secDark;
var secText;

function defineColors() {
    //  Orange 500
    primMain = color('#ff9800')
    primLight = color('#ffc947')
    primDark = color('#c66900')
    primText = color('#000000')

    //  Grey 900
    secMain = color('#212121')
    secLight = color('#585858')
    secDark = color('#000000')
    secText = color('#ffffff')
}

var dispDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var dispMonth = ["January","Februrary","March","April","May","June","July","August","September","October","November","December"]


function setup() {
    createCanvas(windowWidth-4,windowHeight-4);
    borderWidth = floor(width/20);
    textSize(fontSize);
    noStroke();
    defineColors();
    d = new(Date);
    modSetup();
}

function draw() {
    d = new Date();
    background(primDark);
    fill(primLight);
    rect(borderWidth,borderWidth,width-(borderWidth*2),height-(borderWidth*2))
    modLoop();
    textAlign(CENTER);
    fill(primText);
    text("Laffayette",width/2,height/2 + (fontSize + 8)*-1);
    text("Morning Announcements",width/2,height/2 + (fontSize+8)*0);
    text(dispDay[d.getDay()] + ", " + dispMonth[d.getMonth()] + " " + d.getDate(),width/2, height/2 + (fontSize+8)*1)
}

function windowResized() {
    resizeCanvas(windowWidth-4,windowHeight-4);
    borderWidth = floor(width/20);
}