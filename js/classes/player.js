function Player(name, character)
{
  // INITIALIZE VARIABLES
  // things that are set at the selection page
  // after character has been selected
  this.character = character; 
  this.position = new Point();
  this.name = name;
  
  this.piece = {
    this.canvas: null,
	this.ctx: null,
	this.color: null,
	this.setColor: function(c)
	{
	  color = c;
	},
	setValues: function(w,h,i)
	{
	  div = "player" + (i+1);
	  this.canvas = document.getElementById(div);
	  this.canvas.style.display = "block";
	  canvas.width = w;
	  canvas.height = h;
	  ctx = canvas.getContext('2d');
	  ctx.strokeStyle = ctx.fillStyle = color;
	},
	draw: function(position, sqrSz, r)
	{
	  ctx.beginPath();
      ctx.arc((position.x * sqrSz)-r, (position.y * sqrSz)-r, 0, 2*Math.PI, true);
	  ctx.fill();
	}
  };
  
  switch(character)
  {
    case 'ariel':
      this.piece.setColor('#920031');
      this.position.updatePoint(18,2);
    break;
			
    case 'belle':
      this.piece.setColor('#D2F700');
      this.position.updatePoint(25,9);
    break;
			
    case 'pocahontas':
      this.piece.setColor('#ffffff');
      this.position.updatePoint(16,26);
    break;
			
    case 'tiana':
      this.piece.setColor('#499500');
      this.position.updatePoint(11,26);
    break;
			
    case 'jasmine':
      this.piece.setColor('#300571');
      this.position.updatePoint(2,20);
    break;
			
    case 'aurora':
      this.piece.setColor('#65016C');
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
  
  this.getHandArr = function()
  {
	return this.hand;
  }
}