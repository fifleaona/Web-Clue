<?php
  // define title: 
  define('TITLE', 'Players, select your characters!');
	
  // include header file
  include('../templates/header.html');

  // function to determine whether or not to append "taken" class
  function isCharTaken($char, $arr)
  {
    foreach($arr as $value)
	{
      if($value==$char)
      {
        return true;
      }
    }
	return false;
  }
  	
  $_SESSION['cntr'] = ((isset($_SESSION['cntr'])) ? $_SESSION['cntr'] : 1);

  if($_SERVER['REQUEST_METHOD']=='POST' && $_SESSION['cntr'] >= $_SESSION['nPlayers'])
  {
    header("Location: game.php");
  }
  if($_SERVER['REQUEST_METHOD']=='GET' && isset($_GET['charConfirmY']))
  {
	$_SESSION['players'] = ((isset($_SESSION['players'])) ? $_SESSION['players'] : []);
    $_SESSION['players'][] = array
    (
      'playerNum' => $_SESSION['cntr'], 
      'playerName' => $_GET['plrName'], 
      'charName' => $_GET['chrName']
    );
	
	if($_SESSION['cntr'] >= $_SESSION['nPlayers'])
	{
		header("Location:game.php");
	}
	else
	{
	  $_SESSION['cntr'] = $_SESSION['cntr'] + 1;
	}
  }
  $charArr = [];
	
  if(isset($_SESSION['players']))
  {
    for($cntr=0; $cntr<count($_SESSION['players']); $cntr++)
    {
      $charArr[] = $_SESSION['players'][$cntr]['charName'];
    }
  }
  
  $taken = false;
?>

<div id="selectChar" class="col-xs-12">
  <div id="welcome">
    <h3>Welcome to the game, <span id="pName"></span>! Please select your character.</h3>
  </div>
		
  <?php
    for($cntr=1; $cntr<=6; $cntr++)
    {
      $class = 'selectChar';
       switch($cntr)
       {
         case 1:
           $name = 'ariel';
         break;
		
         case 2:
           $name = 'aurora';
         break;
		
         case 3:
           $name = 'belle';
         break;
		
         case 4:
           $name = 'jasmine';
         break;
        
		  case 5:
            $name = 'pocahontas';
          break;
        
		  case 6:
            $name = 'tiana';
          break;
        }
      
	    if(isCharTaken($name, $charArr) )
        {
          $class = $class . ' taken';
        }
				
        print '<p class="selectCharP">';
        print '<img src="../imgs/selection/' . $name . '.png" id="' . $name . 'Select" name="' . $name . '" class="' . $class . '" data-toggle="modal" data-target="#characterConfirm"/>';
        print '</p>';
      }
    ?>
</div>

<div id="getPlayerName" class="modal" tabindex="-1" role="dialog" aria-labelledby="getNameLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
	  <div class="modal-header">
	    <h4 id="getNameLabel">Welcome Player <?php print $_SESSION['cntr'] ?></h4>
	  </div>
	  <div class="modal-body">
	    <label for="playerName">What do you go by?</label>
		<input type="text" class="form-control" id="playerName" name="playerName" />
		<input type="button" class="btn" data-toggle="modal" data-target="#playerNameConfirm" id="pNameSubmit" name="pNameSubmit" value="Submit" />
	  </div>
	</div>
  </div>
</div>
	
<div id="playerNameConfirm" class="modal" tabindex="-1" role="dialog" aria-labelledby="confirmName">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
	  <div class="modal-header">
	    <h4 id="confirmName">Just to confirm...</h4>
	  </div>
	  <div class="modal-body">
	    <form>
		  <label for="playerNameConfirm">You'll go by <span id="plyrNameConfirm"></span>, cool?</label>
		  <input type="button" data-dismiss="modal" id="playerNameConfirmY" name="playerNameConfirmY" class="btn YN" value="Yes" />
		  <input type="button" data-toggle="modal" data-target="#getPlayerName" id="playerNameConfirmN" name="playerNameConfirmN" class="btn YN" value="No" />
		</form>
	  </div>
	</div>
  </div>
</div>
	
<div id="characterConfirm" class="modal" tabindex="-1" role="dialog" aria-labelledby="confirmChar">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
	  <div class="modal-header">
	    <h4 id="confirmChar">Just to confirm...</h4>
	  </div>
	  <div class="modal-content">
	    <form id="getChar">
		  <label for="charConfirmY">You'd like to be <span id="charName"></span> this game?</label>
		  <input type="submit" id="charConfirmY" name="charConfirmY" class="btn YN" vaue="Yes" />
		  <input type="button" data-dimiss="modal" id="charConfirmN" name="charConfirmN" class="btn YN" vaue="No" />
		</form>
	  </div>
	</div>
  </div>
</div>

<?php
  include('../templates/footer.html')
?>