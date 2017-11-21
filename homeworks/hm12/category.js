var one = document.getElementById("block-one");
var two = document.getElementById("block-two");
var three = document.getElementById("block-three");

var xhr = new XMLHttpRequest();
xhr.open("GET", "catalog.json", true);
xhr.onload = function(){
	var data = JSON.parse(this.responseText);

	one.innerHTML = "<h2>" + data[0].title + "</h2>";
	data[0].items.forEach(function(e){
		one.innerHTML += "<div class='item'><span>Название: " + e.title + " . </span><span>Цена: " + e.price + " . </span></div>";
	});
	one.classList.add('visible');

	two.innerHTML = "<h2>" + data[1].title + "</h2>";
	data[1].items.forEach(function(e){
		two.innerHTML += "<div class='item'><span>Название: " + e.title + " . </span><span>Цена: " + e.price + " . </span></div>";
	});

	three.innerHTML = "<h2>" + data[2].title + "</h2>";
	data[2].items.forEach(function(e){
		three.innerHTML += "<div class='item'><span>Название: " + e.title + " . </span><span>Цена: " + e.price + " . </span></div>";
	});

	var arr = [one, two, three];

	arr.forEach(function(e){
		e.addEventListener('click', function(event){
			if(event.target != this){
				arr.forEach(function(el){
					el.classList.remove('visible');
				});
				this.classList.add('visible');
			}
		});
	});
	
}
xhr.send(null)