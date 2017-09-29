function getFactorial(n){
	if(n == 0 || n == 1){
		return n;
	}

	var result = 1;

	for(var i = 2; i <= n; i++){
		result *= i;
	}

	return result;
}

function getDoubleFactorial(n){
	if(n == 0 || n == 1){
		return n;
	}

	var result = 1, i;

	if(n % 2 == 0){
		i = 2;
	}else{
		i = 3;
	}

	for(; i <= n; i += 2){
		result *= i;
	}

	return result;
}

var n = prompt("Input N");
var x = prompt("Input X (|X| < 1)");
var answer = x * 1;

for(var i = 1; i < n; i++){
	answer += getDoubleFactorial(2 * n - 1) / getFactorial(2 * i) * Math.pow(x, 2 * n -1) / (2 * n - 1);
}

alert("Arcsin " + x + ' is ' + answer);