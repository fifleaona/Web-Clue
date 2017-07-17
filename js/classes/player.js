function Player(name, character, num, radius)
{
  // INITIALIZE VARIABLES
  // things that are set at the selection page
  // after character has been selected
  this.character = character;
  this.divBase = 'p' + (num+1);
  this.playerName = name;
  this.hand = [];
  this.accused = false;
  this.accusedBy = '';
  this.secretPassage = false;
  this.active = false;
  this.knownH = 0;
  this.knownW = 0;
  this.inRoom = false;
  
  // canvas variables
  this.piece = null;
  this.known = null;
  var scope = this;
  
  // gameplay variables
  switch(character)
  {
    case 'ariel':
	  this.color = '#920031';
	  this.piece = new Piece(this.divBase + 'piece', radius, new Point(17,1));
    break;
			
    case 'belle':
	  this.color = '#D2F700';
	  this.piece = new Piece(this.divBase + 'piece', radius, new Point(24,8));
    break;
			
    case 'pocahontas':
	  this.color = '#ffffff';
	  this.piece = new Piece(this.divBase + 'piece', radius, new Point(15,25));
    break;
			
    case 'tiana':
	  this.color = '#499500';
	  this.piece = new Piece(this.divBase + 'piece', radius, new Point(10,25));
    break;
			
    case 'jasmine':
	  this.color = '#300571';
	  this.piece = new Piece(this.divBase + 'piece', radius, new Point(1,19));
    break;
			
    case 'aurora':
	  this.color = '#65016C';
	  this.piece = new Piece(this.divBase + 'piece', radius, new Point(1,6));
    break;
  };
	
  // TOGGLE FUNCTIONS
  this.toggleAccused = function(playerName)
  {
    if(this.accused == true)
    {
      this.accused = false;
    }
    else
    {
      this.accused = true;
      this.accusedBy = playerName;
    }
  };
	
  this.toggleSecretPassage = function()
  {
    if( this.secretPassage )
    {
      this.secretPassage = false;
    }
	else
    {
	  this.secretPassage = true;
	}
  };
  
  this.addCard = function(card)
  {
    this.hand.push(card);
  };
	
  // DRAWING FUNCTIONS
  this.showHand = function()
  {	
    document.getElementById(this.divBase+'hand').style.display = "block";

    for( var i=0; i<this.hand.length; i++)
    {
      img = $('<img class="card" />').attr('src',this.hand[i].getURL());
	  
      // print the card out
      $('#' + this.divBase + 'hand .cards').append(img);
    }
  };
  
  this.getHandArr = function()
  {
	return this.hand;
  };
  
  this.drawPiece = function(pos)
  {
	if(pos!=null || pos!=undefined)
	{
      this.piece.draw(pos);
	}
	else
	{
	  this.piece.draw(this.piece.position);
	}
  }
  
  this.assignDiv = function(i, w, h, kw, kh)
  {	
	// assign player piece div
	document.getElementById(this.divBase+'piece').style.display = "block";
	this.piece.setDim(w,h);
	this.knownW = kw;
	this.knownH = kh;
	//this.piece = new Canvas(this.divBase+'piece');
	//this.piece.canvas.width = w;
	//this.piece.canvas.height = h;
	this.piece.setStyleColor(this.color);
  };
  
  this.showKnown = function()
  {
    if(this.known == null)
	{
      document.getElementById(this.divBase+'known').style.display = "block";
	  //this.known = new Canvas(this.divBase+'known');
	  //this.known.canvas.width = 100;
	  //this.known.canvas.height = 100;
	  this.known = new Known(this.divBase+'known');
	}
	else
	{
	  document.getElementById(this.divBase+'known').style.display="block";
	}
  }
  
  this.getPosition = function()
  {
    return this.piece.position;
  }
  
  this.updatePosition = function(point)
  {
    this.piece.positionArr.push(point);
    this.piece.position.updatePoint(point);
  }
  
  this.highlightSquare = function(pos, modifier)
  {
    this.piece.canvas.drawFilledSquare(pos, modifier);
  }
  
  this.hideDivs = function()
  {
    document.getElementById(this.divBase+'known').style.display="none";
    document.getElementById(this.divBase+'hand').style.display="none";
  }

  this.addStartPosition = function()
  {
    this.piece.startPosition.updatePoint(this.piece.position);
    this.piece.positionArr.push(this.piece.position);
  }

  this.getPastSpaces = function()
  {
     return this.piece.positionArr;
  }
}