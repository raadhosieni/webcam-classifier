let video;
let classifier;

function setup() {
  createCanvas(600, 400);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", vedio, modelReady);
  background(0);
}

function draw() {
  Image(0, 0, vedio);
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
