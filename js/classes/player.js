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
  this.secretPassage = false;
  this.active = false;
  
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
  this.toggleAccused = function()
  {
    if(this.accused == true)
    {
      this.accused = false;
    }
    else
    {
      this.accused = true;
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
  this.showHand = function(div)
  {	
    for( var i=0; i<this.hand.length; i++)
    {
      img = $('<img class="card" />').attr('src',this.hand[i].getFilepath());
	  
      // print the card out
      $(div).append(img);
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
  
  this.redrawPiece = function(pos)
  {
    this.piece.draw(pos);
  }
  
  this.assignDiv = function(i, w, h)
  {	
	// assign player piece div
	document.getElementById(this.divBase+'piece').style.display = "block";
	this.piece.setDim(w,h);
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
    this.piece.position.updatePoint(point);
  }
  
  this.highlightSquare = function(pos, modifier)
  {
    this.piece.canvas.drawFilledSquare(pos, modifier);
  }
  
  this.hideKnown = function()
  {
    document.getElementById(this.divBase+'known').style.display="none";
  }
}