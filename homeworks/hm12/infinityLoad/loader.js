var div = document.getElementById('container');
var loading = document.getElementById('loading');

var template = function(items){
	var html = '';
	items.forEach(function(e){
		html += "<div class='item'><h2>" + e.title + "</h2><p>" + e.description + "</p></div>";
	});
	return html;
}

var eventListener = function(e){
	var last = container.lastElementChild;
	if(last.getBoundingClientRect().bottom < innerHeight){
		getItems();
	}
}

var getItems = function(){
	document.removeEventListener('scroll', eventListener);
	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'items.json', true);
	xhr.onload = function(){
		var data = JSON.parse(this.responseText);
		var html = template(data.items);
		container.innerHTML += html;
		document.addEventListener('scroll', eventListener);
	}
	xhr.send(null);
}

document.addEventListener('scroll', eventListener);
getItems();