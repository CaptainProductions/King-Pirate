var kingFade = 0;
var pirateFade = 0;
var timer = 0;
var willTransition = false;

function setup() {
  createCanvas(300,300);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER);
  
}

function poly(x, y, size, rot, sides) {
   beginShape();
   strokeCap(ROUND);
   for (var r = rot; r < 360 + rot; r += 360/sides) {
       vertex(
           size/2 * cos(r - 90) + x,
           size/2 * sin(r - 90) + y
       );
   }
   endShape(CLOSE);
};

function crown(x,y,rot) {
    push();
    translate(x,y);
    rotate(rot);
    fill(255,105,0);
    rect(0,0,22,1);
    push();
    translate(-11,0);
    noStroke();
    triangle(-6,-6,0,-15,6,-6);
    triangle(6,-6,12,-15,18,-6);
    triangle(18,-6,23,-15,29,-6);
    pop();
    pop();
    
};

function draw() {
  background(255,255,255);
  //the hexagon center
  strokeWeight(10);
  noFill();
  stroke(color(255,105,0));
  poly(150,150,100,0,6);

  stroke(255,105,0);
  strokeCap(SQUARE);
  strokeWeight(13);
  line(65,150,205,235);
  line(235,150,95,235);
   crown(173,100,30);
  
   textFont("Source Sans Pro");
   noStroke();
   textSize(30);
   fill(255,105,0,kingFade);
   text("King",110,270);
   fill(0,0,0,pirateFade)
    text("Pirate",190,270);
    
    kingFade +=5;
    if(kingFade > 100) {
    pirateFade+=5;  
    }
    
}