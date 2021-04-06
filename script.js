let
    canv = document.getElementById('canvas'),
    ctx = canv.getContext('2d'),
    isMouseDown = false,
    input = document.getElementById('input'),
    dot = document.getElementById('dot'),
    v;
    
  
    
    

    canv.width = window.innerWidth;
    canv.height = window.innerHeight - 50;
   


  //code
  input.addEventListener('input', function() {
    v = this.value;
 
  });





  canv.addEventListener('mousedown', function() {
    isMouseDown = true;
  });
  canv.addEventListener('mouseup', function(){
    isMouseDown = false;
    ctx.beginPath();
  });
  ctx.lineWidth = 10 * 2; 
  canv.addEventListener ('mousemove', function(e) {
      if ( isMouseDown ) 
      {  
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

  });