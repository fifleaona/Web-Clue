$(function()
{
  $("#rulesBtn").click(function()
  {
    $("#rules").slideToggle();
    return false;
  });
	
  $("#rulesClose").click(function()
  {
    $("#rules").slideToggle();
    return false;
  });

  $("#newGameBtn").click(function()
  {
    $("#startGame").slideToggle();
    return false;
  });
	
  $("#startGameClose").click(function()
  {
    $("#startGame").slideToggle();
    return false;
  });
	
  $("#passGameBtn").click(function()
  {
    $("#startGame").slideToggle();
    $("#numPlayers").slideToggle();
    return false;
  });
	
  $("#numPlayersClose").click(function()
  {
    $("#numPlayers").slideToggle();
  });
	
  $("#joinGameBtn").click(function()
  {
    $("#joinGame").slideToggle();
  });
	
  $("#joinGameClose").click(function()
  {
    $("#joinGame").slideToggle();
  });
});