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
  
  this.board = {
    canvas: null,
	ctx: null,
	img: null,
	squareSize: 25,
	radius: 25/2,
	setValues: function(div, imgsrc)
	{
	  canvas = document.getElementById(div);
	  ctx = canvas.getContext('2d');
	  
	  img = new Image();
	  img.src = imgsrc;
	  canvas.width = img.width;
	  canvas.height = img.height;
	  img.onload = function()
	  {
	    ctx.drawImage(img,0,0, img.width, img.height);
	  }
	},
	updateTileSize: function(newSqSz)
	{
	  radius = newSqSz / 2;
	  squareSize = newSqSz;
	},
	toggleBoard: function()
	{
	  canvas.style.display = "none";
	}
  };
  
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
	this.board.setValues('boardCanvas', '../imgs/foundation.png');
	// --- each player's canvas layer
	for(var i=0; i<this.players.length; i++)
	{
	  this.players[i].piece.setValues(650, 675, i);
	  this.players[i].piece.draw(this.players[i].position,this.board.squareSize, this.board.radius);
	}
	
	this.board.toggleBoard();
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