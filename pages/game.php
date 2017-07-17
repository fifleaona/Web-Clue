<?php
  // define title: 
  define('TITLE', 'Game time!');

  // include header file
  include_once('../templates/header.html');

  // header files contains nav element
  // ends with <section id="main">
?>

<section id="menu">
  <canvas id="knownCanvas"></canvas>
  <canvas id="p1known" class="known"></canvas>
  <canvas id="p2known" class="known"></canvas>
  <canvas id="p3known" class="known"></canvas>
  <canvas id="p4known" class="known"></canvas>
  <canvas id="p5known" class="known"></canvas>
  <canvas id="p6known" class="known"></canvas>
</section>

<main id="panel">
  <header>
    <button class="toggle-button">☰</button>
  </header>

  <div id="pass" class="modal" tabindex="-1" role="dialog" aria-labelledby="passLabel">
    <div class="modal-dialog" role="document">
	  <div class="modal-content">
	    <div class="modal-header">
		  <h4 class="modal-title" id="passLabel">Pass to <span id="playerName"></span></h4>
		</div>
		<div class="modal-body">
		  Alright! <span id="playerName"></span>, are you ready to start your turn?
		</div>
		<div class="modal-footer">
		  <button type="button" class="btn btn-default" data-dismiss="modal">Let's go!</button>
		</div>
	  </div>
	</div>
    <!--Full screen, hides list & cards from other players -->
  </div>

  <div id="turnOptions" class="popup">
    <div id="wasAccused" class="words hidden">
      You were suggested by <span id="accusor"></span> and now you're in <span id="accusedRoom"></span>. You can make a suggestion and/or an accusation.
    </div>

    <div id="secretPassage" class="words hidden">
      There is a secret passage to <span class="secretPassageRoom"></span>! You choose to take the secret passage instead of rolling. When you enter <span class="secretPassageRoom"></span>, you'll be able to make a suggestion and/or accusation.
    </div>

    <div id="rollDie" class="words">
      You can roll the <span id="dieVSdice"></span>.
    </div>

    <div class="buttons">
      <input type="button" value="Make Suggestion" id="makeSuggestionBtn" class="btn hidden" />
      <input type="button" value="Make Accusation" id="makeAccusationBtn" class="btn hidden" />
      <input type="button" value="Take Secret Passage" id="takeSecretPassage" class="btn hidden" />
      <input type="button" value="Roll" id="rollForTurn" class="btn" />
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
	  
  <div id="confirmAccusation" class="popup">
  </div>
	  
  <div id="enterRoom" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
	  <div class="modal-content"> 
	    <div class="modal-header">
		  <h4 class="modal-title">Suggestion or Final  Accusation?</h4>  
		</div>
		<div class="modal-body">
		  <input type="button" class="btn" data-toggle="modal" data-target="#makeSuggestion" value="Suggestion" id="suggestionBtn" name="suggestionBtn" />
		  <input type="button" value="Final Accusation" id="accusationBtn" name="accusationBtn" data-toggle="modal" data-target="#makeAccusation" />
		</div>
	  </div>
	</div>
  </div>
	  
  <div id="makeSuggestion" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
	  <div class="modal-content">
	    <div class="modal-header">
		  <h4 class="modal-title">Making a Suggestion</h4>
		</div>
		<div class="modal-body">
		  <form class="form-horizontal" id="suggestionForm">
			<div class="form-group">
			  <label for="sSuspectGuess" class="col-xs-2">Who</label>
			  <div class="col-xs-10">
			    <select id="sSuspectGuess" class="form-control">
				  <option value="ariel">Ariel</option>
				  <option value="aurora">Aurora</option>
				  <option value="belle">Belle</option>
				  <option value="jasmine">Jasmine</option>
				  <option value="pocahontas">Pocahontas</option>
				  <option value="tiana">Tiana</option>
				</select>
			  </div>
			</div>
			<div class="form-group">
			  <label for="sWeaponGuess" class="form-label col-xs-2">With</label>
			  <div class="col-xs-10">
			    <select id="sWeaponGuess" class="form-control">
				  <option value="lamp">Lamp</option>
				  <option value="rose">Rose</option>
				  <option value="spear">Spear</option>
				  <option value="spindle">Spindle</option>
				  <option value="tiara">Tiara</option>
				  <option value="trident">Trident</option>
				</select>
			  </div>
			</div>
			<div class="form-group">
			  <label for="sRoomGuess" class="form-label col-xs-2">Where</label>
			  <div class="col-xs-10">
			    <select class="disabled" id="sRoomGuess" class="form-control">
				  <option value="ballroom">Ballroom</option>
				  <option value="cave">Cave</option>
				  <option value="cottage">Cottage</option>
				  <option value="forest">Forest</option>
				  <option value="garden">Garden</option>
				  <option value="grotto">Grotto</option>
				  <option value="kitchen">Kitchen</option>
				  <option value="tent">Tent</option>
				  <option value="tower">Tower</option>
				</select>
			  </div>
			</div>
		  </form>
		  
		  <div id="suggestionConfirmation" class="hidden">
		    <span id="sSuspect"></span> in the <span id="sRoom"></span> with the <span id="sWeapon"></span>
		  </div>
		</div>
		<div class="modal-footer">
		  <input type="button" value="Go" class="btn" id="suggestionGo" />
		  <input type="button" value="Confirm" class="btn hidden" id="suggestionConfirm" />
		</div>
	  </div>
	</div>
  </div>
  
  <div id="makeAccusation" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
	  <div class="modal-content">
	    <div class="modal-header">
		  <h4 class="modal-title">Final Accusation!</h4>
		</div>
		<div class="modal-body">
		  <form class="form-horizontal" id="accusationForm">
			<div class="form-group">
			  <label for="aSuspectGuess">Who</label>
			  <div class="col-xs-10">
			    <select id="aSuspectGuess">
				  <option value="">Select Suspect</option>
				  <option value="ariel">Ariel</option>
				  <option value="aurora">Aurora</option>
				  <option value="belle">Belle</option>
				  <option value="jasmine">Jasmine</option>
				  <option value="pocahontas">Pocahontas</option>
				  <option value="tiana">Tiana</option>
				</select>
			  </div>
			</div>
			<div class="form-group">
			  <label for="aWeaponGuess">With</label>
			  <div class="col-xs-10">
			    <select id="aWeaponGuess">
				  <option value="">Select Weapon</option>
				  <option value="lamp">Lamp</option>
				  <option value="rose">Rose</option>
				  <option value="spear">Spear</option>
				  <option value="spindle">Spindle</option>
				  <option value="tiara">Tiara</option>
				  <option value="trident">Trident</option>
				</select>
			  </div>
			</div>
			<div class="form-group">
			  <label for="aRoomGuess">Where</label>
			  <div class="col-xs-10">
			    <select id="aRoomGuess">
				  <option value="ballroom">Ballroom</option>
				  <option value="cave">Cave</option>
				  <option value="cottage">Cottage</option>
				  <option value="forest">Forest</option>
				  <option value="garden">Garden</option>
				  <option value="grotto">Grotto</option>
				  <option value="kitchen">Kitchen</option>
				  <option value="tent">Tent</option>
				  <option value="tower">Tower</option>
				</select>
			  </div>
			</div>
		  </form>
		  
		  <div id="accusationConfirmation" class="hidden">
		    <span id="aSuspect"></span> in the <span id="aRoom"></span> with the <span id="aWeapon"></span>
		  </div>
		</div>
		<div class="modal-footer">
		  <input type="button" value="Go" class="btn" id="suggestionGo" />
		  <input type="button" value="Confirm" class="btn hidden" id="suggestionConfirm" />
		</div>
	  </div>
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
  
</main>
<?php
  // give info to javascript file
  
  // game will be run by javascript, not php
  include_once('../templates/footer.html')
?>