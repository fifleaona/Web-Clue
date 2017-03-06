function hideList()
{
	var list = $("#list").width();
	
	$("#known").animate(
	{
		left: "-=" + list
	}, "fast");
	
	$(".adjustForKnown").animate(
	{
		left: "-=" + list,
		width: "+=" + list
	}, "fast");
}

function showList()
{
	var list = $("#list").width();
	
	$("#known").animate(
	{
		left: "+=" + list
	}, "fast");
	
	$(".adjustForKnown").animate(
	{
		left: "+=" + list,
		width: "-=" + list
	}, "fast");
}

function toggleList()
{
	var listOffset = $("#list").offset();
	
	if(listOffset.left >= 0)
	{
		// currently showing, need to hide
		hideList();
	}
	else
	{
		// currently hidden, need to show
		showList();
	}
}

function hidePI()
{
	var hand = $("#hand").height();
	
	$("#playerInterface").animate(
	{
		bottom: "-=" + hand
	}, "fast");
}

function showPI()
{
	var hand = $("#hand").height();
	
	$("#playerInterface").animate(
	{
		bottom: "+=" + hand
	}, "fast");
}

function togglePI()
{
	// broken, need to fix
	var piOffset = $("#playerInterface").offset();
	var window_h = $( window ).height();
	var hand_h = $( "#hand" ).height();
	
	if(piOffset.top < (window_h - hand_h))
	{
		// currently showing, need to hide
		hidePI();
	}
	else
	{
		// currently hidden, need to show
		showPI();
	}
}
