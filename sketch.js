function setup() {
  createCanvas(400, 400);
  frameRate(5)
}

function draw() {
  background(220);
  text("gamepad", 50, 100);
  text("gamepad", 50, 130);
  if (buttonValue.length > 0) {
    console.log(buttonValue);
  }
  // console.log(axesValue);
  runningElem.textContent = ((performance.now() * 0.001 * 60 | 0) % 100).toString().padStart(2, '0');
  addNewPads(); // some browsers add by polling, others by event

  Object.values(gamepadsByIndex).forEach(processController);
  buttonValue = [];

  requestAnimationFrame(process);
}






















