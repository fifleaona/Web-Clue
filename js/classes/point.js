function Point(x1, y1)
{
  if(x1!=null || y1!=null)
  {
    this.x = x1;
	this.y = y1;
  }
  else
  {
    this.x = 0;
	this.y = 0;
  }

  this.updatePoint = function(x1,y1)
  {
    this.x = x1;
    this.y = y1;
  }
}