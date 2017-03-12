function Cards()
{
  crime = [];
  deck = [];
  suspects = ["Ariel", "Aurora", "Belle", 
                   "Jasmine", "Pocahontas", "Tiana"];
  rooms = [ "Ballroom", "Cave", "Cottage", "Forest", "Garden",   
                 "Grotto", "Kitchen", "Tent", "Tower"];
  weapons = [ "Lamp", "Rose", "Spear", 
                   "Spindle", "Tiara", "Trident"];
	
  buildDeck = function()
  {
    var numTimesDeckShuffles = 5;
    // the following code blocks set up the crime
    // the crime is stored in an array that is organized
    // as [0]suspect, [1]room, [2]weapon
    // (as in "[suspect] in the [room] with the [weapon]")
		
    // get random suspect value and add it to the crime arra
    var randSuspect = suspects.randomElement();
    crime.push(randSuspect);
		
    // get index of random suspect value and remove it from the suspect array
    var indexSuspect = suspects.indexOf(randSuspect);
    suspects.splice(indexSuspect,1);
		
    // add remaining suspects to the "pile" of "cards"
    for(var cntr=0; cntr<suspects.length; cntr++)
    {
      deck.push(suspects[cntr]);
    }

    //get random weapon value and add it to the array
    var randWeapon = weapons.randomElement();
    crime.push(randWeapon);
		
    // splice out the weapon, remove it from the weapon array
    // then add the rest to the core deck
    var indexWeapon = weapons.indexOf(randWeapon);
    weapons.splice(indexWeapon,1);
    for(cntr=0;cntr<weapons.length;cntr++)
    {
	  deck.push(weapons[cntr]);
    }
 
    // get random room value and add it to the crime
    // using the same method as above
    var randRoom = rooms.randomElement();	
    crime.push(randRoom);
    var indexRoom = rooms.indexOf(randRoom);
	rooms.splice(indexRoom,1);
	for(cntr=0;cntr<rooms.length;cntr++)
	{
      deck.push(rooms[cntr]);
	}
 
    // shuffle the deck
    // use Fisher-Yates algorithm 
    var swap, swapIndex, holder, index; 
    for(var cntr=0; cntr<numTimesDeckShuffles; cntr++)
    {
      index = deck.length;
      while(--index)
      {
        // get a random element
        swap = deck.randomElement();
		// get the index of the random element
	    swapIndex = deck.indexOf(swap);
  
        // swap the values
        holder = deck[index];
        deck[index] = swap;
        deck[swapIndex] = holder;
      }	
    }
  }
	
	dealCards = function(playerArr)
	{
	  if(crime.length==0)
	  {
	    // do nothing
		console.log("ERROR: buildDeck must be called first");
	  }
	  else
	  {
		var j=0;
	    for(var i=0; i<deck.length; i++)
		{
		  playerArr[j].addCard(deck[i]);
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