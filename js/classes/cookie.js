var COOKIE =
{
	setCookie: function(name, value, expire)
	{
		'use strict';
		expire
		var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
		str += ';expires=' + expire.toGMTString() + ';path=/';
		
		document.cookie = str;
	},
	
	getCookie: function(name)
	{
		'use strict';
		
		var len = name.length;
		var cookies = document.cookie.split(';');
		
		for(var i=0, count=cookies.length; i<count; i++)
		{
			var value = (cookies[i].slice(0,1) == ' ') ? cookies[i].slice(1) : cookies[i];
			
			if (cookies[i].slice(0,1) == ' ')
			{
				var value = cookies[i].slice(1);
			}
			else
			{
				var value = cookies[i];
			}
			
			value = decodeURIComponent(value);
			
			if(value.slice(0,len) == name)
			{
				return value;
			}
		}
	},
	
	deleteCookie: function(name)
	{
		'use strict';
		
		document.cookie = encodeURIComponent(name) + '=;expires=Thu, 01-Jan-1970 00:00:01 GMT';
	}
};