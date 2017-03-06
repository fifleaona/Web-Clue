function Canvas()
{
  // point variables
  this.clickX =[];
  this.clickY = [];
  this.clickDrag = [];
  this.mouseX = 0;
  this.mouseY = 0;
  this.paint = false;
  this.paintColor = '#df4b26';
  this.brushWidth = 3;

  // canvas variables
  this.canvas = $(id);
  this.ctx = this.canvas.getContext("2d");
  this.img = new Image();
  this.width = 0;
  this.height = 0;
	
  // function declarations
  this.initialize = function(img_src, div){};
  this.togglePaint = function(){};
	
  // function definitions
  this.initialize(img_src, div)
  {
    this.width = $(div).width();
    this.height = $(div).width();
		
    this.canvas.width = this.width;
    this.canvas.height = this.height;
		
    this.img.src = img_src;
    this.img.onload = function()
    {
      this.ctx.drawImage(this.img, 0, 0, this.width, this.height);
    }
  }
	
  this.togglePaint(event)
  {
    if(this.paint == true)
    {
      this.paint = false;
    }
    else
    {
      this.paint = true;
    }
  }
	
  this.paint(event)
  {
    if(paint)
    {
      // find out about add click
      redraw(this.ctx, this.width, this.height, this.paintColor, this.brushWidth, this.clickX, this.clickY, this.clickDrag);
    }
		
  }
	
  this.startPaint(event)
  {
    this.mouseX = event.pageX - this.offsetLeft;
    this.mouseY = event.pageY - this.offsetTop;
		
    paint = true;
		
    this.paint(event);
  }
}