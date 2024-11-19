function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // random
  let bgColor = color(random(10, 20), random(20, 50), random(20, 50));
  background(bgColor);
  let seguir = mouseX + 1;
  let seguirY = mouseY + 1;
  let squareSize = map(mouseX, 0, width, 10, 250); // tamaño en x
  for (let x = 10; x < width; x += seguir) {
    for (let y = 10; y < height; y += seguirY) {
        fill(200, 130, 20); // Color para los otros cuadrados
        noStroke();
      square(x, y, squareSize, 40, 45, 5, 5); // tamaño
    }
  }
}
