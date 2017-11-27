var list = document.getElementById('list');
var totalAmount = document.getElementById('total-amount');
var totalSum = document.getElementById('total-sum');

var getHTML = function(item){
	return "<div class='item'><p>Name - " + item.name + 
	"</p><p>Price - <span class='price'>" + item.price 
	+ "</span></p><p>Country - " + item.country + 
	"</p><button type='button' class='increment'>+</button>" + "<span class='amount'>1</span>" +
	"<button type='button' class='decrement'>-</button>" + 
	"<button type='button' class='add'>In card</button><hr></div>";
}

var xhr = new XMLHttpRequest();
xhr.open("GET", 'catalog.csv', true);
xhr.onload = function(){
	var lines = this.responseText.split("\n");
	var header = lines[0].split(",");
	lines.splice(0, 1);

	lines.forEach(function(e){
		var arr = e.split(",");
		var item = {};
		
		Object.defineProperty(item, header[0], {value : arr[0]});
		Object.defineProperty(item, header[1], {value : arr[1]});
		// In this way I get field with quotes in object, that's why I can't get value of this field. JavaScript, WTF?
		// Object.defineProperty(item, header[2], {value : arr[2]});
		Object.defineProperty(item, "country", {value : arr[2]});

		list.innerHTML += getHTML(item);
	});

	var incr = document.getElementsByClassName('increment');
	var decr = document.getElementsByClassName('decrement');
	var cards = document.getElementsByClassName('add');
	var prices = document.getElementsByClassName('price');
	var amounts = document.getElementsByClassName('amount');
	var len = incr.length;

	for(var i = 0; i < len; i++){

		(function(x){
			incr[x].addEventListener('click', function(){
				this.nextElementSibling.innerText++; 
			});

			decr[x].addEventListener('click', function(){
				var am = this.previousElementSibling;
				if(+am.innerText){
					am.innerText--;
				}
			});

			cards[x].addEventListener('click', function(){
				var thisPrice = +prices[x].innerText;
				var thisAmount = +amounts[x].innerText;
				var oldNumber = +totalAmount.innerText;
				var oldSum = +totalSum.innerText;
				totalAmount.innerText = oldNumber + thisAmount;
				totalSum.innerText = ((thisAmount * thisPrice) + oldSum).toFixed(2);
			});
		})(i);
	}

}
xhr.send(null);
