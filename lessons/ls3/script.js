var arr = [];

// Вариант 1
for(var i = 0; i < 200; i++){
	(function(x){
		arr.push(function(){
			console.log(x);
		});
	})(i);
}

// Вариант 2
for(var i = 0; i < 200; i++){
	var f = function(x){
		arr.push(function(){
			console.log(x);
		});
	};
	f(i);
}

arr[99]();