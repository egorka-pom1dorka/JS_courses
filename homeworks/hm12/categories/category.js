var first = document.getElementById("block-one");
var second = document.getElementById("block-two");
var third = document.getElementById("block-three");
var domArr = [first, second, third];
var titleArr = ['first', 'second', 'third'];

var template = function(item){
	var out = "<h2>" + item.title + "</h2>";
	item.items.forEach(function(e){
		out += "<div class='item'><span>Название: " + e.title + " . </span><span>Цена: " + e.price + " . </span></div>";
	});
	return out;
}

for(var i = 0; i < 3; i++){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", titleArr[i] + "Category.json", true);
	(function(x){
		xhr.onload = function(){
			var data = JSON.parse(this.responseText);
			var html = template(data);
			domArr[x].innerHTML = html;
			if(titleArr[x] == "first"){
				domArr[x].classList.add('visible');
			}
		}
		xhr.send(null);
	})(i);
}

domArr.forEach(function(e){
	e.addEventListener('click', function(event){
		if(event.target != this){
			domArr.forEach(function(el){
				el.classList.remove('visible');
			});
			this.classList.add('visible');
		}
	});
});