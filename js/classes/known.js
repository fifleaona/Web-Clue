function Known(id)
{
  // declare variables
  this.canvas = new Canvas(id);
  this.paint = false;
  this.clickPoint = [];
  this.clickDrag = [];
  this.mousePoint = new Point();
  var scope = this;
  
  this.togglePaint = function()
  {
    if(this.paint)
	{
	  this.paint = false;
	}
    else
    {
	  this.paint = true;
    }	
  }
  
  this.redraw = function()
  {
    this.canvas.clear();
	for(var i=0; i<this.clickPoint.length; i++)
	{
	  this.canvas.ctx.beginPath();
	  if(this.clickDrag[i] && i)
	  {
	    this.canvas.ctx.moveTo(this.clickPoint[i-1].x, this.clickPoint[i-1].y);
	  }
	  else
	  {
	    this.canvas.ctx.moveTo(this.clickPoint[i].x-1, this.clickPoint[i].y);
	  }
	  this.canvas.ctx.lineTo(this.clickPoint[i].x, this.clickPoint[i].y);
	  this.canvas.ctx.closePath();
	  this.canvas.ctx.stroke();
	}
  }
  
  this.addClick = function(addlPoint,dragging)
  {
    this.clickPoint.push(addlPoint);
	this.clickDrag.push(dragging);
  }
  
  this.updateClick = function(updatedPoint)
  {
    this.mousePoint.updatePoint(updatedPoint);
	this.addClick(updatedPoint);
	this.togglePaint();
	this.redraw();
  }
  
  this.startPaint = function(e)
  {
    this.mousePoint.updatePoint(this.canvas.converClick(e,'raw'));
	this.paint = true;
	this.redraw();
  }

  this.canvas.canvas.addEventListener("mouseleave", function(e)
  {
    scope.paint = false;
  });
  
  this.canvas.canvas.addEventListener("mouseup", function(e)
  {
    scope.paint = false;
  });
  
  this.canvas.canvas.addEventListener("mousedown", function(e)
  {
	var updatedPoint = scope.canvas.convertClick(e, 'raw');
    scope.updateClick(updatedPoint);
  });
  
  this.canvas.canvas.addEventListener("mousemove", function(e)
  {
    if(scope.paint)
	{
	  var updatedPoint = scope.canvas.convertClick(e, 'raw');
	  scope.addClick(updatedPoint,true);
	  scope.redraw();
	}
  });
}