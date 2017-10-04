//First task
console.warn("First task");
function getRandomArrayFor(n, s, p){
	var arr = [], sign, randomValue;
	for(var i = 0; i < n; i++){
		randomValue = 10;

		while(randomValue > p / 100){
			randomValue = +(Math.random()).toFixed(2);
		}

		sign = Math.random();

		if(sign > 0.5){
			arr.push(s + randomValue * s);
		}else{
			arr.push(s - randomValue * s);
		}
		
	}

	console.log("array before sorting: ");
	console.log(arr);

	return arr;
}

function compare(a, b){
	if(a < b){
		return -1;
	}else{
		return 1;
	}
}

var str = prompt("Enter numbers in such way: n, s, p");
var numbers = (str.trim()).split(", ");
var arr = getRandomArrayFor(+numbers[0], +numbers[1], +numbers[2]);

var temp, len = arr.length, sum = 0;

for(var j = 0; j < len - 1; j++){
	for(var i = 0; i < len - j - 1; i++){
		if(compare(arr[i], arr[i + 1]) > 0){
			temp = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = temp;
		}
	}
}

console.log("array after sorting: ");
console.log(arr);

for(var i = 0; i < len; i++){
	sum += arr[i];
}

var avg = sum / len;
console.log("average value is " + avg);



//Second task
console.warn("Second task");
function solvePolynomial(arr, x){
	var answer = 0, len = arr.length;

	for(var i = 0; i < len; i++){
		answer += arr[i] * Math.pow(x, i);
	}

	return answer;
}

arr = [13, -22, 4, 0, -2, 11];
var x = prompt("Enter x");

var answer = solvePolynomial(arr, +x);
console.log("Polynomial is equil " + answer);



//Third task
console.warn("Third task");
function getMinutesAmount(){
	var now = new Date();
	var nextDay = now.getDate() + 1;

	if(nextDay < 10){
		nextDay = "0" + nextDay;
	}

	var year = now.getFullYear();
	var month = now.getMonth() + 1;

	if(month < 10){
		month = "0" + month;
	}

	var endThisDay = new Date(year + "-" + month + "-" + nextDay + " 00:00:00");
	var minutesAmount = (endThisDay - now) / 1000 / 60;
	return Math.ceil(minutesAmount);
}

console.log("Minutes amount until end of this day is " + getMinutesAmount());