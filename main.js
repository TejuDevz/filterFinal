noseX = 0;
noseY = 0;

function preload() {
  img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
  img2 = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("pose net is initialized");
}

function gotPoses(results) {
  if (results.length > 0) {
    noseX = results[0].pose.nose.x - 14;
    noseY = results[0].pose.nose.y + 2;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(img, noseX, noseY, 30, 30);
  image(img2, noseX, noseY + 15, 30, 30);
}

function take_snapshot() {
  save("FilterNose.png");
}
