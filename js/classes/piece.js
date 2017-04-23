function Piece(id,r,pos,c)
{
  this.canvas = new Canvas(id);
  this.canvas.setStyleColor(c);
  
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
	var translatePos = null;
    if(pos!=null)
	{
	  this.canvas.clear();
	  this.position.updatePoint(pos);
	}
	
	this.canvas.drawFilledCircle(pos, this.radius*2, this.radius);
  }
}