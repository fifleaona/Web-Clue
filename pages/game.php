<?php
  // define title: 
  define('TITLE', 'Game time!');

  // include header file
  include_once('../templates/header.html');

  // header files contains nav element
  // ends with <section id="main">
?>
  <div id="pass" class="modal">
    <!--Full screen, hides list & cards from other players -->
    <div class="words">
      Hello <span id="playerName"></span>! Are you ready to start your turn?
    </div>
    <div class="buttons">
      <input type="button" class="btn" value="Let's go!" />
    </div>
  </div>

  <div class="absoluteWrapper">
  <div id="turnOptions" class="popup">
    <div id="wasAccused" class="words hidden">
      You were accused by <span id="accusor"></span> and now you're in <span id="accusedRoom"></span>. You can make an accusation.
    </div>

    <div id="secretPassage" class="words hidden">
      There is a secret passage to <span id="secretPassageRoom"></span>! You can take the secret passage.
    </div>

    <div id="rollDie" class="words">
      You can roll the <span id="dieVSdice"></span>.
    </div>

    <div class="buttons">
      <input type="button" value="Make Accusation" id="makeAccusation" class="btn hidden" />
      <input type="button" value="Take Secret Passage" id="takeSecretPassage" class="btn hidden" />
      <input type="button" value="Roll" id="rollForTurn" class="btn" />
    </div>
  </div>
</div>

  <div id="knownWrapper" class="right">
    <!-- Canvas element -->
	<div class="innerWrapper">
      <canvas id="knownCanvas"></canvas>
      <canvas id="p1known" class="known"></canvas>
      <canvas id="p2known" class="known"></canvas>
      <canvas id="p3known" class="known"></canvas>
      <canvas id="p4known" class="known"></canvas>
      <canvas id="p5known" class="known"></canvas>
      <canvas id="p6known" class="known"></canvas>
	</div>
  </div>
  
  <div id="boardWrapper" class="center">
    <!-- Canvas element -->
    <div class="innerWrapper">
	  <canvas id="spaces"></canvas>
      <canvas id="boardCanvas"></canvas>
  	  <canvas id="p1piece" class="characterPiece"></canvas>
 	  <canvas id="p2piece" class="characterPiece"></canvas>
	  <canvas id="p3piece" class="characterPiece"></canvas>
	  <canvas id="p4piece" class="characterPiece"></canvas>
	  <canvas id="p5piece" class="characterPiece"></canvas>
	  <canvas id="p6piece" class="characterPiece"></canvas>
    </div>
  </div>
  
  <div id="handWrapper" class="affix bottom">
    <div class="innerWrapper">
      <div id="p1hand">
        <div class="characterCameo">
        </div>
		
        <div class="cards">
        </div>
      </div>

      <div id="p2hand">
        <div class="characterCameo">
        </div>
		
        <div class="cards">
        </div>
      </div>


      <div id="p3hand">
        <div class="characterCameo">
        </div>
		
        <div class="cards">
        </div>
      </div>


      <div id="p4hand">
        <div class="characterCameo">
        </div>
		
        <div class="cards">
        </div>
      </div>


      <div id="p5hand">
        <div class="characterCameo">
        </div>
		
        <div class="cards">
        </div>
      </div>


      <div id="p6hand">
        <div class="characterCameo">
        </div>
		
        <div class="cards">
        </div>
      </div>
    </div>
  </div>
	  
  <div id="makeAccusation" class="popup">
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
	  
  <div id="confirmTurn" class="popup">
    <div class="words">
      End turn?
    </div>

    <div class="buttons">
      <input type="button" value="Yes" id="endTurnYes" />
      <input type="button" value="No" id="endTurnNo" />
    </div>
  </div>
<?php
  // give info to javascript file
  
  // game will be run by javascript, not php
  include_once('../templates/footer.html')
?>