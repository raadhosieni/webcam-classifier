let video;
let classifier;
let label;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  classifier = ml5.imageClassifier("MobileNet", video, modelReady);
}

function draw() {
  image(video, width, height);
}

function modelReady() {
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error.message);
  } else {
    label = results[0].label;
    fill(255);
    textSize(64);
    text(label, 10, height - 100);
    text("hi there", 10, height - 140);
    classifier.classify(gotResults);
  }
}
