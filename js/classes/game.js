function Game(arr)
{
  // INITIALIZATION
  this.deck = new Cards();
  //this.deck.buildDeck();
  
  this.players = [];
  for(var i=0; i<arr.length; i++)
  {
    this.players[i] = new Player(arr[i].playerName, arr[i].charName);
  }
  
  this.board = new Canvas('boardCanvas');
  
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
  this.setGame = function()
  {
	
    //this.deck.dealCards(this.players);
	// set up game board:
	// --- board background
	this.board.setValues('../imgs/foundation.png','#000000');
	// --- each player's canvas layer
	for(var i=0; i<this.players.length; i++)
	{
	  this.players[i].assignDiv(i, 650, 675);
	  this.players[i].piece.drawPiece(this.players[i].position);
	}
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