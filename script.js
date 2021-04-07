let
  canv = document.getElementById('canvas'),
  ctx = canv.getContext('2d'),
  isMouseDown = false,
  input = document.getElementById('input'),
  dot = document.getElementById('dot'),
  sizeValue,
  color = document.getElementById('color'),
  colorValue,
  clear = document.getElementById('clear');

canv.width = window.innerWidth;
canv.height = window.innerHeight - 50;

//code
clear.addEventListener('click', function() {
  ctx.clearRect(0, 0, canv.width, canv.height);
});

color.addEventListener('input', function () {
  colorValue = this.value;
  dot.style.background = colorValue;
});

input.addEventListener('input', function () {
  sizeValue = this.value;
  dot.style.width = sizeValue * 2 + 'px';
  dot.style.height = sizeValue * 2 + 'px';

});

canv.addEventListener('mousedown', function () {
  isMouseDown = true;
});
canv.addEventListener('mouseup', function () {
  isMouseDown = false;
  ctx.beginPath();
});

canv.addEventListener('mousemove', function (e) {
  if (isMouseDown) {

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.lineWidth = sizeValue * 2;
    ctx.fillStyle = colorValue;
    ctx.strokeStyle = colorValue;

    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, sizeValue, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

});