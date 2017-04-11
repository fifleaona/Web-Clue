function Canvas(id)
{
  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");
  this.img = null;
  
  this.squareSize = 25;
  this.radius = 25/2;
  
  this.drawable = false;
  this.clickX = [];
  this.clickY = [];
  this.clickDrag = [];
  
  this.setValues = function(imgsrc, color)
  {
	if(imgsrc != 'none')
	{
	  var scope = this;
	  this.img = new Image();
      this.img.src = imgsrc;
	  this.canvas.width = this.img.width;
	  this.canvas.height = this.img.height;
	  
	  this.img.onload = function()
	  {
		scope.canvas.width = scope.img.width;
		scope.canvas.height = scope.img.height;
	    scope.ctx.drawImage(scope.img, 0, 0, scope.img.width, scope.img.height);
	  }
	}
	this.ctx.strokeStyle = this.ctx.fillStyle = color;
  }
  
  this.drawPiece = function(pos)
  {
    this.ctx.beginPath();
	this.ctx.arc((pos.x*this.squareSize)+this.radius, (pos.y*this.squareSize)+this.radius, this.radius, 0, 2*Math.PI, true);
	this.ctx.fill();	
  }
  
  this.drawLine = function(startPoint, endPoint)
  {
    this.ctx.beginPath();
	this.ctx.moveTo(startPoint.x*this.squareSize, startPoint.y*this.squareSize);
	this.ctx.lineWidth = 2;
	this.ctx.lineTo(endPoint.x*this.squareSize, endPoint.y*this.squareSize);
	this.ctx.stroke();
  }
  
  this.drawSquare = function(startPoint)
  {
    rtTopCnr = new Point(startPoint.x+1, startPoint.y);
    rtBtmCnr = new Point(startPoint.x+1, startPoint.y+1);
    lftBtmCnr = new Point(startPoint.x, startPoint.y+1);
	this.ctx.beginPath();
	this.ctx.moveTo(startPoint.x*this.squareSize, startPoint.y*this.squareSize);
	this.ctx.lineWidth = 2;
	this.ctx.lineTo(rtTopCnr.x*this.squareSize, rtTopCnr.y*this.squareSize);
	this.ctx.lineTo(rtBtmCnr.x*this.squareSize, rtBtmCnr.y*this.squareSize);
	this.ctx.lineTo(lftBtmCnr.x*this.squareSize, lftBtmCnr.y*this.squareSize);
	this.ctx.lineTo(startPoint.x*this.squareSize, startPoint.y*this.squareSize);
	this.ctx.stroke();
  }
  
  this.updateTileSize = function(newSqSz)
  {
    this.radius = newSqSz/2;
	this.squareSize = newSqSz;
  }
  
  this.toggleDrawable = function()
  {
    if(this.drawable)
	{
	  this.drawable = false;
	}
	else
	{
	  this.drawable = true;
	}
  }
  
  this.redraw = function()
  {
  }
}