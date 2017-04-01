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
	this.spaces.addEdge(new Point(2,6), new Point(3,6));
	this.spaces.addEdge(new Point(2,6), new Point(2,5));
	this.spaces.addEdge(new Point(2,5), new Point(3,5));
	
	this.spaces.addEdge(new Point(2,12), new Point(3,12));
	
	this.spaces.addEdge(new Point(2,19), new Point(3,19));
	this.spaces.addEdge(new Point(2,19), new Point(2,18));
	this.spaces.addEdge(new Point(2,18), new Point(3,18));
	
	// x = 3
	this.spaces.addEdge(new Point(3,5), new Point(4,5));
	this.spaces.addEdge(new Point(3,5), new Point(3,6));
	this.spaces.addEdge(new Point(3,6), new Point(4,6));
	
	this.spaces.addEdge(new Point(3,12), new Point(4,12));
	
	this.spaces.addEdge(new Point(3,19), new Point(4,19));
	this.spaces.addEdge(new Point(3,19), new Point(3,18));
	this.spaces.addEdge(new Point(3,18), new Point(4,18));
	
	// x = 4
	this.spaces.addEdge(new Point(4,5), new Point(5,5));
	this.spaces.addEdge(new Point(4,5), new Point(4,6));
	this.spaces.addEdge(new Point(4,6), new Point(5,6));
	
	this.spaces.addEdge(new Point(4,12), new Point(5,12));
	
	this.spaces.addEdge(new Point(4,18), new Point(5,18));
	this.spaces.addEdge(new Point(4,18), new Point(4,19));
	this.spaces.addEdge(new Point(4,19), new Point(5,19));
	
	// x = 5
	this.spaces.addEdge(new Point(5,5), new Point(6,5));
	this.spaces.addEdge(new Point(5,5), new Point(5,6));
	this.spaces.addEdge(new Point(5,6), new Point(6,6));
	
	this.spaces.addEdge(new Point(5,12), new Point(6,12));
	
	this.spaces.addEdge(new Point(5,18), new Point(6,18));
	this.spaces.addEdge(new Point(5,18), new Point(5,19));
	this.spaces.addEdge(new Point(5,19), new Point(6,19));
	
	// x = 6
	this.spaces.addEdge(new Point(6,5), "Cottage");
	this.spaces.addEdge(new Point(6,5), new Point(7,5));
	this.spaces.addEdge(new Point(6,5), new Point(6,6));
	this.spaces.addEdge(new Point(6,6), new Point(7,6));
	this.spaces.addEdge(new Point(6,6), new Point(6,7));
	this.spaces.addEdge(new Point(6,7), new Point(7,7));
	
	this.spaces.addEdge(new Point(6,12), new Point(6,13));
	this.spaces.addEdge(new Point(6,13), new Point(7,13));
	this.spaces.addEdge(new Point(6,12), new Point(6,11));
	this.spaces.addEdge(new Point(6,11), new Point(7,11));
	this.spaces.addEdge(new Point(6,12), new Point(7,12));
	this.spaces.addEdge(new Point(6,13), new Point(6,14));
	this.spaces.addEdge(new Point(6,14), new Point(7,14));
	this.spaces.addEdge(new Point(6,14), new Point(6,15));
	this.spaces.addEdge(new Point(6,15), new Point(7,15));
	this.spaces.addEdge(new Point(6,15), new Point(6,16));
	this.spaces.addEdge(new Point(6,16), new Point(7,16));
	this.spaces.addEdge(new Point(6,16), "Grotto");
	this.spaces.addEdge(new Point(6,16), new Point(6,17));
	this.spaces.addEdge(new Point(6,17), new Point(7,17));
	this.spaces.addEdge(new Point(6,17), new Point(6,18));
	
	this.spaces.addEdge(new Point(6,18), new Point(7,18));
	this.spaces.addEdge(new Point(6,18), new Point(6,19));
	this.spaces.addEdge(new Point(6,19), new Point(7,19));
	this.spaces.addEdge(new Point(6,19), "Cave");
	
	// x = 7
	this.spaces.addEdge(new Point(7,1), new Point(7,2));
	this.spaces.addEdge(new Point(7,2), new Point(8,2));
	this.spaces.addEdge(new Point(7,2), new Point(7,3));
	this.spaces.addEdge(new Point(7,3), new Point(8,3));
	this.spaces.addEdge(new Point(7,3), new Point(7,4));
	this.spaces.addEdge(new Point(7,4), new Point(8,4));
	this.spaces.addEdge(new Point(7,4), new Point(7,5));
	this.spaces.addEdge(new Point(7,5), new Point(8,5));
	this.spaces.addEdge(new Point(7,5), new Point(7,6));
	this.spaces.addEdge(new Point(7,6), new Point(8,6));
	this.spaces.addEdge(new Point(7,6), new Point(7,7));
	this.spaces.addEdge(new Point(7,7), new Point(8,7));
	this.spaces.addEdge(new Point(7,7), new Point(7,8));
	this.spaces.addEdge(new Point(7,8), new Point(8,8));
	this.spaces.addEdge(new Point(7,8), new Point(7,9));
	this.spaces.addEdge(new Point(7,9), new Point(8,9));
	this.spaces.addEdge(new Point(7,9), "Tent");
	this.spaces.addEdge(new Point(7,9), new Point(7,10));
	this.spaces.addEdge(new Point(7,10), new Point(8,10));
	this.spaces.addEdge(new Point(7,10), new Point(7,11));
	this.spaces.addEdge(new Point(7,11), new Point(8,11));
	this.spaces.addEdge(new Point(7,11), new Point(7,12));
	this.spaces.addEdge(new Point(7,12), new Point(8,12));
	this.spaces.addEdge(new Point(7,12), new Point(7,13));
	this.spaces.addEdge(new Point(7,13), new Point(8,13));
	this.spaces.addEdge(new Point(7,13), new Point(7,14));
	this.spaces.addEdge(new Point(7,14), new Point(8,14));
	this.spaces.addEdge(new Point(7,14), new Point(7,15));
	this.spaces.addEdge(new Point(7,15), new Point(8,15));
	this.spaces.addEdge(new Point(7,15), new Point(7,16));
	this.spaces.addEdge(new Point(7,16), new Point(8,16));
	this.spaces.addEdge(new Point(7,16), new Point(7,17));
	this.spaces.addEdge(new Point(7,17), new Point(8,17));
	this.spaces.addEdge(new Point(7,17), new Point(7,18));
	this.spaces.addEdge(new Point(7,18), new Point(8,18));
	this.spaces.addEdge(new Point(7,18), new Point(7,19));
	this.spaces.addEdge(new Point(7,19), new Point(8,19));
	this.spaces.addEdge(new Point(7,19), new Point(7,20));
	this.spaces.addEdge(new Point(7,20), new Point(8,20));
	this.spaces.addEdge(new Point(7,20), new Point(7,21));
	this.spaces.addEdge(new Point(7,21), new Point(8,21));
	this.spaces.addEdge(new Point(7,21), new Point(7,22));
	this.spaces.addEdge(new Point(7,22), new Point(8,22));
	this.spaces.addEdge(new Point(7,22), new Point(7,23));
	this.spaces.addEdge(new Point(7,23), new Point(8,23));
	
	// x = 8
	this.spaces.addEdge(new Point(8,2), new Point(8,3));
	this.spaces.addEdge(new Point(8,3), new Point(8,4));
	this.spaces.addEdge(new Point(8,4), new Point(8,5));
	this.spaces.addEdge(new Point(8,5), "Garden");
	this.spaces.addEdge(new Point(8,5), new Point(8,6));
	this.spaces.addEdge(new Point(8,6), new Point(8,7));
	this.spaces.addEdge(new Point(8,7), new Point(8,8));
	this.spaces.addEdge(new Point(8,8), new Point(9,8));
	this.spaces.addEdge(new Point(8,8), new Point(8,9));
	this.spaces.addEdge(new Point(8,9), new Point(8,10));
	this.spaces.addEdge(new Point(8,10), new Point(8,11));
	this.spaces.addEdge(new Point(8,11), new Point(8,12));
	this.spaces.addEdge(new Point(8,13), new Point(8,14));
	this.spaces.addEdge(new Point(8,14), new Point(8,15));
	this.spaces.addEdge(new Point(8,15), new Point(8,16));
	this.spaces.addEdge(new Point(8,16), new Point(9,16));
	this.spaces.addEdge(new Point(8,16), new Point(8,17));
	this.spaces.addEdge(new Point(8,17), new Point(9,17));
	this.spaces.addEdge(new Point(8,17), new Point(8,18));
	this.spaces.addEdge(new Point(8,18), new Point(8,19));
	this.spaces.addEdge(new Point(8,19), new Point(8,20));
	this.spaces.addEdge(new Point(8,20), "Forest");
	this.spaces.addEdge(new Point(8,20), new Point(8,21));
	this.spaces.addEdge(new Point(8,21), new Point(8,22));
	this.spaces.addEdge(new Point(8,22), new Point(8,23));
	this.spaces.addEdge(new Point(8,23), new Point(8,24));
	this.spaces.addEdge(new Point(8,24), new Point(9,24));
	
	// x = 9
	this.spaces.addEdge(new Point(9,8), new Point(10,8));
	this.spaces.addEdge(new Point(9,16), new Point(10,16));
	this.spaces.addEdge(new Point(9,16), new Point(9,17));
	this.spaces.addEdge(new Point(9,17), new Point(10,17));
	this.spaces.addEdge(new Point(9,24), new Point(10,24));
	
	// x = 10
	this.spaces.addEdge(new Point(10,8), new Point(11,8));
	this.spaces.addEdge(new Point(10,16), new Point(11,16));
	this.spaces.addEdge(new Point(10,16), new Point(10,17));
	this.sapces.addEdge(new Point(10,17), new Point(11,17));
	this.spaces.addEdge(new Point(10,17), "Forest");
	this.spaces.addEdge(new Point(10,24), new Point(10,25));
	
	// x = 11
	this.spaces.addEdge(new Point(11,8), new Point(12,8));
	this.spaces.addEdge(new Point(11,8), "Garden");
	this.spaces.addEdge(new Point(11,16), new Point(12,16));
	this.spaces.addEdge(new Point(11,16), new Point(11,17));
	this.spaces.addEdge(new Point(11,17), new Point(12,17));
	
	// x = 12
	this.spaces.addEdge(new Point(12,8), new Point(13,8));
	this.spaces.addEdge(new Point(12,8), "Garden");
	this.spaces.addEdge(new Point(12,16), new Point(13,16));
	this.spaces.addEdge(new Point(12,16), new Point(12,17));
	this.spaces.addEdge(new Point(12,17), new Point(13,17));
	
	// x = 13
	this.spaces.addEdge(new Point(13,8), new Point(14,8));
	this.spaces.addEdge(new Point(13,16), new Point(14,16));
	this.spaces.addEdge(new Point(13,16), new Point(13,17));
	this.spaces.addEdge(new Point(13,17), new Point(14,17));
	
	// x = 14
	this.spaces.addEdge(new Point(14,8), new Point(15,8));
	this.spaces.addEdge(new Point(14,16), new Point(15,16));
	this.spaces.addEdge(new Point(14,16), new Point(14,17));
	this.spaces.addEdge(new Point(14,17), new Point(15,17));
	
	// x = 15
	this.spaces.addEdge(new Point(15,8), new Point(16,8));
	this.spaces.addEdge(new Point(15,8), new Point(15,9));
	this.spaces.addEdge(new Point(15,9), new Point(16,9));
	this.spaces.addEdge(new Point(15,9), new Point(15,10));
	this.spaces.addEdge(new Point(15,10), new Point(16,10));
	this.spaces.addEdge(new Point(15,10), new Point(15,11));
	this.spaces.addEdge(new Point(15,11), new Point(16,11));
	this.spaces.addEdge(new Point(15,11), new Point(15,12));
	this.spaces.addEdge(new Point(15,12), new Point(16,12));
	this.spaces.addEdge(new Point(15,12), new Point(15,13));
	this.spaces.addEdge(new Point(15,14), new Point(16,14))
	this.spaces.addEdge(new Point(15,14), new Point(15,15));
	this.spaces.addEdge(new Point(15,15), new Point(16,15))
	this.spaces.addEdge(new Point(15,15), new Point(15,16));
	this.spaces.addEdge(new Point(15,16), new Point(16,16));
	this.spaces.addEdge(new Point(15,16), new Point(15,17));
	this.spaces.addEdge(new Point(15,17), new Point(16,17));
	this.spaces.addEdge(new Point(15,17), "Forest"));
	this.spaces.addEdge(new Point(15,24), new Point(15,23));
	this.spaces.addEdge(new POint(15,23), new Point(16,23));
	
	// x = 16
	this.spaces.addEdge(new Point(16,2), new Point(17,2));
	this.spaces.addEdge(new Point(16,2), new Point(16,3));
	this.spaces.addEdge(new Point(16,3), new Point(17,3));
	this.spaces.addEdge(new Point(16,3), new Point(16,4));
	this.spaces.addEdge(new Point(16,4), new Point(17,4));
	this.spaces.addEdge(new Point(16,4), new Point(16,5));
	this.spaces.addEdge(new Point(16,5), new Point(17,5));
	this.spaces.addEdge(new Point(16,5), new Point(16,6));
	this.spaces.addEdge(new Point(16,6), new Point(17,6));
	this.spaces.addEdge(new Point(16,6), new Point(16,7));
	this.spaces.addEdge(new Point(16,7), new Point(17,7));
	this.spaces.addEdge(new Point(16,7), new Point(16,8));
	this.spaces.addEdge(new Point(16,8), new Point(17,8));
	this.spaces.addEdge(new Point(16,8), new Point(16,9));
	this.spaces.addEdge(new Point(16,9), new Point(17,9));
	this.spaces.addEdge(new Point(16,9), new Point(16,10));
	this.spaces.addEdge(new Point(16,10), new Point(16,11));
	this.spaces.addEdge(new Point(16,11), new Point(16,12));
	this.spaces.addEdge(new Point(16,12), new Point(16,13));
	this.spaces.addEdge(new Point(16,13), "Ballroom");
	this.spaces.addEdge(new Point(16,13), new Point(16,14));
	this.spaces.addEdge(new Point(16,14), new Point(16,15));
	this.spaces.addEdge(new Point(16,15), new Point(16,16));
	this.spaces.addEdge(new Point(16,16), new Point(17,16));
	this.spaces.addEdge(new Point(16,16), new Point(16,17));
	this.spaces.addEdge(new Point(16,17), new Point(17,17));
	this.spaces.addEdge(new Point(16,24), new Point(17,24));
	
	// x = 17
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
	this.spaces.addEdge(new Point(
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
	
	//for(var j=0; j<this.spaces.node_list[1].edge_list.length; j++)
	//{
	//  this.players[5].piece.drawSquare(this.spaces.node_list[1].edge_list[j]);
	//}
	
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