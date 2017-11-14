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
xhr.open("GET", 'items.json', true);
xhr.onload = function(){
	var data = JSON.parse(this.responseText);
	var len = data.length;
	for(var i = 0; i < len; i++){
		list.innerHTML += getHTML(data[i]);
	}

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
