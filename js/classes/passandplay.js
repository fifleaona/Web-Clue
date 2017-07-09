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
  this.accusedDiv = '';
  
  // card init
  this.deck = new Deck('../imgs/');
  
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
  this.activePlayer = -1;
  var scope = this;
  
  // SET FUNCTIONS
  this.setGame = function() // change so much of this
  {
    this.deck.dealCards(this.players);
	// set up game board:
	// --- board background
	
	
	// --- each player's canvas layer
	
	this.spaceCanvas.canvas.width = 650;
	this.spaceCanvas.canvas.height = 675;
	//this.takeTurn(2);
  }
  
  this.setBkgs = function(boardBkg, knownBkg)
  {  
    for(var i=0; i<scope.players.length; i++)
	{
	  scope.players[i].assignDiv(i, boardBkg.width, boardBkg.height);
	  scope.players[i].drawPiece();
	}
	
	this.board.setImg(boardBkg.src);
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
  
  this.showOptionsDiv = function()
  {
    $('#turnOptions').show();
    
    // if player was accused, show accused div & btn
    if(this.players[this.activePlayer].accused)
    {
      $('#wasAccused').show();
      $('#makeAccusation').show();
      $('#accusor').text(this.players[this.activePlayer].accusedBy);
      //$('#accusedRoom').text(); // set to current room location
    }

    // if the current room has a secret passage
    //if()
    //{
    //  $('#secretPassage').show();
    //  $('#takeSecretPassage').show();
    //  $('#').text(); // set to current room 
    //}

    if(this.dice.numDice <= 1)
    {
      $('#dieVSdice').text('die');
    }
    else
    {
      $('#dieVSdice').text('dice')
    }
  }

  this.takeTurn = function() // move out of this scope
  {
	// display last player's actions
    // display player's known list
	this.players[this.activePlayer].showKnown();
	
	// display player's hand
	this.players[this.activePlayer].showHand();
	
    // display option screen
    this.showOptionsDiv();
    this.players[this.activePlayer].addStartPosition();

	
	this.spaces.node_list[this.spaces.findNode(this.players[this.activePlayer].getPosition())].touched = true;
    this.showSpaces(this.players[this.activePlayer].getPosition());

  }
  
  this.endTurn = function()
  {
    // display end turn confirmation
    $('#confirmTurn').show();
  }

  this.showReadyScreen = function(playerNum)
  {
    this.activePlayer = playerNum;
    $('#pass').slideToggle();
    $('#playerName').text(this.players[this.activePlayer].playerName);
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
  
  this.showPastSpaces = function()
  {
    this.spaceSelection = true;
    var arr = this.players[this.activePlayer].getPastSpaces();
    for(var i=0; i<arr.length; i++)
    {
      this.players[this.activePlayer].highlightSquare(arr[i],this.tileSize);
      var loc = this.spaces.findNode(arr[i]);
      this.spaces.node_list[loc].highlighted=true;
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
	console.log(this.dice.getVal())  
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
        else
        {
          scope.endTurn();
        }
	  }
	}
  });

  $('#pass .btn').click(function()
  {
    $('#pass').slideToggle();
    scope.takeTurn();
  });

  // if end turn: yes is clicked
  $('#endTurnYes').click(function()
  {
    // hide currentPlayer known
    // hide currentPlayer hand
    scope.players[scope.activePlayer].hideDivs();
    $('#confirmTurn').slideToggle();
    // increment currentPlayer
    if(scope.activePlayer+1==scope.players.length)
    {
      scope.showReadyScreen(0);
    }
    else
    {
      scope.showReadyScreen(scope.activePlayer+1);
    }
  });

  // if end turn: no is clicked
  $('#endTurnNo').click(function()
  {
    $('#confirmTurn').slideToggle();
    // if no
    scope.showPastSpaces();
    // set spaceSelection to true
    // move piece back to start
  });

  $('#rollForTurn').click(function()
  {
    scope.dice.roll();
    $('#turnOptions').slideToggle(0);
    $('.absoluteWrapper').slideToggle(0);
  });
}