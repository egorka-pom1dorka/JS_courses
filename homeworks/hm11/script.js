var container = document.getElementById('container');
var piece = 'html-parts/';
var settings = {
	"#text" : {
		path : piece + "lorem.html",
		handler : function(x){
			container.innerHTML = x;
		}
	},
	"#calc" : {
		path : piece + "calc.html",
		handler : function(x){
			container.innerHTML = x;
			document.getElementById('submit').addEventListener('click', function(){
				var one = +document.getElementsByName('one')[0].value;
				var two = +document.getElementsByName('two')[0].value;
				switch(document.getElementsByName('sign')[0].value){
					case '+': alert(one + two); break;
					case '-': alert(one - two); break;
					case '*': alert(one * two); break;
					case '/': alert(one / two); break;
					default: alert('Что за знак такой?'); break;
				}
			});
		}
	},
	"#img" : {
		path : piece + "img.html",
		handler : function(x){
			container.innerHTML = x;
		}
	},
	"#time" : {
		path : piece + "time.html",
		handler : function(x){
			container.innerHTML = x;
			document.getElementById('submit').addEventListener('click', function(){
				var end = new Date('2012-12-21 00:00:00');
				var time = document.getElementsByName('time')[0].value;
				var diff = new Date(time).getTime() - end.getTime();
				alert(Math.floor(diff / 1000 / 3600 / 24));
			});
		}
	},
	"#onelove" : {
		path : piece + "horror.html",
		handler : function(x){
			container.innerHTML = x;
		}
	}
}

var changeHashRoute = function(){
	if(location.hash in settings){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", settings[location.hash].path, true);
		xhr.onload = function(){
			settings[location.hash].handler(this.responseText);
		}
		xhr.send(null);
	}
}

window.onhashchange = changeHashRoute;

changeHashRoute();