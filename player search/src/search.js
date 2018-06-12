obj=
{
	sendRequest:function()
	{
		var player=document.getElementById('PlayerName');

		//using event handlers

		var search = new EventSource("http://localhost/Kriketo/player%20search/PlayerSearch.php?=$player");
		search.onmessage = function(event)
		{
			var arr = $.map(event, function(el) { return el }); // json is converted to an array of strings 
            alert($arr); 



		}
		

	},

	updateData:function()
	{
		//make the css visible
		alert("sa");
		document.getElementById("PlayerData").style.display = "block";
	}

}
obj =
{
	xhr: new XMLHttpRequest(), 
	var player=document.getElementById('PlayerName');
	sendRequest: function()
	{
		strlen = 0;
		this.xhr.onreadystatechange = this.update;
		this.xhr.open("GET", "http://localhost/Kriketo/player%20search/PlayerSearch.php?=$player", true);
		this.xhr.send();
	},
	
	update: function(str)
	{
		if(this.readyState == 4 && this.status == 200)
		{
			str = this.responseText;
				
			document.getElementById("PlayerData").style.display = "block";
			newdiv.innerHTML = str.slice(strlen);
			var arr = $.map(event, function(el) { return el });
			
			
		}
	}
	
}