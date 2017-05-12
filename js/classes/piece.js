function Piece(id,r,pos)
{
  this.canvas = new Canvas(id);
  
  this.radius = r;
  this.move = false;
  this.position = new Point(pos);
  
  this.updateRadius = function(r)
  {
    this.radius = r;
  }
  
  this.toggleMove = function()
  {
    if(this.move)
	{
	  this.move = false;
	}
	else
	{
      this.move = true;
	}
  }
  
  this.draw = function(pos)
  {
	
    if(pos!=null)
	{
	  this.canvas.clear();
	  this.position.updatePoint(pos);
	}
	
	this.canvas.drawFilledCircle(pos, this.radius*2, this.radius);
  }
  
  this.setDim = function(w,h)
  {
    this.canvas.setDimensions(w,h);
  }
  
  this.setStyleColor = function(color)
  {
    this.canvas.setStyleColor(color);
  }
}