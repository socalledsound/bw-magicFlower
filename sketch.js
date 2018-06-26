/*eslint-disable*/
let inc = 1;
let colors = [];
let numColors = 3000;
function setup() {
  createCanvas(1000, 1000);
  frameRate(10);
  for(let i = 0; i< numColors; i++){
    //colors[i]=[random(255),random(255),random(255),150];
    colors[i]=[i%255,i%255,i%255,random(100,200)];
  }


}
function draw() {
  background(0);
  push();
  translate(width/2, height/2);
  for (let i = 0; i < numColors; i++) {
    let t = radians(i);
    let tt = radians(i+1);
    rotate(radians(inc));
    strokeWeight(20);
    stroke(colors[i]);
    line(t*cos(t)*5+random(5),t*sin(t)*5+random(5),tt*cos(tt)*10+random(5),tt*sin(tt)*10+random(5));
  }

  //rotate(radians(inc));
  pop();
  inc+=0.05;

}
// function draw() {
//   background(255);
//   translate(width/2, height/2);
//   for (var i = 0; i < 10000; i++) {
//     var t = radians(i);
//     var x = t * cos(t);
//     var y = t * sin(t);
//     strokeWeight(10);
//     stroke(random(255),random(255),random(255),150);
//     point(x*10+random(10), y*10+random(10));
//   }
// }

// void setup() {
//   size(400, 400);
//   smooth();
// }
 
