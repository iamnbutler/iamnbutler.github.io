<template>
  <div id="sketch min-w-full min-h-screen fixed bottom-0 right-0"></div>
</template>

<script>
console.log(windowHeight);
var res = 50.0 / 70.0;
var margin = 40.0;

function setup() {
  let wHeight = windowHeight - margin;
  let wWidth = wHeight * res;
  let canvas = createCanvas(wWidth, wHeight);
  canvas.parent("sketch");

  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0);

  //texte
  textFont("Staatliches");
  textSize(40);
  textAlign(LEFT);
  textStyle(BOLD);
  let texte = "BE A GOOD DESIGNER";
  let textHeight = textAscent() + textDescent();
  let margin = 20;
  /**
	Le translate n'est pas necessaire si vous n'avez pas de rotation.
	Par ailleur vous pouvez utiliser la variable texte que vous avez créé
	push();
	translate(margin, margin + textHeight);
	noStroke();
	fill(255);
	text("BE A GOOD DESIGNER", 0, 0);
	pop();
	*/
  noStroke();
  fill(255);
  text(texte, margin, margin + textHeight);

  //line
  stroke(250);
  strokeWeight(3);
  line(0, 90, windowWidth, 90);

  //patern
  let gridX = margin;
  let gridY = textHeight + margin * 4;
  let gridWidth = width - (gridX + margin);
  let gridHeight = height - (gridY + margin);

  var res = 10;
  let nbElementGridWidth = gridWidth / res;
  let nbElementGridHeight = gridHeight / res;

  for (var i = 0; i < nbElementGridWidth; i++) {
    for (var j = 0; j < nbElementGridHeight; j++) {
      var x = i * res + res / 2 + gridX;
      var y = j * res + res / 2 + gridY;

      var noi = noise(i * 0.1, j * 0.1, millis() * 0.001);
      var noiR = noise(i * 0.2, j * 0.2, millis() * 0.001);
      var noiG = noise(i * 0.3, j * 0.3, millis() * 0.001);
      var angle = noi * TWO_PI;
      var hue = 120 + noiR * (360 - 120);
      var sat = noiG * 100;
      var bri = noi * 100;

      var distance = dist(mouseX, mouseY, x, y);
      //distance = pow(distance, 0.5);
      distance = constrain(distance, 0, 100);
      var sat = map(distance, 0, 200, 50, 100);

      hue = (hue + distance * 0.01) % 360;
      sat = (sat + distance * 0.01) % 100;
      bri = (bri + distance * 0.1) % 100;

      if (distance < 50) {
        sat = 0;
        bri = 100;
      }

      if (noi > 0.5) {
        var newnoi = map(noi, 0.5, 1, 0.1, 1);
        push();
        translate(x, y);
        rotate(angle);
        stroke(hue, sat, bri - 20);
        strokeWeight(3 * noi);
        line(0, -res * 0.5, 0, res * 0.5);
        pop();
      } else {
        strokeWeight(1);
        fill(hue, sat, bri * 90);
        stroke(noi * 40);
        rectMode(CENTER);
        rect(x, y, res, res);
      }
    }
  }
}
</script>