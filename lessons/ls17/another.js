onmessage = function(e){
	var n = e.data;

	var arr = [];

	for (var i = 0; i < n; i++) {
		var rand = Math.floor(Math.random() * 9999 + 1);
		arr.push(rand);
	}

	arr.sort(function(a, b){
		return (a > b) ? 1 : -1;
	});

	var result = 0;

	arr.forEach(function(e){
		result += Math.sin(1 / Math.sqrt(e));
	});

	postMessage(result);
}