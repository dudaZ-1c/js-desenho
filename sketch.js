let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y
function setup() {
  createCanvas(400, 400);
  
  background(color(100,0,0));
  cor = color (random(0,255), random(0,255),random(0,255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {
 
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical, 50);
  
  if (mouseX <posicaoHorizontal){
    posicaoHrizontal= posicaoHorizontal +1;
  }
  
  if (mouseX > posicaoHorizontal ) {
    posicaoHorizontal = posicaoHorizontal + 1;
}
    
    if (mouseY > posicaoVertical) {
      posicaoVertical++;
}
  if ( mouse Y > posicaoVertical) {
    posicaoVertical++;
    
}
  
  
if (mouseIsPressed) {
  cor = color ( random(0,255), random (0,255),random(0,255), random(0,100));
   }
  
}