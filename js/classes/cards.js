function Card(name, filePath)
{
  this.name = name;
  this.filePath = filePath;
  
  this.setName = function(name)
  {
    this.name = name;
  }
  
  this.setFilepath = function(path)
  {
    this.filePath = path;
  }
  
  this.setValues = function(name, path)
  {
    this.name = name;
	this.filePath = path;
  }
  
  this.getFilepath = function()
  {
    return this.filePath;
  }

  this.getURL = function()
  {
    return this.filePath + this.name.toLowerCase() + '.png';
  }
}

function Deck(filePath)
{
  this.crime = [];
  this.deck = [];
  this.suspects = [
                    new Card("Ariel",filePath + 'suspects/'),
                    new Card("Aurora",filePath + 'suspects/'),
                    new Card("Belle",filePath + 'suspects/'),
                    new Card("Jasmine",filePath + 'suspects/'),
                    new Card("Pocahontas",filePath + 'suspects/'),
                    new Card("Tiana",filePath + 'suspects/')
                  ];
  //"Ariel", "Aurora", "Belle", 
   //                "Jasmine", "Pocahontas", "Tiana"];
  this.rooms = [
                  new Card("Ballroom",filePath + 'rooms/'),
                  new Card("Cave",filePath + 'rooms/'),
                  new Card("Cottage",filePath + 'rooms/'),
                  new Card("Forest",filePath + 'rooms/'),
                  new Card("Garden",filePath + 'rooms/'),
                  new Card("Grotto",filePath + 'rooms/'),
                  new Card("Kitchen",filePath + 'rooms/'),
                  new Card("Tent",filePath + 'rooms/'),
                  new Card("Tower",filePath + 'rooms/')
                ];
  // "Ballroom", "Cave", "Cottage", "Forest", "Garden",   
    //             "Grotto", "Kitchen", "Tent", "Tower"];
  this.weapons = [
              new Card("Lamp",filePath + 'weapons/'),
              new Card("Rose",filePath + 'weapons/'),
              new Card("Spear",filePath + 'weapons/'),
              new Card("Spindle",filePath + 'weapons/'),
              new Card("Tiara",filePath + 'weapons/'),
              new Card("Trident",filePath + 'weapons/')
            ];
//  "Lamp", "Rose", "Spear", 
  //                 "Spindle", "Tiara", "Trident"];
	

  // add error checking to these to ensure the file paths are valid	
  this.setSuspects = function(nameArr, filePathArr)
  {
    if(nameArr.length != filePathArr.length)
	{
	  console.log("Error: The suspect arrays are uneven.")
	}
	else
	{
	  for(var i=0; i<nameArr.length; i++)
	  {
		if(nameArr[i]!=null && filePathArr[i]!=null)
		{
	      this.suspects.push(new Card(nameArr[i], filePathArr[i]));
		}
		else
		{
		  console.log("Error: Could not add suspect values at index " + i + " one or both were null.");
		}
	  }
	}
  }
  
  this.setWeapons = function(nameArr, filePathArr)
  {
    if(nameArr.length != filePathArr.length)
	{
	  console.log("Error: The weapon arrays are uneven.")
	}
	else
	{
	  for(var i=0; i<nameArr.length; i++)
	  {
		if(nameArr[i]!=null && filePathArr[i]!=null)
		{
	      this.weapons.push(new Card(nameArr[i], filePathArr[i]));
		}
		else
		{
		  console.log("Error: Could not add weapon values at index " + i + " one or both were null.");
		}
	  }
	}
  }
  
  this.setRooms = function(nameArr, filePathArr)
  {
    if(nameArr.length != filePathArr.length)
	{
	  console.log("Error: The room arrays are uneven.")
	}
	else
	{
	  for(var i=0; i<nameArr.length; i++)
	  {
		if(nameArr[i]!=null && filePathArr[i]!=null)
		{
	      this.rooms.push(new Card(nameArr[i], filePathArr[i]));
		}
		else
		{
		  console.log("Error: Could not add room values at index " + i + " one or both were null.");
		}
	  }
	}
  }
  
  this.addSuspect = function(name, path)
  {
    if(name!=null && path!=null)
	{
	  this.suspects.push(new Card(name, path));
	}
	else
	{
	  console.log("Error: Both suspect values must be non-null")
	}
  }
  
  this.addWeapon = function(name, path)
  {
    if(name!=null && path!=null)
	{
	  this.suspects.push(new Card(name, path));
	}
	else
	{
	  console.log("Error: Both weapon values must be non-null")
	}
  }
  
  this.addRoom = function(name, path)
  {
    if(name!=null && path!=null)
	{
	  this.rooms.push(new Card(name, path));
	}
	else
	{
	  console.log("Error: Both room values must be non-null");
	}
  }
  
  this.buildDeck = function(numTimesShuffles)
  {
	if(this.suspects.length < 6 || this.rooms.length < 9 || this.weapons.length < 6)
	{
	}
	else
	{
	  if(numTimesShuffles==null || numTimesShuffles==0)
	  {
        numTimesDeckShuffles = 5;
	  }
      // the following code blocks set up the crime
      // the crime is stored in an array that is organized
      // as [0]suspect, [1]room, [2]weapon
      // (as in "[suspect] in the [room] with the [weapon]")
		
      // get random suspect value and add it to the crime arra
      var randSuspect = this.suspects.randomElement();
      this.crime.push(this.suspects.randomElement());
		
      // get index of random suspect value and remove it from the suspect array
      var indexSuspect = this.suspects.indexOf(randSuspect);
      this.suspects.splice(indexSuspect,1);
		
      // add remaining suspects to the "pile" of "cards"
      for(var i=0; i<this.suspects.length; i++)
      {
        this.deck.push(this.suspects[i]);
      }

      //get random weapon value and add it to the array
      var randWeapon = this.weapons.randomElement();
      this.crime.push(randWeapon);
		
      // splice out the weapon, remove it from the weapon array
      // then add the rest to the core deck
      var indexWeapon = this.weapons.indexOf(randWeapon);
      this.weapons.splice(indexWeapon,1);
      for(i=0;i<this.weapons.length;i++)
      {
	    this.deck.push(this.weapons[i]);
      }
 
      // get random room value and add it to the crime
      // using the same method as above
      var randRoom = this.rooms.randomElement();	
      this.crime.push(randRoom);
      var indexRoom = this.rooms.indexOf(randRoom);
	  this.rooms.splice(indexRoom,1);
	  for(i=0;i<this.rooms.length;i++)
	  {
        this.deck.push(this.rooms[i]);
	  }
 
      // shuffle the deck
      // use Fisher-Yates algorithm 
      var swap, swapIndex, holder, index; 
      for(var cntr=0; cntr<numTimesShuffles; cntr++)
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
  }
	
  this.dealCards = function(playerArr)
  {
    if(this.crime.length==0)
	{
	  // do nothing
      this.buildDeck(5);
	}
	
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

  this.checkCrime = function(suspect, weapon, room)
  {
    if(this.crime[0].name == suspect && 
	   this.crime[1].name == weapon &&
	   this.crime[2].name == room)
	{
	  return true;
	}
	else
	{
	  return false
	}
  }
  
  this.getNumCorrect = function(suspect, weapon, room)
  {
    var cntr;
	if(this.crime[0].name==suspect)
	{
	  cntr++;
	}
	
	if(this.crime[1].name==weapon)
	{
	  cntr++;
	}
	
	if(this.crime[2].name==room)
	{
	  cntr++;
	}
	
	return cntr;
  }
 }