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
  image(video, 0, 0, width, height);
}

function modelReady() {
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  alert("got results");
  if (error) {
    console.error(error.message);
  } else {
    fill(0);
    textSize(64);
    text(results[0].label, 10, height - 100);
  }
}
