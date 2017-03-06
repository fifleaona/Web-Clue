function Game(arr)
{
  // INITIALIZATION
  this.deck = new Cards();
  this.deck.buildDeck();
  
  this.players = [];
  for(var i=0; i<arr.length; i++)
  {
    this.players[i] = new Player(arr[i].playerName, arr[i].charName);
  }
  
  this.boardBkgCanvas = $('#boardCanvas');
  this.boardBkgCtx = this.boardBkgCanvas.getContext('2d');
  this.boardBkgImg = new Image();
  this.boardBkgWidth = 0;
  this.boardBkgHeight = 0;
  
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
    this.deck.dealCards(this.players);
	// set up game board:
	// --- board background
	this.boardBkgWidth = this.boardBkgCanvas.width = boardBkgCanvas.width();
	this.boardBkgHeight = this.boardBkgCanvas.height = boardBkgCanvas.height();
	
	this.boardBkgImg.src = '../imgs/foundation.png';
	this.boardBkgImg.onload = function()
	{
	  this.boardBkgCtx.drawImage(this.boardBkgImg, 0, 0, this.boardBkgWdith, this.boardBkgHeight);
	};
	// --- each player's canvas layer
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