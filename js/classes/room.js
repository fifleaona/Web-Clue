function Room(name,perimeter,doors,secretPassage)
{
  this.perimeter = perimeter;
  this.spaces = [];
  this.doors = doors;
  this.name = name;
  this.highlighted = false;
  this.hasSecretPassage = secretPassage;
  
  this.draw = function(canvas, mod)
  {
    canvas.drawFilledShape(this.perimeter,25);
  }
  
  this.determineSquares = function()
  {
	this.squares.push(this.perimeter[0]);
    for(var i=this.perimeter[0].x; i<perimeter[1].x; i++)
	{
	  this.squares.push(new Point(i,this.perimeter[0].y));
	}
  }
  
  this.addSpace = function(space)
  {
    this.spaces.push(space);
  }
  
  this.findSpace = function(point)
  {
    for(var i=0; i<this.spaces.length; i++)
	{
	  if(point.x == this.spaces[i].x && point.y == this.spaces[i].y)
	  {
	    return true;
	  }
	}
	return false;
  }
}