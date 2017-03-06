function printCard(div, folder, name)
{
  var appendStart = '<img src="../';
  var appendEnd = '.png" />';
  $(div).append(appendStart + folder + '/' + name.toLowerCase() + appendEnd);
}

function getStuff()
{
  $.ajax({
    'type': 'GET',
	'url': 'data.php',
	'dataType': 'json',
	'success': function(data)
	{
	  return data;
	}
  });
}

$(function()
{ 
  // initialize game object
  var gameObj;
  var playerInfo = [{"playerNum":1,"playerName":"Fiona","charName":"belle"},
               {"playerNum":2,"playerName":"Michelle","charName":"jasmine"},
			   {"playerNum":3,"playerName":"Adam","charName":"aurora"},
			   {"playerNum":4,"playerName":"Joe","charName":"pocahontas"},
			   {"playerNum":5,"playerName":"Naomi","charName":"ariel"},
			   {"playerNum":6,"playerName":"Valentine","charName":"tiana"}];
  
  gameObj = new Game(playerInfo);
  
  gameObj.setGame();
  
  gameObj.getHand(2);
  // put toggle values here
  
  //console.log($.parseJSON($('#hidden').contents()));
  
  // while cntr < jsonArr.len, create a new Player in playerArr
  //while(cntr < jsonArr.length)
  //{
   // playerArr[cntr] = new Player(playerArr[cntr]['playerNum'], playerArr[cntr]['playerName'], playerArr[cntr]['charName']);
  //}
  
  	 
});