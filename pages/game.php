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
    <canvas id="p1known" class="known"></canvas>
    <canvas id="p2known" class="known"></canvas>
    <canvas id="p3known" class="known"></canvas>
    <canvas id="p4known" class="known"></canvas>
    <canvas id="p5known" class="known"></canvas>
    <canvas id="p6known" class="known"></canvas>
  </div>
	
  <div id="board">
    <!-- Canvas element -->
    <canvas id="boardCanvas"></canvas>
	<canvas id="p1piece" class="characterPiece"></canvas>
	<canvas id="p2piece" class="characterPiece"></canvas>
	<canvas id="p3piece" class="characterPiece"></canvas>
	<canvas id="p4piece" class="characterPiece"></canvas>
	<canvas id="p5piece" class="characterPiece"></canvas>
	<canvas id="p6piece" class="characterPiece"></canvas>
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