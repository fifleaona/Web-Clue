<?php
	// define title: define('TITLE', '...');
	
	// include header file
	include('templates/header.html');
	include('templates/functions.php');
	
	// header files contains nav element
	$problem = false;
?>

<div id="newGame">
  <input type="button" class="btn" data-toggle="modal" data-target="#startGame" id="newGameBtn" name="newGameBtn" value="Start New Game" />
</div>
	
<div id="joinGameBtn">
  <input type="button" id="joinGameBtn" name="joinGameBtn" class="btn" value="Join Game" />
</div>
	
<div id="rulesBtn">
  <input type="button" id="rulesBtn" name="rulesBtn" class="btn" value="Rules" />
</div>
	
<div id="startGame" class="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
	  <div class="modal-header">
	    <button type="button" class="close" data-dismiss="modal">
		<h4 class="modal-title" id="myModalLabel">Title</h4>
	  </div>
	  <div class="modal-body">
	    <input type="button" class="btn" id="passGameBtn" name="passGameBtn" value="Pass & Play" />
		<input type="button" class="btn" id="onlineGameBtn" name="onlineGameBtn" value="Start a Room" />
	  </div>
	  <div class="modal-footer">
	    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
	  </div>
	</div>
  </div>
</div>
	
<div id="joinGame" class="modal">
  <div id="joinGameClose" class="close">
    <a href="#">X</a>
  </div>
		
  <div>
    <form id="joinGameForm" method="POST">
      <label for="gameNumber">Enter the game ID</label>
      <input type="number" id="gameID" name="gameID" class="num" />
        <?php
          if($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST['gameID']) && !empty($_POST['submitGameID']))
          {
            $problem = true;
            print '<span class="error">Please enter a game ID.</span>';
          }
        ?>
      <input type="submit" id="submitGameID" name="submitGameID" class="btn" />
    </form>
  </div>
</div>
	
	
<div id="numPlayers" class="modal">
  <div id="numPlayersClose" class="close">
    <a href="#">X</a>
  </div>
		
  <div id="numPlayersForm">
    <form id="numberPlayers" method="POST">
      <label for="nPlayers">How many people are playing?</label>
				<br /><br />
				<input type="number" name="nPlayers" id="nPlayers" class="num" min="3" max="6" />
				<?php
					if($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST['nPlayers']) && !empty($_POST['submitPlayers']))
					{
						$problem = true;
						print '<span class="error">Please enter the number of players.</span>';
					}
				?>
				<br /><br />
				<input type="submit" id="submitPlayers" name="submitPlayers" class="btn" value="Let's Play!" />
			</form>
			<?php
				if($_SERVER['REQUEST_METHOD'] == 'POST' && !$problem)
				{
					$_SESSION['nPlayers'] = trim($_POST['nPlayers']);
					header("Location: selection.php");
				}
			?>
			
		</div>
	</div>
	
<?php
	include('templates/rules.html');
	include('templates/footer.html');
?>