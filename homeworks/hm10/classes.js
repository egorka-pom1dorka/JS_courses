var id = 1;

function Good(title, type, price, created){
	this.id = id;
	this.title = title;
	this.type = type;
	this.price = price;
	this.created = created.getTime();
	id++;
}

Good.prototype = {
	constructor : Good,
	toString : function(){
		out = "<p id='" + this.id + "'>Good: ";
		for(f in this){
			if(this.hasOwnProperty(f)){
				out += f + ' - ' + this[f] + "; ";
			}
		}
		out += "</p>";
		return out;
	}	
}

function FoodGood(title, type, price, created, bestBefore){
	Good.apply(this,[title, type, price, created]);
	this.bestBefore = new Date(bestBefore).getTime();
	this.lifetime = Math.floor((this.bestBefore - this.created) / 1000 / 3600 / 24);
	// this.__defineSetter__('lifetime', function(val){});
	// this.__defineGetter__('lifetime', function(){ return lifetime; });
	// Why it doesn't work?
}

FoodGood.prototype = Object.create(Good.prototype);

function Shop(title, address, coef){
	this.title = title;
	this.address = address;
	this.coef = coef;
	this.profit = 0;
	this.goods = [];
	this.allGoodsPrice = 0;
}

Shop.prototype = {
	constructor : Shop,
	countAllGoodsPrice : function(){
		this.allGoodsPrice = 0;
		var len = this.goods.length;
		for(var i = 0; i < len; i++){
			this.allGoodsPrice += this.goods[i].price;
		}
	},
	addGoods : function(g, n){
		for(var i = 0; i < n; i++){
			this.goods.push(g);
		}
		this.countAllGoodsPrice();
	},
	removeGoods : function(good, n){
		for(var i = 0; i < n; i++){
			var len = this.goods.length;
			for(var j = 0; j < len; j++){
				if(this.goods[j] == good){
					this.goods.splice(j, 1);
					break;
				}
			}
		}
		this.countAllGoodsPrice();
	},
	sellGoods : function(good, n){
		this.profit = good.price * this.coef * n;
		this.removeGoods(good, n);
		this.countAllGoodsPrice();
	},
	toString : function(){
		var out = '';
		for(field in this){
			if(this.hasOwnProperty(field)){
				if(field != 'goods'){
					out += '<p>' + field + ' - ' + this[field] + "</p>";
				}else{
					this.goods.forEach(function(e){
						out += e.toString();
					});
				}
			}
		}
		return out;
	}
}

function Market(){
	this.shops = [];
}

Market.prototype = {
	constructor : Market,
	toString : function(){
		out = '';
		this.shops.forEach(function(e){
			out += '<p>' + e.toString() + '</p>';
		});
		return out;
	},
	addShop : function(s){
		this.shops.push(s);
	}
}
