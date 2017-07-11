String.prototype.capitalizeFirstLetter = function()
{
  return this.charAt(0).toUpperCase() + this.slice(1);
}

$(function()
{	
  // get number of players
  var startImgURL = '../imgs/characters/';
  var endImgURL = '.png';
	
  // init variables
  var charName;
  var pName;
  var imgStr;
  var img;
  var playerArr = [];
  var cntr;
  var currentVals;
  var appendName = '<input type="hidden" name="plrName" value="';
  var appendChar = '<input type="hidden" name="chrName" value="';
  var appendEnd = '" />';
	
  // get player name - open name window
  $('#getPlayerName').modal('show');
  $('#pNameSubmit').click(function()
  {
    $('#getPlayerName').modal('hide');
  });
	
  // when submit button is pressed
  $('#pNameSubmit').click(function()
  {
    // if empty
    if( !$('#playerName').val() )
    {
      // display error
    }
    // otherwise
    else
    {
      // store the name
      pName = $('#playerName').val();
				
      // display name
      $('#plyrNameConfirm').html(pName);   
    }
  });
		
  // on the confirmation window:
  // yes is pressed
  $('#playerNameConfirmY').click(function()
  {
	// update name
    $('#pName').html(pName);
		
    appendName = appendName + pName + appendEnd;
  });
	
  // when an icon with the character select class is pressed
  $('.selectChar').click(function()
  {
	console.log('hi')
    // check classes
    if( $(this).attr('class').split(' ')[1] == 'taken')
    {
      // create an alert
			
    }
    else
    {
      // get character name
      charName = $(this).attr('name');
		
      // update name
      $('#charName').html(charName.capitalizeFirstLetter());
    }
  });
  // on char confirm window:
	
  // if yes is pressed
  $('#charConfirmY').click(function()
  {
    // store selectChars
    appendChar = appendChar + charName + appendEnd;
    $('#getChar').append(appendName);
    $('#getChar').append(appendChar);
  });
});