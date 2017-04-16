function Canvas(id)
{
  this.spaces = null;
  this.canvas = document.getElementById(id);
  this.canvasId = id;
 
  
  this.ctx = this.canvas.getContext("2d");
  this.img = null;
  
  this.squareSize = 25;
  this.radius = 25/2;
  this.paint = false;
  this.drawable = false;
  this.spaceSelection = false;
  this.clickPoint = [];
  this.clickDrag = [];
  this.mousePoint = new Point(0,0);
  this.movePiece = false;
  var scope = this;
  
   if(id=='spaces')
  {
    this.canvas.height = 675;
    this.canvas.width = 650;
    this.spaces = new Graph();
    // x = 1
	this.spaces.addEdge(new Point(1,6), new Point(2,6));
	this.spaces.addEdge(new Point(1,19), new Point(2,19));
	
	// x = 2
	this.spaces.addEdge(new Point(2,6), new Point(3,6));
	this.spaces.addEdge(new Point(2,6), new Point(2,5));
	this.spaces.addEdge(new Point(2,5), new Point(3,5));
	
	this.spaces.addEdge(new Point(2,12), new Point(3,12));
	
	this.spaces.addEdge(new Point(2,19), new Point(3,19));
	this.spaces.addEdge(new Point(2,19), new Point(2,18));
	this.spaces.addEdge(new Point(2,18), new Point(3,18));
	
	// x = 3
	this.spaces.addEdge(new Point(3,5), new Point(4,5));
	this.spaces.addEdge(new Point(3,5), new Point(3,6));
	this.spaces.addEdge(new Point(3,6), new Point(4,6));
	
	this.spaces.addEdge(new Point(3,12), new Point(4,12));
	
	this.spaces.addEdge(new Point(3,19), new Point(4,19));
	this.spaces.addEdge(new Point(3,19), new Point(3,18));
	this.spaces.addEdge(new Point(3,18), new Point(4,18));
	
	// x = 4
	this.spaces.addEdge(new Point(4,5), new Point(5,5));
	this.spaces.addEdge(new Point(4,5), new Point(4,6));
	this.spaces.addEdge(new Point(4,6), new Point(5,6));
	
	this.spaces.addEdge(new Point(4,12), new Point(5,12));
	
	this.spaces.addEdge(new Point(4,18), new Point(5,18));
	this.spaces.addEdge(new Point(4,18), new Point(4,19));
	this.spaces.addEdge(new Point(4,19), new Point(5,19));
	
	// x = 5
	this.spaces.addEdge(new Point(5,5), new Point(6,5));
	this.spaces.addEdge(new Point(5,5), new Point(5,6));
	this.spaces.addEdge(new Point(5,6), new Point(6,6));
	
	this.spaces.addEdge(new Point(5,12), new Point(6,12));
	
	this.spaces.addEdge(new Point(5,18), new Point(6,18));
	this.spaces.addEdge(new Point(5,18), new Point(5,19));
	this.spaces.addEdge(new Point(5,19), new Point(6,19));
	
	// x = 6
	this.spaces.addEdge(new Point(6,5), "Cottage");
	this.spaces.addEdge(new Point(6,5), new Point(7,5));
	this.spaces.addEdge(new Point(6,5), new Point(6,6));
	this.spaces.addEdge(new Point(6,6), new Point(7,6));
	this.spaces.addEdge(new Point(6,6), new Point(6,7));
	this.spaces.addEdge(new Point(6,7), new Point(7,7));
	
	this.spaces.addEdge(new Point(6,12), new Point(6,13));
	this.spaces.addEdge(new Point(6,13), new Point(7,13));
	this.spaces.addEdge(new Point(6,12), new Point(6,11));
	this.spaces.addEdge(new Point(6,11), new Point(7,11));
	this.spaces.addEdge(new Point(6,12), new Point(7,12));
	this.spaces.addEdge(new Point(6,13), new Point(6,14));
	this.spaces.addEdge(new Point(6,14), new Point(7,14));
	this.spaces.addEdge(new Point(6,14), new Point(6,15));
	this.spaces.addEdge(new Point(6,15), new Point(7,15));
	this.spaces.addEdge(new Point(6,15), new Point(6,16));
	this.spaces.addEdge(new Point(6,16), new Point(7,16));
	this.spaces.addEdge(new Point(6,16), "Grotto");
	this.spaces.addEdge(new Point(6,16), new Point(6,17));
	this.spaces.addEdge(new Point(6,17), new Point(7,17));
	this.spaces.addEdge(new Point(6,17), new Point(6,18));
	
	this.spaces.addEdge(new Point(6,18), new Point(7,18));
	this.spaces.addEdge(new Point(6,18), new Point(6,19));
	this.spaces.addEdge(new Point(6,19), new Point(7,19));
	this.spaces.addEdge(new Point(6,19), new Point(6,20));
	this.spaces.addEdge(new Point(6,20), "Cave");
	
	// x = 7
	this.spaces.addEdge(new Point(7,1), new Point(7,2));
	this.spaces.addEdge(new Point(7,2), new Point(8,2));
	this.spaces.addEdge(new Point(7,2), new Point(7,3));
	this.spaces.addEdge(new Point(7,3), new Point(8,3));
	this.spaces.addEdge(new Point(7,3), new Point(7,4));
	this.spaces.addEdge(new Point(7,4), new Point(8,4));
	this.spaces.addEdge(new Point(7,4), new Point(7,5));
	this.spaces.addEdge(new Point(7,5), new Point(8,5));
	this.spaces.addEdge(new Point(7,5), new Point(7,6));
	this.spaces.addEdge(new Point(7,6), new Point(8,6));
	this.spaces.addEdge(new Point(7,6), new Point(7,7));
	this.spaces.addEdge(new Point(7,7), new Point(8,7));
	this.spaces.addEdge(new Point(7,7), new Point(7,8));
	this.spaces.addEdge(new Point(7,8), new Point(8,8));
	this.spaces.addEdge(new Point(7,8), new Point(7,9));
	this.spaces.addEdge(new Point(7,9), new Point(8,9));
	this.spaces.addEdge(new Point(7,9), "Tent");
	this.spaces.addEdge(new Point(7,9), new Point(7,10));
	this.spaces.addEdge(new Point(7,10), new Point(8,10));
	this.spaces.addEdge(new Point(7,10), new Point(7,11));
	this.spaces.addEdge(new Point(7,11), new Point(8,11));
	this.spaces.addEdge(new Point(7,11), new Point(7,12));
	this.spaces.addEdge(new Point(7,12), new Point(8,12));
	this.spaces.addEdge(new Point(7,12), new Point(7,13));
	this.spaces.addEdge(new Point(7,13), new Point(8,13));
	this.spaces.addEdge(new Point(7,13), new Point(7,14));
	this.spaces.addEdge(new Point(7,14), new Point(8,14));
	this.spaces.addEdge(new Point(7,14), new Point(7,15));
	this.spaces.addEdge(new Point(7,15), new Point(8,15));
	this.spaces.addEdge(new Point(7,15), new Point(7,16));
	this.spaces.addEdge(new Point(7,16), new Point(8,16));
	this.spaces.addEdge(new Point(7,16), new Point(7,17));
	this.spaces.addEdge(new Point(7,17), new Point(8,17));
	this.spaces.addEdge(new Point(7,17), new Point(7,18));
	this.spaces.addEdge(new Point(7,18), new Point(8,18));
	this.spaces.addEdge(new Point(7,18), new Point(7,19));
	this.spaces.addEdge(new Point(7,19), new Point(8,19));
	this.spaces.addEdge(new Point(7,19), new Point(7,20));
	this.spaces.addEdge(new Point(7,20), new Point(8,20));
	this.spaces.addEdge(new Point(7,20), new Point(7,21));
	this.spaces.addEdge(new Point(7,21), new Point(8,21));
	this.spaces.addEdge(new Point(7,21), new Point(7,22));
	this.spaces.addEdge(new Point(7,22), new Point(8,22));
	this.spaces.addEdge(new Point(7,22), new Point(7,23));
	this.spaces.addEdge(new Point(7,23), new Point(8,23));
	
	// x = 8
	this.spaces.addEdge(new Point(8,2), new Point(8,3));
	this.spaces.addEdge(new Point(8,3), new Point(8,4));
	this.spaces.addEdge(new Point(8,4), new Point(8,5));
	this.spaces.addEdge(new Point(8,5), "Garden");
	this.spaces.addEdge(new Point(8,5), new Point(8,6));
	this.spaces.addEdge(new Point(8,6), new Point(8,7));
	this.spaces.addEdge(new Point(8,7), new Point(8,8));
	this.spaces.addEdge(new Point(8,8), new Point(9,8));
	this.spaces.addEdge(new Point(8,8), new Point(8,9));
	this.spaces.addEdge(new Point(8,9), new Point(8,10));
	this.spaces.addEdge(new Point(8,10), new Point(8,11));
	this.spaces.addEdge(new Point(8,11), new Point(8,12));
	this.spaces.addEdge(new Point(8,13), new Point(8,14));
	this.spaces.addEdge(new Point(8,14), new Point(8,15));
	this.spaces.addEdge(new Point(8,15), new Point(8,16));
	this.spaces.addEdge(new Point(8,16), new Point(9,16));
	this.spaces.addEdge(new Point(8,16), new Point(8,17));
	this.spaces.addEdge(new Point(8,17), new Point(9,17));
	this.spaces.addEdge(new Point(8,17), new Point(8,18));
	this.spaces.addEdge(new Point(8,18), new Point(8,19));
	this.spaces.addEdge(new Point(8,19), new Point(8,20));
	this.spaces.addEdge(new Point(8,20), "Forest");
	this.spaces.addEdge(new Point(8,20), new Point(8,21));
	this.spaces.addEdge(new Point(8,21), new Point(8,22));
	this.spaces.addEdge(new Point(8,22), new Point(8,23));
	this.spaces.addEdge(new Point(8,23), new Point(8,24));
	this.spaces.addEdge(new Point(8,24), new Point(9,24));
	
	// x = 9
	this.spaces.addEdge(new Point(9,8), new Point(10,8));
	this.spaces.addEdge(new Point(9,16), new Point(10,16));
	this.spaces.addEdge(new Point(9,16), new Point(9,17));
	this.spaces.addEdge(new Point(9,17), new Point(10,17));
	this.spaces.addEdge(new Point(9,24), new Point(10,24));
	
	// x = 10
	this.spaces.addEdge(new Point(10,8), new Point(11,8));
	this.spaces.addEdge(new Point(10,16), new Point(11,16));
	this.spaces.addEdge(new Point(10,16), new Point(10,17));
	this.spaces.addEdge(new Point(10,17), new Point(11,17));
	this.spaces.addEdge(new Point(10,17), "Forest");
	this.spaces.addEdge(new Point(10,24), new Point(10,25));
	
	// x = 11
	this.spaces.addEdge(new Point(11,8), new Point(12,8));
	this.spaces.addEdge(new Point(11,8), "Garden");
	this.spaces.addEdge(new Point(11,16), new Point(12,16));
	this.spaces.addEdge(new Point(11,16), new Point(11,17));
	this.spaces.addEdge(new Point(11,17), new Point(12,17));
	
	// x = 12
	this.spaces.addEdge(new Point(12,8), new Point(13,8));
	this.spaces.addEdge(new Point(12,8), "Garden");
	this.spaces.addEdge(new Point(12,16), new Point(13,16));
	this.spaces.addEdge(new Point(12,16), new Point(12,17));
	this.spaces.addEdge(new Point(12,17), new Point(13,17));
	
	// x = 13
	this.spaces.addEdge(new Point(13,8), new Point(14,8));
	this.spaces.addEdge(new Point(13,16), new Point(14,16));
	this.spaces.addEdge(new Point(13,16), new Point(13,17));
	this.spaces.addEdge(new Point(13,17), new Point(14,17));
	
	// x = 14
	this.spaces.addEdge(new Point(14,8), new Point(15,8));
	this.spaces.addEdge(new Point(14,16), new Point(15,16));
	this.spaces.addEdge(new Point(14,16), new Point(14,17));
	this.spaces.addEdge(new Point(14,17), new Point(15,17));
	
	// x = 15
	this.spaces.addEdge(new Point(15,8), new Point(16,8));
	this.spaces.addEdge(new Point(15,8), new Point(15,9));
	this.spaces.addEdge(new Point(15,9), new Point(16,9));
	this.spaces.addEdge(new Point(15,9), new Point(15,10));
	this.spaces.addEdge(new Point(15,10), new Point(16,10));
	this.spaces.addEdge(new Point(15,10), new Point(15,11));
	this.spaces.addEdge(new Point(15,11), new Point(16,11));
	this.spaces.addEdge(new Point(15,11), new Point(15,12));
	this.spaces.addEdge(new Point(15,12), new Point(16,12));
	this.spaces.addEdge(new Point(15,12), new Point(15,13));
	this.spaces.addEdge(new Point(15,14), new Point(16,14))
	this.spaces.addEdge(new Point(15,14), new Point(15,15));
	this.spaces.addEdge(new Point(15,15), new Point(16,15))
	this.spaces.addEdge(new Point(15,15), new Point(15,16));
	this.spaces.addEdge(new Point(15,16), new Point(16,16));
	this.spaces.addEdge(new Point(15,16), new Point(15,17));
	this.spaces.addEdge(new Point(15,17), new Point(16,17));
	this.spaces.addEdge(new Point(15,17), "Forest");
	this.spaces.addEdge(new Point(15,24), new Point(15,25));
	this.spaces.addEdge(new Point(15,24), new Point(16,24));
	
	// x = 16
	this.spaces.addEdge(new Point(16,2), new Point(17,2));
	this.spaces.addEdge(new Point(16,2), new Point(16,3));
	this.spaces.addEdge(new Point(16,3), new Point(17,3));
	this.spaces.addEdge(new Point(16,3), new Point(16,4));
	this.spaces.addEdge(new Point(16,4), new Point(17,4));
	this.spaces.addEdge(new Point(16,4), new Point(16,5));
	this.spaces.addEdge(new Point(16,5), new Point(17,5));
	this.spaces.addEdge(new Point(16,5), new Point(16,6));
	this.spaces.addEdge(new Point(16,6), new Point(17,6));
	this.spaces.addEdge(new Point(16,6), new Point(16,7));
	this.spaces.addEdge(new Point(16,7), new Point(17,7));
	this.spaces.addEdge(new Point(16,7), new Point(16,8));
	this.spaces.addEdge(new Point(16,8), new Point(17,8));
	this.spaces.addEdge(new Point(16,8), new Point(16,9));
	this.spaces.addEdge(new Point(16,9), new Point(17,9));
	this.spaces.addEdge(new Point(16,9), new Point(16,10));
	this.spaces.addEdge(new Point(16,10), new Point(16,11));
	this.spaces.addEdge(new Point(16,11), new Point(16,12));
	this.spaces.addEdge(new Point(16,12), new Point(16,13));
	this.spaces.addEdge(new Point(16,13), "Ballroom");
	this.spaces.addEdge(new Point(16,13), new Point(16,14));
	this.spaces.addEdge(new Point(16,14), new Point(16,15));
	this.spaces.addEdge(new Point(16,15), new Point(16,16));
	this.spaces.addEdge(new Point(16,16), new Point(17,16));
	this.spaces.addEdge(new Point(16,16), new Point(16,17));
	this.spaces.addEdge(new Point(16,17), new Point(17,17));
	this.spaces.addEdge(new Point(16,24), new Point(17,24));
	
	// x = 17
	this.spaces.addEdge(new Point(17,1), new Point(17,2));
	this.spaces.addEdge(new Point(17,2), new Point(17,3));
	this.spaces.addEdge(new Point(17,3), new Point(17,4));
	this.spaces.addEdge(new Point(17,4), new Point(17,5));
	this.spaces.addEdge(new Point(17,5), new Point(17,6));
	this.spaces.addEdge(new Point(17,6), new Point(17,7));
	this.spaces.addEdge(new Point(17,7), new Point(18,7));
	this.spaces.addEdge(new Point(17,7), new Point(17,8));
	this.spaces.addEdge(new Point(17,8), new Point(18,8));
	this.spaces.addEdge(new Point(17,8), new Point(17,9));
	this.spaces.addEdge(new Point(17,9), new Point(18,9));
	this.spaces.addEdge(new Point(17,16), new Point(18,16));
	this.spaces.addEdge(new Point(17,16), new Point(17,17));
	this.spaces.addEdge(new Point(17,17), new Point(18,17));
	this.spaces.addEdge(new Point(17,17), new Point(17,18));
	this.spaces.addEdge(new Point(17,18), new Point(18,18));
	this.spaces.addEdge(new Point(17,18), new Point(17,19))
	this.spaces.addEdge(new Point(17,19), "Forest");
	this.spaces.addEdge(new Point(17,19), new Point(18,19));
	this.spaces.addEdge(new Point(17,19), new Point(17,20));
	this.spaces.addEdge(new Point(17,20), new Point(18,20));
	this.spaces.addEdge(new Point(17,20), new Point(17,21));
	this.spaces.addEdge(new Point(17,21), new Point(18,21));
	this.spaces.addEdge(new Point(17,21), new Point(17,22));
	this.spaces.addEdge(new Point(17,22), new Point(18,22));
	this.spaces.addEdge(new Point(17,22), new Point(17,23));
	
	// x = 18
	this.spaces.addEdge(new Point(18,7), "Tower");
	this.spaces.addEdge(new Point(18,7), new Point(19,7));
	this.spaces.addEdge(new Point(18,7), new Point(18,8));
	this.spaces.addEdge(new Point(18,8), new Point(19,8));
	this.spaces.addEdge(new Point(18,8), new Point(18,9))
	this.spaces.addEdge(new Point(18,8), "Ballroom");
	this.spaces.addEdge(new Point(18,8), new Point(19,8));
	this.spaces.addEdge(new Point(18,16), new Point(19,16));
	this.spaces.addEdge(new Point(18,16), new Point(18,17));
	this.spaces.addEdge(new Point(18,17), new Point(18,18));
	this.spaces.addEdge(new Point(18,18), new Point(18,19));
	this.spaces.addEdge(new Point(18,19), new Point(18,20));
	this.spaces.addEdge(new Point(18,20), new Point(18,21));
	
	// x = 19
	this.spaces.addEdge(new Point(19,7), new Point(20,7));
	this.spaces.addEdge(new Point(19,7), new Point(19,8));
	this.spaces.addEdge(new Point(19,8), new Point(20,8));
	this.spaces.addEdge(new Point(19,8), new Point(19,9));
	this.spaces.addEdge(new Point(19,9), new Point(20,9));
	//this.spaces.addEdge(new Point(19,16), new Point(20,16));
	//this.spaces.addEdge(new Point(19,16), new Point(19,17));
	this.spaces.addEdge(new Point(19,17), new Point(20,17));
	this.spaces.addEdge(new Point(19,17), new Point(19,18));
	this.spaces.addEdge(new Point(19,18), new Point(20,18));
	
	// x = 20
	this.spaces.addEdge(new Point(20,7), new Point(21,7));
	this.spaces.addEdge(new Point(20,7), new Point(20,8));
	this.spaces.addEdge(new Point(20,8), new Point(21,8));
	this.spaces.addEdge(new Point(20,8), new Point(20,9));
	this.spaces.addEdge(new Point(20,9), new Point(21,9));
	//this.spaces.addEdge(new Point(20,16), new Point(21,16));
	//this.spaces.addEdge(new Point(20,16), new Point(20,17));
	this.spaces.addEdge(new Point(20,17), new Point(21,17));
	this.spaces.addEdge(new Point(20,17), new Point(20,18));
	this.spaces.addEdge(new Point(20,18), "Ballroom");
	this.spaces.addEdge(new Point(20,18), new Point(21,18));
	
	// x = 21
	this.spaces.addEdge(new Point(21,7), new Point(22,7));
	this.spaces.addEdge(new Point(21,7), new Point(21,8));
	this.spaces.addEdge(new Point(21,8), new Point(22,8));
	this.spaces.addEdge(new Point(21,8), new Point(21,9));
	this.spaces.addEdge(new Point(21,9), new Point(22,9));
	//this.spaces.addEdge(new Point(21,16), new Point(22,16));
	//this.spaces.addEdge(new Point(21,16), new Point(21,17));
	this.spaces.addEdge(new Point(21,17), new Point(22,17));
	
	// x = 22
	this.spaces.addEdge(new Point(22,7), new Point(23,7));
	this.spaces.addEdge(new Point(22,7), new Point(22,8));
	this.spaces.addEdge(new Point(22,8), new Point(23,8));
	this.spaces.addEdge(new Point(22,8), new Point(22,9));
	this.spaces.addEdge(new Point(22,9), new Point(23,9));
	//this.spaces.addEdge(new Point(22,16), new Point(23,16));
	//this.spaces.addEdge(new Point(22,16), new Point(22,17));
	this.spaces.addEdge(new Point(22,17), new Point(23,17));
	this.spaces.addEdge(new Point(22,17), new Point(22,18));
	this.spaces.addEdge(new Point(22,18), new Point(23,18));
	
	// x = 23
	this.spaces.addEdge(new Point(23,7), new Point(23,8));
	this.spaces.addEdge(new Point(23,8), new Point(24,8));
	this.spaces.addEdge(new Point(23,8), new Point(23,9));
	//this.spaces.addEdge(new Point(23,16), new Point(23,17));
	this.spaces.addEdge(new Point(23,18), new Point(24,18));
  }
  

  if(id='boardCanvas')
  {
  }

  this.toggleHighlighted = function(nodeIndex, edgeIndex)
  {
    this.spaces.node_list[nodeIndex].toggleHighlighted();
  }
  
  this.setValues = function(imgsrc, color)
  {
	var size = new Point();
	if(imgsrc != 'none')
	{
	  this.img = new Image();
      this.img.src = imgsrc;
	  
	  this.img.onload = function()
	  {
		scope.canvas.width = scope.img.width;
		scope.canvas.height = scope.img.height;
	    scope.ctx.drawImage(scope.img, 0, 0, scope.img.width, scope.img.height);
	    size.updatePoint(scope.img.width, scope.img.height);
	  }
	}
	this.ctx.strokeStyle = this.ctx.fillStyle = color;
  }
  
  this.getImgSize = function()
  {
	return new Point(this.img.width, this.img.height);
  }
  
  this.getNumEdges = function(index)
  {
    return this.spaces.node_list[index].edge_list.length;
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
  
  this.isSpaceHighlighted = function(x,y)
  {
    var findPoint = new Point(x - this.canvas.offsetLeft, y - this.canvas.offsetTop);
	
	findPoint.updatePoint(Math.floor(findPoint.x / this.squareSize), Math.floor(findPoint.y / this.squareSize));
	
	var index = this.spaces.findNode(findPoint);
	if(index != null)
    {
	  return this.spaces.node_list[index].highlighted;
    }
    else
    {
      return false;
    }
  }
  
  this.canvas.addEventListener("mouseleave", function(e)
  {
	if(scope.drawable)
	{
	  scope.paint = false;
	}
  });
  
  this.canvas.addEventListener("mouseup", function(e)
  {
	if(scope.drawable)
	{
      scope.paint = false;
	}
  });
  
  this.canvas.addEventListener("mousemove",function(e)
  {
	if(scope.drawable && scope.paint)
	{
	  scope.addClick(e.pageX, e.pageY, true);
	  scope.redraw();
	}
  });
  
  this.canvas.addEventListener("mousedown",function(e)
  {
	if(scope.drawable)
	{
	  scope.updateClick(e.pageX, e.pageY);
	}
	else if(scope.spaceSelection)
	{
	  // check if it's contained in a highlighted node
	  if(scope.isSpaceHighlighted(e.pageX, e.pageY))
	  {
	    // if it is, move piece
		scope.movePiece = true;
        scope.mousePoint.updatePoint(e.pageX-scope.canvas.offsetLeft, e.pageY-scope.canvas.offsetTop);
	  }
      // if it's not, do nothing
	}
    // if neither, do nothing
  });
}