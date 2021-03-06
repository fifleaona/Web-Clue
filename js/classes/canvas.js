function Canvas(id)
{
  this.canvas = document.getElementById(id);
  this.canvasId = id;
 
  this.ctx = this.canvas.getContext("2d");
  
  this.img = null;
 
  this.spaceSelection = false;
  var scope = this;
  this.squareSize = 25;

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
	this.ctx.fillStyle = this.ctx.strokeStyle = color;
  }
  
  this.setStrokeSize = function(num)
  {
    this.ctx.lineWidth = num;
  }
  
  this.getImgSize = function()
  {
	return new Point(this.img.width, this.img.height);
  }
  
  this.drawLine = function(startPoint, endPoint, mod)
  {
	//this.setStrokeSize(5);
    //this.ctx.beginPath();
	//this.ctx.moveTo(startPoint.x*mod, startPoint.y*mod);
	this.ctx.lineTo(endPoint.x*mod, endPoint.y*mod);
	this.ctx.stroke();
  }
  
  this.drawSquare = function(startPoint, modifier)
  {
	if(modifier==0 || modifier==null)
	{
	  modifier = 1;
	}
	
    var rtTopCnr = new Point(startPoint.x+1, startPoint.y);
    var rtBtmCnr = new Point(startPoint.x+1, startPoint.y+1);
    var lftBtmCnr = new Point(startPoint.x, startPoint.y+1);
	
	this.ctx.moveTo(startPoint.x*modifier, startPoint.y*modifier);
	this.ctx.lineTo(rtTopCnr.x*modifier, rtTopCnr.y*modifier);
	this.ctx.lineTo(rtBtmCnr.x*modifier, rtBtmCnr.y*modifier);
	this.ctx.lineTo(lftBtmCnr.x*modifier, lftBtmCnr.y*modifier);
	this.ctx.lineTo(startPoint.x*modifier, startPoint.y*modifier);
  }
  
  this.drawEmptySquare = function(startPoint,modifier)
  {
	this.ctx.beginPath();
	
	this.drawSquare(startPoint, modifier);
	
	this.ctx.stroke();
  }
  
  this.drawFilledSquare = function(startPoint, modifier)
  {
	this.ctx.beginPath();
	
	this.drawSquare(startPoint, modifier);
	
	this.ctx.fill();
  }
  
  this.drawShape = function(ptArr, modifier)
  {
    if(modifier==0 || modifier==null)
	{
	  modifier=1;
	}
	
	this.ctx.moveTo(ptArr[0].x*modifier,ptArr[0].y*modifier);
	
	for(var i=1; i<ptArr.length; i++)
	{
	  this.ctx.lineTo(ptArr[i].x*modifier,ptArr[i].y*modifier);
	}
	
	this.ctx.lineTo(ptArr[0].x*modifier,ptArr[0].y*modifier);
  }
  
  this.drawFilledShape = function(ptArr, mod)
  {
    this.ctx.beginPath();
	this.drawShape(ptArr,mod);
	this.ctx.fill();
  }
  
  this.drawEmptyShape = function(ptArr, mod)
  {
    this.ctx.beginPath();
	this.drawShape(ptArr,mod);
	this.ctx.stroke();
  }
  
  this.drawCircle = function(centerPoint, modifier, radius)
  {
    if(modifier==0 || modifier==null)
	{
	  modifier = 1;
	}
	
	if(radius==0 || radius==null)
	{
	  radius = 1;
	}
	
	this.ctx.arc((centerPoint.x * modifier) + radius, (centerPoint.y * modifier) + radius, radius, 0, 2 * Math.PI, true);
  }
  
  this.drawFilledCircle = function(centerPoint, modifier, radius)
  {
    this.ctx.beginPath();
	this.drawCircle(centerPoint, modifier, radius);
	this.ctx.fill();
  }
  
  this.drawEmptyCircle = function(centerPoint, modifier, radius)
  {
    this.ctx.beginPath();
	this.drawCircle(centerPoint, modifier, radius);
	this.ctx.stroke();
  }
  
  this.clear = function()
  {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  this.convertClick = function(e, type, squareSize)
  {
    var newPoint = null;
	if(e==null)
	{
	  console.log("Error: Must pass click event")
    }
	else
	{
      var newX = e.pageX - $("#" + this.canvasId).offset().left;
	  var newY = e.pageY - $("#" + this.canvasId).offset().top;
	  // 'raw' used for drawing
	  if(type=='raw' || type=='RAW' || type=='Raw')
	  {
	    newPoint = new Point(newX, newY);
	  }
	  else
	  {
	    if(squareSize)
	    {
	      newX = Math.floor(newX/squareSize);
	      newY = Math.floor(newY/squareSize);
	    }
	    else
	    {
	      console.log("Error: The square size of the board must be passed");
	    }
	  
	    newPoint = new Point(newX, newY);
	  }
	}
	return newPoint;
  }
  
  this.setDimensions = function(w,h)
  {
    this.canvas.width = w;
	this.canvas.height = h;
  }
  
  // to be gotten rid of eventually 
  
  
  this.updateTileSize = function(newSqSz)
  {
    this.radius = newSqSz/2;
	this.squareSize = newSqSz;
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