var goodContainer = document.getElementById('goods-container');
var foodGoodCreate = document.getElementById('food-send');
var goodCreate = document.getElementById('any-send');
var shopCreate = document.getElementById('shop-create');
var shopContainer = document.getElementById('shop-container');
var goods = [], shops = [];

foodGoodCreate.addEventListener('click', function(){
	var title = document.getElementById('food-title').value;
	var type = document.getElementById('food-type').value;
	var price = document.getElementById('food-price').value;
	var before = document.getElementById('food-before').value;
	var newg = new FoodGood(title, type, price, new Date(), before);
	goods.push(newg);
	goodContainer.innerHTML += newg.toString();
});

goodCreate.addEventListener('click', function(){
	var title = document.getElementById('title').value;
	var type = document.getElementById('type').value;
	var price = document.getElementById('price').value;
	var newg = new Good(title, type, price, new Date())
	goods.push(newg);
	goodContainer.innerHTML += newg.toString();
});

shopCreate.addEventListener('click', function(){
	var title = document.getElementById('shop-title').value;
	var address = document.getElementById('shop-address').value;
	var coef = document.getElementById('shop-coef').value;
	var newShop = new Shop(title, address, coef);
	shops.push(newShop);
	shopContainer.innerHTML += newShop.toString();
});


// var g1 = new Good('g1', 't1', 1000, new Date());
// var g2 = new FoodGood('g2', 't2', 500, new Date(), '2017-11-22 00:00:00', 22);
// g2.lifetime = 11
// console.log(g2.lifetime)
// var g3 = new FoodGood('g3', 't2', 1500, '2017-11-22', '2017-12-22', 2);

// console.log(g1);
// console.log(g2);
// console.log(g3);

// var shop = new Shop("Sosedi", 'Galileo', 1.5);
// shop.addGoods(g1, 1);
// shop.addGoods(g2, 2);
// shop.removeGoods(g2, 1);
// shop.sellGoods(g2, 1);

// shop.print();
// var m = new Market([shop]);
// m.print();