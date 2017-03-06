Array.prototype.randomElement = function ()
{
 return this[Math.floor(Math.random() * this.length)];
}

function Global()
{
	// INITIALIZE VARIABLES
	// player info
	this.numPlayers = 0;
	this.playerArr = [];
	
	// set colour constant values
	this.BLACK = '#000000';
	this.BLUE = '#300571';
	this.GREEN = '#499500';
	this.PURPLE = '#65016C';
	this.RED = '#920031';
	this.WHITE = '#ffffff';
	this.YELLOW = '#D2F700';
	
	// square sizes
	this.sqrSize = 25;
	this.radius = this.sqrSize / 2;
	
	// FUNCTION DECLARATIONS
	//this.addPlayer = function(cName){};
	
	// FUNCTION DEFINITIONS
	//this.addPlayer(cName)
	//{
	//	var newPlayer = new Player();
	//	newPlayer.setCharacter(cName);
	//	this.playerArr.push(newPlayer);
	//}
}