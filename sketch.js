let video;
let classifier;
let label = "";

function setup() {
  createCanvas(540, 480);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  classifier = ml5.imageClassifier("MobileNet", video, modelReady);
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}

function modelReady() {
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error.message);
  } else {
    label = results[0].label;
    classifier.classify(gotResults);
  }
}
