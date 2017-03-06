

function initBoard()
{
	// establish canvas variables
	var canvas = document.getElementById("board");
	var gameCtx = canvas.getContext("2d");
	var game_img = new Image();
	var gameWidth = $( "#gameBoard" ).width();
	var gameHeight = $( "#gameBoard" ).height();
	
	// set canvas dimensions
	gameCtx.canvas.width = gameWidth;
	gameCtx.canvas.height = gameHeight;
	
	// set up image
	game_img.src = "../imgs/foundation.png";
	game_img.onload = function()
	{
		gameCtx.drawImage(game_img, 0, 0, gameWidth, gameHeight);
	}
	
	// 
}

function initList()
{
	// set up arrays that hold points
	var clickX = [];
	var clickY = [];
	var clickDrag = [];
	
	// establish canvas variables
	var canvas = document.getElementById( "knownList" );
	var knownCtx = canvas.getContext("2d");
	var list_img = new Image();
	var listWidth = $( "#list" ).width();
	var listHeight = $( "#list" ).height();
	
	// establish boolean paint value
	var paint = false;
	
	// set canvas dimensions
	knownCtx.canvas.width = listWidth;
	knownCtx.canvas.height = listHeight;
	
	// set up canvas image
	list_img.src = "../imgs/score_card.jpg";
	list_img.onload = function()
	{
		knownCtx.drawImage(list_img, 0, 0, listWidth, listHeight);
	}
	
	// when a click event happens within list div
	//  paint some shit
	$( "#knownList" ).mousedown( function(e)
	{
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
		
		paint = true;
		
		addClick(clickX, clickY, clickDrag, e.pageX - this.offsetLeft, e.pageY - this.offsetTop );
	
		redraw(knownCtx, listWidth, listHeight, "#df4b26", 3, list_img, clickX, clickY, clickDrag);
	});
	
	// if the mouse moves and if paint is true [ie, the mouse is held down]
	// hella paint some shit
	$( "#knownList" ).mousemove( function(e) 
	{
		if(paint)
		{
			addClick(clickX, clickY, clickDrag, e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
			
			redraw(knownCtx, listWidth, listHeight, "#df4b26", 3, list_img, clickX, clickY, clickDrag);
		}
	});
	
	// when the click is released, set paint to false
	$( "#knownList" ).mouseup(function(e)
	{
		paint = false;
	});
	
	// when the mouse leaves the div area, set paint to false
	$( "#knownList" ).mouseleave( function(e)
	{
		paint = false;
	});
}

function initHand(cards, hand)
{
	cards.buildDeck(5);
}