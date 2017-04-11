function Room()
{
  this.perimeter = [];
  this.doors = [];
  
  this.hasSecretPassage = false;
  
  this.setBallroom = function()
  {
    this.perimeter.push(new Point(17,10));
    this.perimeter.push(new Point(25,10));
    this.perimeter.push(new Point(25,17));
    this.perimeter.push(new Point(20,17));
    this.perimeter.push(new Point(20,16));
    this.perimeter.push(new Point(17,16));
	
	this.doors.push([new Point(18,10), new Point(19,10)]);
	this.doors.push([new Point(17,13), new Point(17,14)]);
  }
  
  this.setCave = function()
  {
	this.hasSecretPassage = true;
	// secret passage to tower
    this.perimeter.push(new Point(2,20));
    this.perimeter.push(new Point(6,20));
    this.perimeter.push(new Point(6,21));
    this.perimeter.push(new Point(7,21));
    this.perimeter.push(new Point(7,25));
    this.perimeter.push(new Point(1,25));
    this.perimeter.push(new Point(1,21));
    this.perimeter.push(new Point(2,21));
	
	this.doors.push(["tower"]);
	this.doors.push([new Point(6,20), new Point(6,21)]);
  }
  
  this.setCottage = function()
  {
    this.hasSecretDoor = true;
	// secret passage to kitchen
	
    this.perimeter.push(new Point(1,1));
	this.perimeter.push(new Point(7,1));
	this.perimeter.push(new Point(7,5));
	this.perimeter.push(new Point(1,5));
	
	this.doors.push([new Point(6,5),new Point (7,5)]);
  }
  
  this.setForest = function()
  {
    this.perimeter.push(new Point(9,18));
    this.perimeter.push(new Point(17,18));
    this.perimeter.push(new Point(17,24));
    this.perimeter.push(new Point(15,24));
    this.perimeter.push(new Point(15,26));
    this.perimeter.push(new Point(11,26));
    this.perimeter.push(new Point(11,24));
    this.perimeter.push(new Point(9,24));
	
	this.doors.push([new Point(17,20), new Point(17,21)]);
	this.doors.push([new Point(9,20), new Point(9,21)]);
	this.doors.push([new Point(10,18), new Point(11,18)]);
	this.doors.push([new Point(15,18), new Point(16,18)]);
  }
  
  this.setGarden = function()
  {
    this.perimeter.push(new Point(9,1));
    this.perimeter.push(new Point(16,1));
    this.perimeter.push(new Point(16,8));
    this.perimeter.push(new Point(9,8));
	
	this.doors.push([new Point(9,5), new Point(9,6)]);
	this.doors.push([new Point(11,8), new Point(13,8)]);
  }
  
  this.setGrotto = function()
  {
    this.perimeter.push(new Point(1,13));
    this.perimeter.push(new Point(6,13));
    this.perimeter.push(new Point(6,18));
    this.perimeter.push(new Point(1,18));
	
	this.doors.push([new Point(6,16), new Point(6,17)]);
  }
  
  this.setKitchen = function()
  {
	this.setSecretPassage = true;
	// secret passage to cottage
	
    this.perimeter.push(new Point(19,19));
    this.perimeter.push(new Point(24,19));
    this.perimeter.push(new Point(24,20));
    this.perimeter.push(new Point(25,20));
    this.perimeter.push(new Point(25,25));
    this.perimeter.push(new Point(19,25));
	
	this.doors.push(["cottage"]);
	this.doors.push([new Point(20,19), new Point(21,19)]);
  }
  
  this.setTent = function()
  {
    this.perimeter.push(new Point(1,8));
    this.perimeter.push(new Point(2,8));
    this.perimeter.push(new Point(2,7));
    this.perimeter.push(new Point(6,7));
    this.perimeter.push(new Point(6,8));
    this.perimeter.push(new Point(7,8));
    this.perimeter.push(new Point(7,11));
    this.perimeter.push(new Point(6,11));
    this.perimeter.push(new Point(6,12));
    this.perimeter.push(new Point(1,12));
	
	this.doors.push([new Point(7,9), new Point(7,10)]);
  }
  
  this.setTower = function()
  {
    this.hasSecretPassage = true;
	// secret passage to cave
	
    this.perimeter.push(new Point(18,2));
    this.perimeter.push(new Point(19,2));
    this.perimeter.push(new Point(19,1));
    this.perimeter.push(new Point(25,1));
    this.perimeter.push(new Point(25,7));
    this.perimeter.push(new Point(18,7));
  
    // assign doors
	this.doors.push(["tower"]);
	this.doors.push([new Point(18,7), new Point(19,7)]);
  }

}