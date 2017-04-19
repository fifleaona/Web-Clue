function Canvas(id)
{
  this.canvas = document.getElementById(id);
  this.canvasId = id;
 
  this.ctx = this.canvas.getContext("2d");
  this.img = null;
  
  this.squareSize = 25;
  this.radius = 25/2;
  
  this.paint = false;
  this.spaceSelection = false;
  this.clickPoint = [];
  this.clickDrag = [];
  this.mousePoint = new Point(0,0);
  this.movePiece = false;
  var scope = this;

  this.toggleHighlighted = function(nodeIndex, edgeIndex)
  {
    this.spaces.node_list[nodeIndex].toggleHighlighted();
  }
  
  this.setImg = function(imgsrc)
  {
    this.img = new Image();
	this.img.src = imgsrc;
	
	this.img.onload = function()
	{
	  scope.canvas.width = scope.img.width;
	  scope.canvas.height = scope.img.height;
	  scope.ctx.drawImage(scope.img, 0, 0, scope.img.width, scope.img.height);
	}
  }
  
  this.setStyleColor = function(color)
  {
	this.ctx.strokeStyle = this.ctx.fillStyle = color;
  }
  
  this.getImgSize = function()
  {
	return new Point(this.img.width, this.img.height);
  }
  
  this.drawPiece = function(pos)
  {
    this.ctx.beginPath();
	this.ctx.arc((pos.x*this.squareSize)+this.radius, (pos.y*this.squareSize)+this.radius, this.radius, 0, 2*Math.PI, true);
	this.ctx.fill();	
  }

  this.redrawPiece = function(pos)
  {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawPiece(pos);
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
  
  this.togglePaint = function(val)
  {
	if(val==null)
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
	else
	{
	  this.paint = val;
	}
  }
  
  this.toggleSpaceSelection = function()
  {
    if(this.spaceSelection)
	{
      this.spaceSelection = false;
	}
	else
	{
	  this.spaceSelection = true;
	}
  }
  
  this.redraw = function()
  {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	for(var i=0; i < this.clickPoint.length; i++)
    {
	  this.ctx.beginPath();
	  if(this.clickDrag[i] && i)
	  {
	    this.ctx.moveTo(this.clickPoint[i-1].x, this.clickPoint[i-1].y);
	  }
	  else
	  {
	    this.ctx.moveTo(this.clickPoint[i].x-1, this.clickPoint[i].y);
	  }
	  this.ctx.lineTo(this.clickPoint[i].x, this.clickPoint[i].y);
	  this.ctx.closePath();
	  this.ctx.stroke();
	}
  }
  
  this.startPaint = function(event)
  {
    this.mousePoint.updatePoint(event.pageX - this.canvas.offsetLeft,
                             	event.pageY - this.canvas.offsetTop);
	
	this.paint = true;
	this.redraw();
  }
  
  this.addClick = function(x,y,dragging)
  {
    this.clickPoint.push(new Point(x-this.canvas.offsetLeft,y-this.canvas.offsetTop));
	this.clickDrag.push(dragging);
  }  
  
  this.updateClick = function(x,y)
  {
    this.mousePoint.updatePoint(x-this.canvas.offsetLeft, y-this.canvas.offsetTop);
	this.togglePaint();
	this.addClick(x,y);
	this.redraw();
  }
  
  //this.canvas.addEventListener("mousedown",function(e)
 // {
	/*if(scope.spaceSelection)
	{
	  // check if it's contained in a highlighted node
	  if(scope.isSpaceHighlighted(e.pageX, e.pageY))
	  {
	    // if it is, move piece
		scope.movePiece = true;
        scope.mousePoint.updatePoint(e.pageX-scope.canvas.offsetLeft, e.pageY-scope.canvas.offsetTop);
	  }
      // if it's not, do nothing
	}**/
    // if neither, do nothing
 // });
}