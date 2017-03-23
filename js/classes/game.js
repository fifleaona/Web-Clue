function Game(arr)
{
  // INITIALIZATION
  this.deck = new Cards();
  //this.deck.buildDeck();
  
  this.spaces = new Graph();
  
  this.players = [];
  for(var i=0; i<arr.length; i++)
  {
    this.players[i] = new Player(arr[i].playerName, arr[i].charName);
  }
  
  this.board = new Canvas('boardCanvas');
  this.draw = new Canvas('drawCanvas');
  this.rooms = [];
  
  this.walls = this.perimeter = [
	new Point(1,1),
	new Point(8,1),
	new Point(8,2),
	new Point(9,2),
	new Point(9,1),
	new Point(16,1),
	new Point(16,2),
	new Point(17,2),
	new Point(17,1),
	new Point(18,1),
	new Point(18,2),
	new Point(19,2),
	new Point(19,1),
	new Point(25,1),
	new Point(25,7),
	new Point(24,7),
	new Point(24,8),
	new Point(25,8),
	new Point(25,9),
	new Point(24,9),
	new Point(24,10),
	new Point(25,10),
	new Point(25,17),
	new Point(24,17),
	new Point(24,18),
	new Point(25,18),
	new Point(25,19),
	new Point(24,19),
	new Point(24,20),
	new Point(25,20),
	new Point(25,25),
	new Point(19,25),
	new Point(19,24),
	new Point(18,24),
	new Point(18,25),
	new Point(16,25),
	new Point(16,26),
	new Point(10,26),
	new Point(10,25),
	new Point(8,25),
	new Point(8,24),
	new Point(7,24),
	new Point(7,25),
	new Point(1,25),
	new Point(1,21),
	new Point(2,21),
	new Point(2,20),
	new Point(1,20),
	new Point(1,19),
	new Point(2,19),
	new Point(2,18),
	new Point(1,18),
	new Point(1,13),
	new Point(2,13),
	new Point(2,12),
	new Point(1,12),
	new Point(1,8),
	new Point(2,8),
	new Point(2,7),
	new Point(1,7),
	new Point(1,6),
	new Point(2,6),
	new Point(2,5),
	new Point(1,5)
  ]
  
  
  // FUNCTION DEFININTIONS
 this.checkCrime = function(suspect, weapon, room)
  {
    if(this.deck.crime[0] == suspect &&
       this.deck.crime[1] == weapon &&
	   this.deck.crime[2] == room)
    {
      // display "end game" screen
      return true;
    }
    {
      // display "you lost" screen
	  // show the number correct
	  // give user the option to see the crime
      // if this is a pass & play, provide the "pass" option
      return false;
    }
  }
  
  // SET FUNCTIONS
  this.setRooms = function()
  {
    this.rooms.push(new Room());
	this.rooms[0].setBallroom();
	this.rooms.push(new Room());
	this.rooms[1].setCave();
	this.rooms.push(new Room());
	this.rooms[2].setCottage();
	this.rooms.push(new Room());
	this.rooms[3].setForest();
	this.rooms.push(new Room());
	this.rooms[4].setGarden();
	this.rooms.push(new Room());
	this.rooms[5].setGrotto();
	this.rooms.push(new Room());
	this.rooms[6].setKitchen();
	this.rooms.push(new Room());
	this.rooms[7].setTent();
	this.rooms.push(new Room());
	this.rooms[8].setTower();
  }
  
  this.setSpaces = function()
  {
	// x = 1
	this.spaces.addEdge(new Point(1,6), new Point(2,6));
	this.spaces.addEdge(new Point(1,19), new Point(2,19));
	
	// x = 2
	this.spaces.addEdge(new Point(2,6), new Point(2,5));
	this.spaces.addEdge(new Point(2,6), new Point(3,6));
	this.spaces.addEdge(new Point(2,5), new Point(3,5));
	this.spaces.addEdge(new Point(2,11), "grotto");
	this.spaces.addEdge(new Point(2,11), new Point(3,11));
	this.spaces.addEdge(new Point(2,19), new Point(2,18));
	this.spaces.addEdge(new Point(2,19), new Point(3,19));
	this.spaces.addEdge(new Point(2,18), new Point(3,18));
	
	// x = 3
	this.spaces.addEdge(new Point(3,5), new Point(3,6));
	this.spaces.addEdge(new Point(3,5), new Point(4,5));
	this.spaces.addEdge(new Point(3,6), new Point(4,6));
	this.spaces.addEdge(new Point(3,11), new Point(4,11));
	this.spaces.addEdge(new Point(3,18), new Point(3,19));
	this.spaces.addEdge(new Point(3,18), new Point(4,18));
	this.spaces.addEdge(new Point(3,19), new Point(4,19));
	// x = 8
    this.spaces.addEdge(new Point(8,1), new Point(8,2));
	this.spaces.addEdge(new Point(8,2), new Point(9,2));
	this.spaces.addEdge(new Point(8,2), new Point(8,3));
	this.spaces.addEdge(new Point(8,3), new Point(9,3));
	this.spaces.addEdge(new Point(8,3), new Point(8,4));
	this.spaces.addEdge(new Point(8,4), new Point(9,4));
	this.spaces.addEdge(new Point(8,4), new Point(8,5));
	this.spaces.addEdge(new Point(8,5), new Point(9,5));
	
	// x = 9
	this.spaces.addEdge(new Point(9,2), new Point(9,3));
	this.spaces.addEdge(new Point(9,2), new Point(9,3));
	
	console.log(this.spaces);
  }
  
  this.setGame = function()
  {
    //this.deck.dealCards(this.players);
	// set up game board:
	// --- board background
	
	this.setSpaces();
	this.board.setValues('../imgs/foundation.png','#FF2323');
	// --- each player's canvas layer
	for(var i=0; i<this.players.length; i++)
	{
	  this.players[i].assignDiv(i, 650, 675);
	  this.players[i].piece.drawPiece(this.players[i].position);
	}
	
	this.players[0].rollDie();
  }
  
  // GET FUNCTIONS
  this.getPlayerCharacter = function(num)
  {
    return this.players[num-1].character;
  }
  
  this.getPlayerName = function(num)
  {
    return this.player[num-1].playerName;
  }
  
  this.getHand = function(num)
  {
    this.players[num-1].showHand(this.deck);
  }
}