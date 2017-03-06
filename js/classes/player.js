function Player(name, character)
{
  // INITIALIZE VARIABLES
  // things that are set at the selection page
  // after character has been selected
  this.character = character; 
  this.location = new Point();
  switch(character)
  {
    case 'ariel':
      this.color = Global.RED;
      this.location.updatePoint(18,2);
    break;
			
    case 'belle':
      this.color = Global.YELLOW;
      this.location.updatePoint(25,9);
    break;
			
    case 'pocahontas':
      this.color = Global.WHITE;
      this.location.updatePoint(16,26);
    break;
			
    case 'tiana':
      this.color = Global.GREEN;
      this.location.updatePoint(11,26);
    break;
			
    case 'jasmine':
      this.color = Global.BLUE;
      this.location.updatePoint(2,20);
    break;
			
    case 'aurora':
      this.color = Global.PURPLE;
      this.location.updatePoint(2,7);
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
    ctx.arc( (this.location.x * Global.sqrSize) - Global.radius, (this.location.y * Global.sqrSize) - Global.radius, 0, 2*Math.PI, true);
  }
  
  this.getHandArr = function()
  {
	return this.hand;
  }
}