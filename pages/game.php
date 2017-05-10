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
	<div id="knownCanvasWrapper">
      <canvas id="knownCanvas"></canvas>
      <canvas id="p1known" class="known"></canvas>
      <canvas id="p2known" class="known"></canvas>
      <canvas id="p3known" class="known"></canvas>
      <canvas id="p4known" class="known"></canvas>
      <canvas id="p5known" class="known"></canvas>
      <canvas id="p6known" class="known"></canvas>
	</div>
  </div>
	
  <div id="gamesection">
    <div id="board">
      <!-- Canvas element -->
      <canvas id="boardCanvas"></canvas>
  	  <canvas id="p1piece" class="characterPiece"></canvas>
 	  <canvas id="p2piece" class="characterPiece"></canvas>
	  <canvas id="p3piece" class="characterPiece"></canvas>
	  <canvas id="p4piece" class="characterPiece"></canvas>
	  <canvas id="p5piece" class="characterPiece"></canvas>
	  <canvas id="p6piece" class="characterPiece"></canvas>
	  <canvas id="spaces"></canvas>
    </div>
	
	<div id="overlay">
	  <div id="rollDice">
	    <div class="words">
		  <p>Are you ready to roll the die?</p>
		</div>
		
		<div class="buttons">
		  <input type="button" value="Roll Die" />
		</div>
	  </div>
	  
	  <div id="makeAccusation">
	    <div class="words">
		  <p>Make an accusation:</p>
		</div>
		
		<div id="accuse">
		  <form id="accusation">
		    <label for="who">Suspect:</label>
			<label for = "where">With:</label>
			<label for="where">Room:</label>
			<input type="submit" value="submit">
		  </form>
		</div>
		
		<div id="confirmAccusation">
		  <p id="confirmation"></p>
		</div>
	  </div>
	  
	  <div id="secretPassage">
	    <div class="words">
		</div>
		
		<div class="buttons">
		  <input type="button" value="Yes" />
		  <input type="button" value="No" />
		</div>
	  </div>
	  
	  <div id="wasAccused">
	    <div class="words">
		</div>
		
		<div class="buttons">
		  <input type="button" value="Yes" />
		  <input type="button" value="No" />
		</div>
	  </div>
	</div>
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