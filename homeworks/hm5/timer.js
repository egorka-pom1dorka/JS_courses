var div = document.getElementById('wrapper');

setInterval(function(){
	var date = new Date;
	var tommorow = new Date((+date.getYear() + 1900) + '-' + (+date.getMonth() + 1) + '-' + (+date.getDate() + 1) + " 00:00:00");
	var diff = Math.floor((tommorow.getTime() - date.getTime()) / 1000);
	var hours = Math.floor(diff / 3600);
	var minutes = Math.floor((diff - hours * 3600) / 60);
	var seconds = Math.floor(diff - hours * 3600 - minutes * 60);

	if(hours < 10){
		hours = "0" + hours;
	}

	if(minutes < 10){
		minutes = "0" + minutes;
	}

	if(seconds < 10){
		seconds = "0" + seconds;
	}

	div.innerHTML = "<p class='time'>" + hours + ":" + minutes + ":" + seconds +"</p><p class='note'>Until your death</p>";
}, 1000);

