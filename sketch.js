
// Create a class for rectangles
class Rectangle {
  constructor(x, y, width, height, r, g, b) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // add a color property
    this.color = color(r,g,b);
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }

  // add a color parameter to the display method
  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }
}



class YellowBlock {
  constructor(x, y, w, h, r, g, b) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color(r, g, b);
  }

  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}

let yellowBlocks = [];
let cars = [];
// let aspectRatio = 715 / 715; // Original width / height ratio

function setup() {
  createCanvas(windowWidth, windowHeight);
  createYellowBlocks();
  createCars();
}

function draw() {
  background(255);
  for (let block of yellowBlocks) {
    block.display();
  }
  // Display the cars in a loop
  for (let car of cars){
    car.display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createYellowBlocks();
  createCars();
}

function createYellowBlocks() {
  yellowBlocks = []; // Reset the array
  let scaleFactor = min(windowWidth / 715, windowHeight / 715); // Calculate scale factor to maintain aspect ratio

  // Background part
  yellowBlocks.push(new YellowBlock(0, 0, 715 * scaleFactor, 715 * scaleFactor, 242, 243, 239));

  // Horizontal lines
  yellowBlocks.push(new YellowBlock(0, 15 * scaleFactor, 715 * scaleFactor, 15 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(0, 115 * scaleFactor, 715 * scaleFactor, 15 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(0, 250 * scaleFactor, 715 * scaleFactor, 15 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(0, 310 * scaleFactor, 715 * scaleFactor, 15 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(0, 405 * scaleFactor, 715 * scaleFactor, 15 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(0, 445 * scaleFactor, 715 * scaleFactor, 15 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(0, 485 * scaleFactor, 55 * scaleFactor, 15 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(40 * scaleFactor, 515 * scaleFactor, 360 * scaleFactor, 15 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(0, 555 * scaleFactor, 55 * scaleFactor, 15 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(0, 615 * scaleFactor, 715 * scaleFactor, 15 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(0, 635 * scaleFactor, 55 * scaleFactor, 15 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(0, 675 * scaleFactor, 715 * scaleFactor, 15 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(615 * scaleFactor, 580 * scaleFactor, 85 * scaleFactor, 15 * scaleFactor, 232, 210, 39));

  // Vertical lines
  yellowBlocks.push(new YellowBlock(15 * scaleFactor, 0, 15 * scaleFactor, 265 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(40 * scaleFactor, 0, 15 * scaleFactor, 715 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(80 * scaleFactor, 0, 15 * scaleFactor, 690 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(155 * scaleFactor, 0, 15 * scaleFactor, 715 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(385 * scaleFactor, 0, 15 * scaleFactor, 715 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(410 * scaleFactor, 0, 15 * scaleFactor, 260 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(410 * scaleFactor, 315 * scaleFactor, 15 * scaleFactor, 400 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(460 * scaleFactor, 325 * scaleFactor, 15 * scaleFactor, 135 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(615 * scaleFactor, 0, 15 * scaleFactor, 715 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(640 * scaleFactor, 0, 15 * scaleFactor, 260 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(665 * scaleFactor, 0, 15 * scaleFactor, 85 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(665 * scaleFactor, 115 * scaleFactor, 15 * scaleFactor, 200 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(665 * scaleFactor, 460 * scaleFactor, 15 * scaleFactor, 130 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(690 * scaleFactor, 0, 15 * scaleFactor, 715 * scaleFactor, 232, 210, 39));

  // 
  yellowBlocks.push(new YellowBlock(85 * scaleFactor, 45 * scaleFactor, 75 * scaleFactor, 25 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(85 * scaleFactor, 185 * scaleFactor, 75 * scaleFactor, 50 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(110 * scaleFactor, 250 * scaleFactor, 30 * scaleFactor, 60 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(85 * scaleFactor, 555 * scaleFactor, 80 * scaleFactor, 60 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(200 * scaleFactor, 325 * scaleFactor, 50 * scaleFactor, 15 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(290 * scaleFactor, 265 * scaleFactor, 50 * scaleFactor, 145 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(615 * scaleFactor, 350 * scaleFactor, 80 * scaleFactor, 35 * scaleFactor, 232, 210, 39));
  yellowBlocks.push(new YellowBlock(615 * scaleFactor, 520 * scaleFactor, 80 * scaleFactor, 30 * scaleFactor, 232, 210, 39));
  
}

function createCars(){
  
  cars = []; // Reset the array
  // Create a car with the color red
  car1 = new Rectangle(100, 100, 100, 50, 255, 0, 0);
  // Create a car with the color blue
  car2 = new Rectangle(200, 200, 100, 50, 0, 0, 255);


  // Add the cars to the array
  cars.push(car1);
  cars.push(car2);
}