function Player(name, character)
{
  // INITIALIZE VARIABLES
  // things that are set at the selection page
  // after character has been selected
  this.character = character; 
  this.position = new Point(); // move to new piece class
  this.color = ''; // move to new piece class
  this.divBase = ''; // probably need to remove this
  this.playerName = name;
  this.hand = [];
  this.accused = false;
  this.secretPassage = false;
  this.active = false;
  
  // canvas variables
  this.piece = null;
  this.known = null;
  var scope = this; // may decide to not need this idk
  
  // gameplay variables
  switch(character) // still have to decide where this goes
  {
    case 'ariel':
      this.color ='#920031';
      this.position.updatePoint(17,1);
    break;
			
    case 'belle':
      this.color = '#D2F700';
      this.position.updatePoint(24,8);
    break;
			
    case 'pocahontas':
      this.color = '#ffffff'; 
      this.position.updatePoint(15,25);
    break;
			
    case 'tiana':
      this.color = '#499500';
      this.position.updatePoint(10,25);
    break;
			
    case 'jasmine':
      this.color = '#300571';
      this.position.updatePoint(1,19);
    break;
			
    case 'aurora':
      this.color = '#65016C';
      this.position.updatePoint(1,6);
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
  this.showHand = function(deck) // card showing logic should be moved to card class; card class should store file path
  {	
    var img;
    var folder;
    for( var i=0; i<this.hand.length; i++)
    {
	  // build image tag
      if($.inArray(this.hand[i], deck.suspects) >= 0 || this.hand[i]==deck.crime[0])
	  {
	    folder = "suspects";
	  }
	  else if($.inArray(this.hand[i], deck.weapons) >= 0 || this.hand[i]==deck.crime[1])
	  {
	    folder = "weapons";
	  }
	  else
	  {
	    folder = "rooms";
	  }
      img = $('<img class="card" />').attr('src', "../imgs/" + folder + "/" + this.hand[i] + ".png");
      // print the card out
      $('#cards').append(img);
    }
  };
  
  this.getHandArr = function() // update to getHand
  {
	return this.hand;
  };
  
  this.assignDiv = function(i, w, h)
  {
    this.divBase = 'p' + (i+1);
	
	// assign player piece div
	document.getElementById(this.divBase+'piece').style.display = "block";
	this.piece = new Canvas(this.divBase+'piece');
	this.piece.canvas.width = w;
	this.piece.canvas.height = h;
	this.piece.setStyleColor(this.color);
  };
  
  this.showKnown = function() // anonymize
  {
    if(this.known == null)
	{
      document.getElementById(this.divBase+'known').style.display = "block";
	  this.known = new Canvas(this.divBase+'known');
	  this.known.canvas.width = 100;
	  this.known.canvas.height = 100;
	  
	  this.known.canvas.addEventListener("mouseleave", function(e)
      {
        scope.known.paint = false;
      });
  
      this.known.canvas.addEventListener("mouseup", function(e)
      {
        scope.known.paint = false;
      });
  
      this.known.canvas.addEventListener("mousemove", function(e)
      {
		if(scope.known.paint)
		{
          scope.known.addClick(e.pageX, e.pageY, true);
	      scope.known.redraw();
		}
      });
  
      this.known.canvas.addEventListener("mousedown", function(e)
      {
        scope.known.updateClick(e.pageX, e.pageY);
      });
	}
	else
	{
	  document.getElementById(this.divBase+'known').style.display="block";
	}
  }
  
  this.hideKnown = function()
  {
    document.getElementById(this.divBase+'known').style.display="none";
  }
}
