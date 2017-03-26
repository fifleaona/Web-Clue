function Player(name, character)
{
  // INITIALIZE VARIABLES
  // things that are set at the selection page
  // after character has been selected
  this.character = character; 
  this.position = new Point();
  this.name = name;
  this.color = '';
  
  this.piece = null;
  
  this.die = [1,2,3,4,5,6];
  
  switch(character)
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
  
  this.playerName = name;
  this.hand = [];
  this.accused = false;
  //this.knownList = new Canvas();
	
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
    if( this.secretRoom == true )
    {
      // assumes fn is called after player 
      // has decided whether or not to use
      // secret passage
      this.secretPassage = false;
    }
	else
    {
	  this.secretPassage = true;
	  // check for secret passage in the Game object
	}
  };
  
  this.addCard = function(card)
  {
    this.hand.push(card);
  };
	
  // DRAWING FUNCTIONS
  this.showHand = function(deck)
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
  
  this.getHandArr = function()
  {
	return this.hand;
  };
  
  this.assignDiv = function(i, w, h)
  {
    var div = 'player' + (i+1);
	document.getElementById(div).style.display = "block";
	this.piece = new Canvas(div);
	this.piece.canvas.width = w;
	this.piece.canvas.height = h;
	this.piece.setValues('none', this.color);
  };
  
  this.rollDie = function()
  {
    //console.log(this.die.randomElement());
  };
}