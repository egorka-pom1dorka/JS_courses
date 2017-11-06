// var obj = {}; 
// Object.defineProperty(obj, "prop", {
// 	get : function(){
// 		return Math.random();
// 	},
// 	set : function(val){
// 		alert(val);
// 	}
// });

// console.log(obj.prop);

// obj.prop = 33;

function Human(n, a){
	this.age = a;
	this.name = n;
}

Human.prototype.sayHi = function(){
	console.log(this.name);
};

var alex = new Human("Alex", 33);
alex.sayHi();
console.log(alex);