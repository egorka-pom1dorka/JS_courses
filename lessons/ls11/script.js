var div = document.getElementById('block');

var settings = {
	'#main' : 'header.html',
	'#about' : 'footer.html',
	'#contacts' : 'content.html'
}

var changeHashRoute = function(){
	if(location.hash in settings){
		var path = settings[location.hash];
		var xhr = new XMLHttpRequest();
		xhr.open("GET", path, true);
		xhr.onload = function(){
			div.innerHTML = this.responseText;
		}
		xhr.send(null);
	}
}

window.onhashchange = changeHashRoute;

changeHashRoute();