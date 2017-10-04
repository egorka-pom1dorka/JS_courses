var arr = [], sum = 0;

for(var i = 0; i < 100; i++){
    arr.push(50 + parseInt(Math.random() * 100));
    sum += arr[i];
}

var avg = sum / 100, newSum = 0;

for(var i = 0; i < 100; i++){
	newSum += Math.pow((arr[i] - avg), 2)
}

var x = newSum / 100;

console.log(x);
console.log(arr);