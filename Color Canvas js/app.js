const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 15;
ctx.globalCompositeOperation = 'lighten';

let hue = 0;
let direction = true;
let isDrawing = false;
let startX = 0;
let startY = 0;

function draw(e) {
  if(!isDrawing) return; //stop from running if mouse is not pressed

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  //start from
  ctx.lineTo(e.offsetX, e.offsetY);
  //go to
  ctx.stroke();
  [startX, startY] = [e.offsetX, e.offsetY];

  hue >= 360 ? hue = 0 : hue++;
  if(ctx.lineWidth >= 60 || ctx.lineWidth <= 1) {direction = !direction;}
  direction ? ctx.lineWidth++ : ctx.lineWidth--;
};

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [startX, startY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);