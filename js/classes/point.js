function Point(x1, y1)
{
  if(x1!=undefined && y1!=undefined)
  {
    this.x = x1;
	this.y = y1;
  }
  else if(y1==undefined)
  {
    this.x = x1.x;
	this.y = x1.y;
  }
  else
  {
    this.x = 0;
	this.y = 0;
  }
  
  this.updatePoint = function(newX,newY)
  {
	if(newX == undefined && newY == undefined)
	{
	  console.log("Error: must pass valid x and y values, or a point");
	}
	else if( newY == undefined )
	{
      this.x = newX.x;
      this.y = newX.y;
	}
	else
	{
      this.x = newX;
      this.y = newY;
	}
  }
}