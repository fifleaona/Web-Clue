function Game(arr,numDie,squareSize)
{
  // INITIALIZATION
  // canvas init
  this.known = new Canvas('knownCanvas');
  this.board = new Canvas('boardCanvas');
  this.tileSize = squareSize;
  this.spaceCanvas = new Canvas('spaces');
  this.spaces = new Graph();
  this.rooms = [];
  
  // card init
  this.deck = new Deck();
  
  // player init
  this.players = [];
  for(var i=0; i<arr.length; i++)
  {
    this.players.push(new Player(arr[i].playerName, arr[i].charName, i, this.tileSize/2));
  }
  
  // misc init
  this.dice = new Dice(numDie);
  this.lastPlayersActions = "";
  this.spaceSelection = false;
  this.activePlayer = 0;
  var scope = this;
  
  // SET FUNCTIONS
  this.setGame = function() // change so much of this
  {
    //this.deck.dealCards(this.players);
	// set up game board:
	// --- board background
	
	
	// --- each player's canvas layer
	
	this.spaceCanvas.canvas.width = 650;
	this.spaceCanvas.canvas.height = 675;
	//this.takeTurn(2);
  }
  
  this.setBkgs = function(boardBkg, knownBkg)
  {
    var boardImg = new Image();
	boardImg.src = boardBkg;
	
	boardImg.onload = function()
	{
	  for(var i=0; i<scope.players.length; i++)
	  {
	    scope.players[i].assignDiv(i, boardImg.width, boardImg.height);
	    scope.players[i].drawPiece();
	  }
	}
	
	this.board.setImg(boardBkg);
	this.known.setImg(knownBkg);
  }
  
  this.setRooms = function() // move this function to game.js
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
  
  // GET FUNCTIONS
  this.getCrime = function()
  {
    return this.deck.crime;
  }
  
  this.getPlayerCharacter = function(num)
  {
    return this.players[num-1].character;
  }
  
  this.getPlayerName = function(num)
  {
    return this.player[num-1].playerName;
  }
  
  this.getPlayerHand = function(num)
  {
    this.players[num-1].showHand(this.deck);
  }
  
  // APPEND FUNCTIONS
  this.addSpace = function(node1, node2) // move this function to game.js
  {
	this.spaces.addEdge(node1, node2);
  }
  
  // MISC FUNCTIONS
  this.checkCrime = function(suspect, weapon, room)
  {
    if(this.deck.checkCrime(suspect, weapon, room))
    {
      // display "end game" screen
      return true;
    }
    {
      // display "you lost" screen
	  // show the number correct
	  // give user the option to see the crime
      // if this is a pass & play, provide the "pass" option
      return this.deck.getNumCorrect(suspect, weapon, room);
    }
  }
  
  this.takeTurn = function(num) // move out of this scope
  {
    this.activePlayer = num-1;
	// display last player's actions
    // display player's known list
	this.players[this.activePlayer].showKnown();
	
	// display player's hand
	this.players[this.activePlayer].showHand();
	
	// if player is accused
    if(this.players[this.activePlayer].accused)
	{
	  // set accused to false
	  this.players[this.activePlayer].toggleAccused();
	  // ask if the player would like to make an accusation
	  // display ask question screen
    }
	else
	{
	  // otherwise, continue the turn as usual
  	  // if player is in a room with a secret door
	  if(this.players[this.activePlayer].secretPassage)
	  {
		// set secretPassage to false
		this.players[this.activePlayer].toggleSecretPassage();
	    // display "would you like to use the secret door to [room]"
	  }
	  else
	  {
  	    // otherewise, show a screen with a die roll
	    //$('#rollDie').show();
	  
	    // once the die is rolled, display possible spaces
	   // $('#confirmRoll').click(function()
	    //{
		 this.dice.roll();
		 console.log(this.dice.getVal());
		  // display numSpaces somewhere on the screen
		  // execute show spaces
	    //});
		this.spaces.node_list[this.spaces.findNode(this.players[this.activePlayer].getPosition())].touched = true;
		this.showSpaces(this.players[this.activePlayer].getPosition());
	  }
	}
  }
  
  this.showSpaces = function(pos)
  {
    this.spaceSelection = true;
	var index = this.spaces.findNode(pos);
	// display possible spaces
	for(var i=0; i<this.spaces.node_list[index].edge_list.length; i++)
	{
	  for(var j=0; j<this.players.length; j++)
	  {
	    if(!(this.spaces.node_list[index].edge_list[i].x == this.players[j].getPosition().x &&
		   this.spaces.node_list[index].edge_list[i].y == this.players[j].getPosition().y))
		{
	      this.players[this.activePlayer].highlightSquare(this.spaces.node_list[index].edge_list[i], this.tileSize);
          var loc = this.spaces.findNode(this.spaces.node_list[index].edge_list[i]);
         
          this.spaces.node_list[loc].highlighted=true;
		}
	  }
	}
  }
  
  this.hideSpaces = function(pos)
  {
    var index = this.spaces.findNode(pos);
	for(var i=0; i < this.spaces.node_list[index].edge_list.length; i++)
	{
	  var loc = this.spaces.findNode(this.spaces.node_list[index].edge_list[i]);
	  this.spaces.node_list[loc].highlighted = false;
	}
  }
  
  this.isSpaceHighlighted = function(pt)
  {
	var index = this.spaces.findNode(pt);
	if(index != null)
	{
	  return this.spaces.node_list[index].highlighted;
	}
	else
	{
	  return false;
	}
  }
  
  this.movePiece = function(loc)
  {
	var index = this.spaces.findNode(loc);
	// check to see if loc has been visited before
	if(index!=null && !this.spaces.node_list[index].touched)
	{
	  // if it hasn't, decrement dice counter
	  this.dice.decrement();
	  this.spaces.node_list[index].touched = true;
	}
	else
	{
	  this.spaces.node_list[this.spaces.findNode(this.players[this.activePlayer].getPosition())].touched = false;
	  this.dice.increment();
	}
	  
	// move player
	this.players[this.activePlayer].updatePosition(loc);
    this.players[this.activePlayer].drawPiece();
  }

  this.spaceCanvas.canvas.addEventListener("mousedown",function(e)
  {
    if(scope.spaceSelection)
	{
	  var tempPt = scope.spaceCanvas.convertClick(e,'none',scope.tileSize);
	  console.log("x: " + tempPt.x);
	  console.log("y: " + tempPt.y);
	  // if highlighted
	  if(scope.isSpaceHighlighted(tempPt))
	  {
	    // set space selection to false
		scope.spaceSelection = false;
		
		// hide spaces, which sets highlighted to false
		scope.hideSpaces(scope.players[scope.activePlayer].getPosition());
		
		// move piece
		scope.movePiece(tempPt);
		
		// if numSpaces != 0
		if(scope.dice.getVal() != 0)
		{
		  // call select space
		  scope.showSpaces(tempPt);
		}
	  }
	}
  });
}