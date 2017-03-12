<?php
  // define title: 
  define('TITLE', 'Game time!');

  // include header file
  include_once('../templates/header.html');

  // header files contains nav element
  // ends with <section id="main">
?>
  <div id="pass">
    <!--Full screen, hides list & cards from other players -->
  </div>

  <div id="known">
    <!-- Canvas element -->
    <canvas id="knownCanvas"></canvas>
	<canvas id="player1" class="characterPiece"></canvas>
	<canvas id="player2" class="characterPiece"></canvas>
	<canvas id="player3" class="characterPiece"></canvas>
	<canvas id="player4" class="characterPiece"></canvas>
	<canvas id="player5" class="characterPiece"></canvas>
	<canvas id="player6" class="characterPiece"></canvas>
  </div>
	
  <div id="board">
    <!-- Canvas element -->
    <canvas id="boardCanvas"></canvas>
  </div>
	
  <div id="playerView">
    <div id="characterCameo">
    </div>
		
    <div id="cards">
    </div>
  </div>

<?php
  // give info to javascript file
  
  // game will be run by javascript, not php
  include_once('../templates/footer.html')
?>