<?php
	// define title: define('TITLE', '...');
	
	// include header file
	include('templates/header.html');
	include('templates/functions.php');
	
	// header files contains nav element
	$problem = false;
?>


<div id="buttonGroup" class="btn-group-vertical col-xs-12" role="group" aria-label="buttonGroup">
  <input type="button" class="btn" data-toggle="modal" data-target="#startGame" id="newGameBtn" name="newGameBtn" value="Start New Game" />
  <input type="button" id="joinGameBtn" name="joinGameBtn" class="btn" data-toggle="modal" data-target="#joinGame" value="Join Game" />
  <input type="button" id="rulesBtn" name="rulesBtn" class="btn" data-toggle="modal" data-target="#rules" value="Rules" />
</div>
	
<div id="startGame" class="modal" tabindex="-1" role="dialog" aria-labelledby="startGameTitle">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
	  <div class="modal-header">
	    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
		<h4 class="modal-title" id="startGameTitle">Start a New Game</h4>
	  </div>
	  <div class="modal-body">
	    <input type="button" class="btn" data-toggle="modal" data-target="#numPlayers" id="passGameBtn" name="passGameBtn" value="Pass & Play" />
		<input type="button" class="btn" id="onlineGameBtn" name="onlineGameBtn" value="Start a Room" />
	  </div>
	  <div class="modal-footer">
	    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	  </div>
	</div>
  </div>
</div>

<div id="joinGame" class="modal" tabindex="-1" role="dialog" aria-labelledby="joinServer">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
	  <div class="modal-header">
	    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
		<h4 class="modal-title" id="joinServer">Join an Existing Server</h4>
	  </div>
	  <div class="modal-body">
	    <form id="joinGameForm" method="POST">
		  <label for="gameID">Enter the game ID</label>
		  <input type="tel" id="gameID" name="gameID" class="form-control" />
		  <?php
		    if($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST['gameID']) && !empty($_POST['submitGameID']))
			{
			  $problem=true;
			  print '<span class="error">Please enter a game ID</span>';
			}
		  ?>
		  <input type="submit" id="submitGameID" name="submitGameID" class="btn" />
		</form>
	  </div>
	  <div class="modal-footer">
	    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	  </div>
	</div>
  </div>
</div>

<div id="numPlayers" class="modal" tabindex="-1" role="dialog" aria-labelledby="numberPlayers">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
	  <div class="modal-header">
	    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
		<h4 class="modal-title" id="numberPlayers">Enter the Number of Players</h4>
	  </div>
	  <div class="modal-body">
	    <form id="numPlayersForm" method="POST">
		  <label for="nPlayers">How many people are playing?</label>
		  <input type="number" name="nPlayers" id="nPlayers" class="form-control" min="3" max="6" />
		  <?php
		    if($_SERVER['REQUEST_METHOD']=='POST' && empty($_POST['nPlayers']) && !empty($_POST['submitPlayers']))
			{
			  $problem = true;
			  print '<span class="error">Please enter the number of players.</span>';
			}
		  ?>
		  <input type="submit" id="submitPlayers" name="submitPlayers" class="btn" value="Let's Play!" />
		  <?php
		    if($_SERVER['REQUEST_METHOD']=='POST'&& !$problem)
			{
			  $_SESSION['nPlayers'] = trim($_POST['nPlayers']);
			  header("Location: pages/selection.php");
			}
		  ?>
		</form>
	  </div>
	  <div class="modal-footer">
	    <button type="button" class="btn btn-default" data-dimiss="modal">Close</button>
	  </div>
	</div>
  </div>
</div>
		
<?php
	include('templates/rules.html');
	include('templates/footer.html');
?>