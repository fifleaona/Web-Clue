function resizeElem()
{
  // percentage values
  var known_w = 0.2;
  var list_w = 0.95;
  var pi_h = 0.25;
  var hand_h = 0.95;
  var btn_w = 0.05;
	
  // window dimensions
  var window_h = $( window ).height();
  var window_w = $( window ).width();

  // offset values
  var c_known_o = $( "#known" ).offset();
  var c_pi_o = $( "#playerInterface" ).offset();
	
  // calculate new values - dimensions
  var n_known_w = known_w * window_w;
  var n_list_w = n_known_w * list_w;

  var n_pi_h = pi_h * window_h;
  var n_hand_h = n_pi_h * hand_h;
	
  // assign new values
  $( "#known" ).width = n_known_w;
  $( "#playerInterface" ).height = n_pi_h;
	
  // calculate new values - offset
  if( c_known_o.left >= 0)
  {
    // currently showing
    $( "#known" ).animate(
    {
      left: 0
    }, "fast" );
		
    $(".adjustForKnown").animate(
    {
      left: n_known_w,
      width: window_w - n_known_w
    }, "fast");
  }
  else
  {
    // currently hiding
    $( "#known" ).animate(
    {
      left: 0 - n_list_w
    }, "fast" );
		
		$( ".adjustForKnown" ).animate({
			left: n_known_w * btn_w,
			width: window_w - (n_known_w * btn_w)
		}, "fast");
	}
	
	if( c_pi_o.top > window_h )
	{
		// hand is hidden
		$( "#playerInterface" ).animate(
		{
			bottom: 0 - n_hand_h
		}, "fast");
	}
	else
	{
		// hand is showing
		$( "#playerInterface" ).animate(
		{
			bottom: 0
		}, "fast");
	}
}