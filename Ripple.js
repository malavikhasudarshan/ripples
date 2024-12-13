let colors = [
  [220, 238, 251, 100], 
  [182, 224, 254, 100], 
  [132, 197, 244, 100],
  [98, 176, 232, 100],  
  [64, 152, 215, 100],  
  [38, 128, 194, 100],  
  [24, 111, 175, 100],  
  [15, 96, 155, 100],   
];

class Ripple {
  constructor(x, y, startTime) {
    this.x = x;
    this.y = y;
    this.color = random(colors);
    this.shape = this.generateBlob();
    this.startTime = millis();;
  }

  generateBlob() {
    let points = [];
    let numVertices = floor(random(8, 14));
    let radius = random(30, 60);
    for (let i = 0; i < numVertices; i++) {
      let angle = TWO_PI / numVertices * i + random(-PI / 10, PI / 10);
      let r = radius + random(-10, 15); //slight variation in radius
      let x = r * cos(angle);
      let y = r * sin(angle);
      points.push([x, y]);
    }
    return points;
  }

  display() {
    fill(...this.color);
    noStroke();
    beginShape();
    for (let [x, y] of this.shape) {
      vertex(this.x + x, this.y + y);
    }
    endShape(CLOSE);
  }
}
