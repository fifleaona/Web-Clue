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
  this.knownBkg = new Canvas('knownCanvas');
  this.spaceCanvas = new Canvas('spaces');
  this.rooms = [];
  this.die = [1,2,3,4,5,6];
  
  this.lastPlayersActions = "";
  
  
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
  
  this.setGame = function()
  {
    //this.deck.dealCards(this.players);
	// set up game board:
	// --- board background
	this.board.setValues('../imgs/foundation.png','#FF2323');
	this.knownBkg.setValues('../imgs/score_card.jpg', '#FF2323');
	
	// --- each player's canvas layer
	for(var i=0; i<this.players.length; i++)
	{
	  this.players[i].assignDiv(i, 650, 675);
	  this.players[i].piece.drawPiece(this.players[i].position);
	}
	
	this.takeTurn(0);
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
  
  this.takeTurn = function(num)
  {
	var numSpaces = 0;
	// display last player's actions
    // display player's known list
	this.players[num].showKnown();
	
	// display player's hand
	this.players[num].showHand();
	
	// if player is accused
    if(this.players[num].accused)
	{
	  // set accused to false
	  this.players[num].toggleAccused();
	  // ask if the player would like to make an accusation
    }
	else
	{
	  // otherwise, continue the turn as usual
  	  // if player is in a room with a secret door
	  if(this.players[num].secretPassage)
	  {
		// set secretPassage to false
		this.players[num].toggleSecretPassage();
	    // display "would you like to use the secret door to [room]"
	  }
	  else
	  {
  	    // otherewise, show a screen with a die roll
	    //$('#rollDie').show();
	  
	    // once the die is rolled, display possible spaces
	   // $('#confirmRoll').click(function()
	    //{
	      numSpaces = this.die.randomElement();
		  // display numSpaces somewhere on the screen
		  // execute show spaces
	    //});
		
		this.showSpaces(6, 
		                this.spaceCanvas.spaces.findNode(this.players[num].position),
						this.players[num]);
	  }
	}
  }
  
  this.showSpaces = function(num,index,player)
  {
    if(num==0)
	{
	  // display confirmation
	  // if yes is clicked
	  // update player's position
	  // remove all touched that have been toggled
	  // exit
	  // if no is clicked, run function(num+1)
	  this.spaceCanvas.spaceSelection = false;
	}
	else
	{
	  this.spaceCanvas.spaceSelection = true;
	  // display possible spaces
	  for(var i=0; i<this.spaceCanvas.getNumEdges(index); i++)
	  {
	    player.piece.drawSquare(this.spaceCanvas.spaces.node_list[index].edge_list[i]);
        var loc = this.spaceCanvas.spaces.findNode(this.spaceCanvas.spaces.node_list[index].edge_list[i]);
		this.spaceCanvas.spaces.node_list[loc].toggleHighlighted();
	  }
      // if a previous space is clicked
      scope = this;
      this.spaceCanvas.canvas.addEventListener("mouseup",function(e)
      {
        if(scope.spaceCanvas.movePiece) // if highlighted square is clicked
        {
          // if the highlighted point has been touched before
          var newPt = new Point(Math.floor(scope.spaceCanvas.mousePoint.x/scope.board.squareSize), Math.floor(scope.spaceCanvas.mousePoint.y/scope.board.squareSize));
          var newLoc = scope.spaceCanvas.spaces.findNode(newPt);

          // move piece
          player.position.updatePoint(newLoc);
          player.piece.redrawPiece(player.position);

          // if the highlighted point has been touched before
          if(scope.spaceCanvas.spaces.node_list[newLoc].touched)
          {
            // call function (num + 1)
            scope.showSpaces(num+1,index,player);
          }
          else
          {
          // if the piece hasn't been touched before
           // turn touched to true
           scope.spaceCanvas.spaces.node_list[newLoc].toggleTouched();
           // call function (num-1) 
           scope.showSpaces(num-1,index,player);
          }
        }
        console.log(scope.spaceCanvas.movePiece);
      });
        // call function(num+1)
        // move player
        // toggle touched function(num-1)
        // call function(num-1)
	}
  }
  
  this.mouseDown = function(e,num)
  {
    this.players[num-1].known.updateClick(e.pageX, e.pageY);
  }
  
  this.togglePaint = function(num,val)
  {
    this.players[num-1].known.togglePaint(val);
  }
}