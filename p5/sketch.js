let angle = 0;
let isHovered = false;
let cx = 300, cy = 300, r = 130;

const yellowCircles = [
  { baseAngle: 20,  dist: 130, size: 200 },
  { baseAngle: 110, dist: 130, size: 200 },
  { baseAngle: 200, dist: 130, size: 200 },
  { baseAngle: 290, dist: 130, size: 200 },
];

const pinkCircles = [
  { baseAngle: 70,  dist: 130, size: null },
  { baseAngle: 160, dist: 130, size: null },
  { baseAngle: 250, dist: 130, size: null },
  { baseAngle: 340, dist: 130, size: null },
];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  let mx = mouseX;
  let my = mouseY;
  let d = dist(mx, my, cx, cy);
  isHovered = d < r + 140;

  if (isHovered) {
    angle += 0.015;
  }

  let mappedSize = map(mouseX, 0, 600, 250, 200);

  // Line
  stroke("rgb(103,142,103)");
  strokeWeight(10);
  line(300, 300, 300, 600);

  // Square center
  fill(0);
  noStroke();
  square(265, 265, 70);

  // Square center 2
  fill(0, 80);
  square(225, 225, 150);

  // Square center 3
  fill(0, 100);
  square(200, 200, 200);

  noStroke();

  // Yellow circles — rotate clockwise
  for (let c of yellowCircles) {
    let a = radians(c.baseAngle) + angle;
    let x = cx + c.dist * cos(a);
    let y = cy + c.dist * sin(a);
    fill(255, 244, 79, 120);
    circle(x, y, c.size);
  }

  // Pink circles — rotate anti-clockwise
  for (let c of pinkCircles) {
    let a = radians(c.baseAngle) - angle;
    let x = cx + c.dist * cos(a);
    let y = cy + c.dist * sin(a);
    fill(233, 33, 99, 120);
    circle(x, y, mappedSize);
  }
}