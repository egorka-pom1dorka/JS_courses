var div = document.getElementById('container');
var card = [];

var template = function(item){
	var out = "";
	out += "<div class='item'>"
			+ "<h3 class='title'>" + item.title + "</h3>"
			+ "<div class='image'>"
				+ "<img src='" + item.image + "'>" +
			"</div>" +
		"<form class='sizes'>";

	var rand = Math.random();

	item.sizes.forEach(function(e){
		out += "<label class='size-info'>" +
			"<input type='radio' name='" + rand + "'>" +
			"<span class='size'>" + e.size + "см</span><span class='price'>" + e.price + "</span>" +
		"</label>";
	});

	out +=	"<p>Стоимость: " + "<span class='price-out'>0</span>" + "</p>" +
		"<input type='button' value='Добавить' class='submit'>" +
		"</form>" +
		"<div class='description'>" +
			item.description +
		"</div>" + 
		"<div class='add-items hidden'>" +
		"<h3 class='just-title'>Выберите добавку</h3>";

	item.additions.forEach(function(e){
		out += "<div class='add-item'>" + 
			"<span class='add-title'>" + e.title + " </span>" + 
			"<span class='add-price'>" + e.price + " </span>" + 
			"</div>";
	});

	out += "<input type='button' class='submit' value='Отказаться'></div></div>";

	return out;
}

var handleItems = function(items, dataItems){
	handleCard.initShowing();
	var len = items.length;

	for(var i = 0; i < len; i++){
		(function(x){
			var currItem = items[x];

			// Getting radio - buttons and DOM - element of price output
			var radioBtns = currItem.querySelectorAll("input[type='radio']");
			var currPriceOut = currItem.querySelector(".price-out");
			var btnsLen = radioBtns.length;

			for(var j = 0; j < btnsLen; j++){
				// Handle radio - buttons and adding there price in DOM - element getted above
				radioBtns[j].addEventListener('click', function(){
					var currPrice = +(this.nextElementSibling.nextElementSibling.innerText);
					currPriceOut.innerText = currPrice;
				});
			}

			// Handle adding in card
			var addBtn = currItem.querySelector("input[type='button']");

			// Getting and showing additional menu
			var addItemsContainer = addBtn.parentElement.nextElementSibling.nextElementSibling;
			var addItems = addItemsContainer.children;
			var addItemsLen = addItems.length;

			var dataItemSizes = dataItems[x].sizes;
			var sizesLen = dataItemSizes.length;

			addBtn.addEventListener('click', function(){
				// Getting price for this item, because we need add in card only items with selected
				var price = +(currPriceOut.innerText);
				if(price){
					addItemsContainer.classList.remove('hidden');
				}
			});

			var endCardMoving = function(e){
				//e.stopImmediatePropagation();
				// Item must be created in this closure
				// Creating item for adding in card
				var item = {};
				item.title = dataItems[x].title;
				item.image = dataItems[x].image;
				item.description = dataItems[x].description;
				var addingPrice, addingType;
				var price = +(currPriceOut.innerText);

				if(this.classList.contains('submit')){
					item.addingPrice = 0;
					item.addingType = 'нет';
				}else{
					item.addingPrice = this.lastElementChild.innerText;
					item.addingType = this.firstElementChild.innerText;
				}

				addItemsContainer.classList.add('hidden');

				for(var k = 0; k < sizesLen; k++){
					if(price == dataItemSizes[k].price){
						item.size = dataItemSizes[k].size;
						item.price = dataItemSizes[k].price;
					}
				}

				card.push(item);
				// console.log(item);
				handleCard.recountSumAndAmount();
				// this.removeEventListener('click', endCardMoving);
			}

			// Handling additional menu
			for(var j = 1; j < addItemsLen; j++){
				if(!addItems[j].classList.contains('just-title')){
					addItems[j].addEventListener('click', endCardMoving);
				}
			}

		})(i);
	}
}

var handleCard = {
	templateCardResult : function(item){
		var out = "";
		out += "<div class='item'>"
				+ "<h3 class='title'>" + item.title + "</h3>"
				+ "<div class='image'>"
				+ "<img src='" + item.image + "'>" +
			"</div>" +
			"<form class='sizes'>" +
				"<label class='size-info'>" +
					"<p class='size'>" + item.size + "см</p><p>" + item.price + "p</p>" +
				"</label>" +
			"</form>" +
				"<div class='description'>" +
					item.description +
				"</div>" +
				"<div class='addings'>" +
					"<p>Добавки: " + 
					"<span>" + item.addingType + "</span>" + 
					"<span> , стоимость " + item.addingPrice + ".</span>" + 
				"<div>"
			"</div>";

		return out;
	},

	recountSumAndAmount : function(){
		var totalAmount = document.getElementById('total-amount');
		var totalPrice = document.getElementById('total-price');

		var amount = +(totalAmount.innerText) + 1;

		if(amount){
			for(var i = 0; i < amount; i++){
				var sum = +(totalPrice.innerText);

				(function(x){
					sum += +card[x].price + +card[x].addingPrice;
				})(i);

			}
		}

		totalAmount.innerText = amount;
		totalPrice.innerText = sum.toFixed(2);
	},

	initShowing : function(){
		var showBtn = document.getElementById('show-card');
		var section = document.querySelector('.dark-overlay');
		var cardContainer = document.getElementById('card-items');
		var body = document.getElementsByTagName('body')[0];

		showBtn.addEventListener('click', function(){
			body.style.overflow = "hidden";
			cardContainer.innerHTML = "<h2>Ваша корзина</h2>";

			card.forEach(function(e){
				// console.log(e)
				cardContainer.innerHTML += handleCard.templateCardResult(e);
			});

			section.classList.remove('hidden');
		});

		section.addEventListener('click', function(){
			body.style.overflow = "auto";
			this.classList.add('hidden');
		});
	}
}

var eventListener = function(e){
	var last = div.lastElementChild;
	if(last.getBoundingClientRect().bottom < innerHeight){
		getItems();
	}
}

var dataItems = [];

var getItems = function(){
	document.removeEventListener('scroll', eventListener);
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "pizzas.json", true);
	xhr.onload = function(){
		var data = JSON.parse(this.responseText);
		data.forEach(function(e){
			dataItems.push(e);
		});

		data.forEach(function(e){
			div.innerHTML += template(e);
		});

		var items = div.children;
		console.log(items)
		console.log(dataItems)
		handleItems(items, dataItems);
		document.addEventListener('scroll', eventListener);
	}
	xhr.send(null);
}

document.addEventListener('scroll', eventListener);
getItems();
