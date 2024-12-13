let video;
let bodyPose;
let poses = [];
let ripples = [];
let lastRippleTime = 0;

function preload() {
  bodyPose = ml5.bodyPose(); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  bodyPose.detectStart(video, gotPoses); 
  noStroke();
}

function gotPoses(results) {
  poses = results;
}

function draw() {
  drawWaterBackground();

  //camera feed (can be hidden by commenting out this line)
  image(video, 0, 0, width, height);

  for (let ripple of ripples) {
    ripple.display();
  }

  let currentTime = millis();

  if (currentTime - lastRippleTime >= 500) {
    for (let i = 0; i < poses.length; i++) {
      let keypoints = poses[i].keypoints;

      for (let keypoint of keypoints) {
        if (keypoint.confidence > 0.2) {
          ripples.push(new Ripple(keypoint.x, keypoint.y));
        }
      }
    }
    lastRippleTime = currentTime;
  }
}

function drawWaterBackground() {
  background(255, 255, 255, 20); 
  
  noStroke();
  for (let x = 0; x < width; x += 5) { 
    for (let y = 0; y < height; y += 5) {
      let noiseValue = noise(x * 0.03, y * 0.03, frameCount * 0.01); 
      let colorVal = map(noiseValue, 0, 1, 30, 220); 

      fill(58, 124, 194, colorVal);
      rect(x, y, 5, 5); 
    }
  }
}


