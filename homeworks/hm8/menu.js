var menu = [

	{
		title : 'action_1',
		action : function(){ alert("From action 1"); }
	},

	{
		title : 'action_2',
		action : function(){ alert("From action 2"); }
	},

	{
		title : 'action_3',
		action : function(){ alert("From action 3"); }
	}

];

var body = document.querySelector('body');
body.addEventListener('contextmenu', function(event){
	event.preventDefault();
	var output = "<ul id='menu'>";
	menu.forEach(function(e){;
		output += "<li>" + e.title + "</li>";
	});
	output += "</ul>";

	body.innerHTML = output;

	var ul = document.getElementById('menu');
	var len = ul.children.length;

	var fromtop = event.screenY + ul.getBoundingClientRect().height;

	if(fromtop > window.screen.availHeight){
		ul.style.top = (event.clientY - ul.getBoundingClientRect().height) + "px";
	}else{
		ul.style.top = event.clientY + "px";
	}

	var fromleft = event.screenX + ul.getBoundingClientRect().width;

	if(fromleft > window.screen.availWidth){
		ul.style.left = (event.clientX - ul.getBoundingClientRect().width) + "px";
	}else{
		ul.style.left = event.clientX + "px";
	}
	
	ul.style.display = 'block';
	
	for(var i = 0; i < len; i++){
		ul.children[i].addEventListener('click', function(){
			var text = this.outerText;
			menu.forEach(function(elem){
				if(elem.title == text){
					elem.action();
				}
			});
		});
	}

});

body.addEventListener('click', function(e){
	if(e.target == this){
		this.innerHTML = '';
	}
});
