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
  $('#getPlayerName').slideToggle();
	
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
			
      // close name window
      $('#getPlayerName').toggle();
			
      // display name
      $('#plyrNameConfirm').html(pName);
      
      // open confirmation window
      $('#playerNameConfirm').toggle();
    }
  });
		
  // on the confirmation window:
  // yes is pressed
  $('#playerNameConfirmY').click(function()
  {
    // close confirmation window
    $('#playerNameConfirm').toggle();
		
    // open selectChar window
    $('#selectChar').toggle();
		
    // update name
    $('#pName').html(pName);
		
    appendName = appendName + pName + appendEnd;
  });
	
  // no is pressed
  $('#playerNameConfirmN').click(function()
  {
    // close confirmation window
    $('#playerNameConfirm').toggle();
    
	// open get name window
    $('#getPlayerName').toggle();
  });
	
  // when an icon with the character select class is pressed
  $('.selectChar').click(function()
  {
    // check classes
    if( $(this).attr('class').split(' ')[1] == 'taken')
    {
      // create an alert
			
    }
    else
    {
      // get character name
      charName = $(this).attr('name');
		
      // update image URL
      imgStr = startImgURL + charName + endImgURL;
		
      // update image tag & display image
      img = $('<img class="leftalign" />').attr('src', imgStr).on('load', function()
      {
        $('#charImg').append(img);
      });
		
      // update name
      $('#charName').html(charName.capitalizeFirstLetter());
		
      // close selectChar window
      $('#selectChar').toggle();
		
      // open confirmation window
      $('#characterConfirm').toggle();
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
	
  // no is pressed
  $('#charConfirmN').click(function()
  {
    // close confirmation window
    $('#characterConfirm').toggle();
    
	// open selectChar window
    $('#selectChar').toggle();
  });
});