function Canvas()
{
  // point variables
  clickX =[];
  clickY = [];
  clickDrag = [];
  mouseX = 0;
  mouseY = 0;
  paint = false;
  paintColor = '#df4b26';
  brushWidth = 3;

  // canvas variables
  canvas = document.getElementById(id);
  ctx = canvas.getContext("2d");
  img = new Image();
  width = 0;
  height = 0;
	
  // function declarations
  //initialize = function(img_src, div){};
  togglePaint = function(){};
	
  // function definitions
  initialize = function(img_src, div)
  {
    width = $(div).width();
    height = $(div).width();
		
    canvas.width = width;
    canvas.height = height;
		
    img.src = img_src;
    img.onload = function()
    {
      ctx.drawImage(img, 0, 0, width, height);
    }
  }
	
  togglePaint(event)
  {
    if(paint == true)
    {
      paint = false;
    }
    else
    {
      paint = true;
    }
  }
	
  paint = function(event)
  {
    if(paint)
    {
      // find out about add click
      redraw(ctx, width, height, paintColor, brushWidth, clickX, clickY, clickDrag);
    }
		
  }
	
  startPaint = function(event)
  {
    mouseX = event.pageX - offsetLeft;
    mouseY = event.pageY - offsetTop;
		
    paint = true;
		
    paint(event);
  }
}