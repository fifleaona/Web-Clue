function Dice(num)
{
  this.sides = [1,2,3,4,5,6];
  this.numDice = num;
  this.currentRoll = 0;
  var scope = this;
  
  this.roll = function()
  {
    this.currentRoll = 0;
    for(var i = 0; i< this.numDice; i++)
	{
	  this.currentRoll += this.sides.randomElement();
	}
  }
  
  this.increment = function()
  {
    this.currentRoll++;
  }
  
  this.decrement = function()
  {
    this.currentRoll--;
  }
  
  this.getVal = function()
  {
    return this.currentRoll;
  }
}