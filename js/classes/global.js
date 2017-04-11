Array.prototype.randomElement = function ()
{
  return this[Math.floor(Math.random() * this.length)];
}

function Global()
{
	// INITIALIZE VARIABLES
	// player info
	numPlayers = 0;
	playerArr = [];
	
	// set colour constant values
	BLACK = '#000000';
	BLUE = '#300571';
	GREEN = '#499500';
	PURPLE = '#65016C';
	RED = '#920031';
	WHITE = '#ffffff';
	YELLOW = '#D2F700';
	
	// square sizes
	sqrSize = 25;
	radius = sqrSize / 2;
	
	// FUNCTION DECLARATIONS
	//addPlayer = function(cName){};
	
	// FUNCTION DEFINITIONS
	//addPlayer(cName)
	//{
	//	var newPlayer = new Player();
	//	newPlayer.setCharacter(cName);
	//	playerArr.push(newPlayer);
	//}
}