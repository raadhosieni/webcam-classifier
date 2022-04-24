let video;
let classifier;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", video, modelReady);
  background(0);
}

function draw() {
  Image(video, 0, 0);
}

function modelReady() {
  console.log("Model is ready");
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error.message);
  } else {
    fill(0);
    textSize(64);
    text(results[0].label, 10, 100);
  }
}
