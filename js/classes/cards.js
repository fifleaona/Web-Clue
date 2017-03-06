function Cards()
{
  this.crime = [];
  this.deck = [];
  this.suspects = ["Ariel", "Aurora", "Belle", 
                   "Jasmine", "Pocahontas", "Tiana"];
  this.rooms = [ "Ballroom", "Cave", "Cottage", "Forest", "Garden",   
                 "Grotto", "Kitchen", "Tent", "Tower"];
  this.weapons = [ "Lamp", "Rose", "Spear", 
                   "Spindle", "Tiara", "Trident"];
	
  this.buildDeck = function()
  {
    var numTimesDeckShuffles = 5;
    // the following code blocks set up the crime
    // the crime is stored in an array that is organized
    // as [0]suspect, [1]room, [2]weapon
    // (as in "[suspect] in the [room] with the [weapon]")
		
    // get random suspect value and add it to the crime arra
    var randSuspect = this.suspects.randomElement();
    this.crime.push(randSuspect);
		
    // get index of random suspect value and remove it from the suspect array
    var indexSuspect = this.suspects.indexOf(randSuspect);
    this.suspects.splice(indexSuspect,1);
		
    // add remaining suspects to the "pile" of "cards"
    for(var cntr=0; cntr<this.suspects.length; cntr++)
    {
      this.deck.push(this.suspects[cntr]);
    }

    //get random weapon value and add it to the array
    var randWeapon = this.weapons.randomElement();
    this.crime.push(randWeapon);
		
    // splice out the weapon, remove it from the weapon array
    // then add the rest to the core deck
    var indexWeapon = this.weapons.indexOf(randWeapon);
    this.weapons.splice(indexWeapon,1);
    for(cntr=0;cntr<this.weapons.length;cntr++)
    {
	  this.deck.push(this.weapons[cntr]);
    }
 
    // get random room value and add it to the crime
    // using the same method as above
    var randRoom = this.rooms.randomElement();	
    this.crime.push(randRoom);
    var indexRoom = this.rooms.indexOf(randRoom);
	this.rooms.splice(indexRoom,1);
	for(cntr=0;cntr<this.rooms.length;cntr++)
	{
      this.deck.push(this.rooms[cntr]);
	}
 
    // shuffle the deck
    // use Fisher-Yates algorithm 
    var swap, swapIndex, holder, index; 
    for(var cntr=0; cntr<numTimesDeckShuffles; cntr++)
    {
      index = this.deck.length;
      while(--index)
      {
        // get a random element
        swap = this.deck.randomElement();
		// get the index of the random element
	    swapIndex = this.deck.indexOf(swap);
  
        // swap the values
        holder = this.deck[index];
        this.deck[index] = swap;
        this.deck[swapIndex] = holder;
      }	
    }
  }
	
	this.dealCards = function(playerArr)
	{
	  if(this.crime.length==0)
	  {
	    // do nothing
		console.log("ERROR: buildDeck must be called first");
	  }
	  else
	  {
		var j=0;
	    for(var i=0; i<this.deck.length; i++)
		{
		  playerArr[j].addCard(this.deck[i]);
		  if(j==(playerArr.length-1))
		  {
		    j=0;
		  }
		  else
		  {
		    j++;
		  }
		}
	  }
	}
}