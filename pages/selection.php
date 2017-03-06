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
  <div id="selectChar" class="modal">
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
        print '<img src="../imgs/selection/' . $name . '.png" id="' . $name . 'Select" name="' . $name . '" class="' . $class . '" />';
        print '</p>';
      }
    ?>
  </div>

  <div id="getPlayerName" class="modal">
    <h3>Welcome player <span id="pNum">
      <?php
        print $_SESSION['cntr'];
      ?>
      </span>!</h3>
      <label for="playerName">What is your name?</label>
      <input type="text" id="playerName" name="playerName" />
      <input type="button" id="pNameSubmit" name="pNameSubmit" class="btn" value="Submit"/>
  </div>
	
  <div id="playerNameConfirm" class="modal">
    <label for="playerNameConfirmY">You said your name is <span id="plyrNameConfirm"></span>. 
       Is this correct?</label>
    <input type="button" id="playerNameConfirmY" name="playerConfirmY" class="btn YN" value="Yes" />
    <input type="button" id="playerNameConfirmN" name="playerConfirmN" class= "btn YN" value="No" />
  </div>
	
  <div id="characterConfirm" class="modal">
    <span id="charImg"></span>
    <form id="getChar">
      <label>You chose <span id="charName"></span>. Is that correct?</label>
      <br /><br />
      
	  <input type="submit" id="charConfirmY" name="charConfirmY" class="btn YN" value="Yes" />
      <br /><br />
      
	  <input type="button" id="charConfirmN" name="charConfirmN" class="btn YN" value="No" />
    </form>
  </div>

<?php
  include('../templates/footer.html')
?>