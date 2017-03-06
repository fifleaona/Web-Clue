function displayCard(div, val)
{
  var src = '../imgs/' + val;
	
  var elem = document.createElement("img");
  elem.setAttribute("src", src);
  elem.setAttribute("class", "card");
  document.getElementById(div).appendChild(elem);
}

function displayTestHand(arr, startN)
{
  displayCard("hand", arr[startN]);
  displayCard("hand", arr[startN+1]);
  displayCard("hand", arr[startN+2]);
}

$(function()
{
  // initalize game cards
  var deck = new Cards();
	
	
	// initalize player-specific variables
	var hand = [];
	
	// set up event handlers
	$("#toggleList").click( toggleList );
	$("#toggleHand").click( togglePI );
	$( window ).resize( resizeElem );
	
	// initalize functions
	initList();
	initBoard();
	initHand(deck, hand);
	
	displayTestHand(deck.crime, 0);
	displayTestHand(deck.deck, 0);
	displayTestHand(deck.deck, 3);
});