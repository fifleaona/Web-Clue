function Player(name, character)
{
  // INITIALIZE VARIABLES
  // things that are set at the selection page
  // after character has been selected
  this.character = character; 
  this.position = new Point();
  this.name = name;
  
  this.piece = {
    canvas: null,
	ctx: null,
	setValues: function(w,h,i)
	{
	  canvas = document.createElement("canvas");
	  canvas.id = 'canvas'+name;
	  canvas.width = w;
	  canvas.height = h;
	  canvas.className = "characterPiece"
	  ctx = canvas.getContext('2d');
	  
	  $('#board').append(canvas);
	}
  };
  
  switch(character)
  {
    case 'ariel':
      this.color = Global.RED;
      this.position.updatePoint(18,2);
    break;
			
    case 'belle':
      this.color = Global.YELLOW;
      this.position.updatePoint(25,9);
    break;
			
    case 'pocahontas':
      this.color = Global.WHITE;
      this.position.updatePoint(16,26);
    break;
			
    case 'tiana':
      this.color = Global.GREEN;
      this.position.updatePoint(11,26);
    break;
			
    case 'jasmine':
      this.color = Global.BLUE;
      this.position.updatePoint(2,20);
    break;
			
    case 'aurora':
      this.color = Global.PURPLE;
      this.position.updatePoint(2,7);
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
  }
	
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
  }
  
  this.addCard = function(card)
  {
    this.hand.push(card);
  }
	
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
  }
	
  this.drawPiece = function()
  {
    ctx.beginPath();
    ctx.arc( (this.position.x * Global.sqrSize) - Global.radius, (this.position.y * Global.sqrSize) - Global.radius, 0, 2*Math.PI, true);
  }
  
  this.getHandArr = function()
  {
	return this.hand;
  }
}