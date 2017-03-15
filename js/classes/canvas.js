function Canvas(id)
{
  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");
  this.img = null;
  
  this.squareSize = 25;
  this.radius = 25/2;
  
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
	this.ctx.arc((pos.x*this.squareSize)-this.radius, (pos.y*this.squareSize)-this.radius, this.radius, 0, 2*Math.PI, true);
	//this.ctx.arc(pos.x,pos.y,50,0,2*Math.PI);
	this.ctx.fill();
	this.ctx.closePath();
	
    //this.ctx.beginPath();
    //this.ctx.rect(pos.x*this.squareSize, pos.y, 50, 50);
    //this.ctx.fill();
    //this.ctx.closePath();
	
	//this.ctx.beginPath();
    //this.ctx.arc(100,75,50,0,2*Math.PI);
    //this.ctx.stroke(); 
	
  }
  
  this.updateTileSize = function(newSqSz)
  {
    this.radius = newSqSz/2;
	this.squareSize = newSqSz;
  }
}