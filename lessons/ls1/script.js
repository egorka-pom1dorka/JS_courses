//first
alert("First task");
var str = "Input number";
var a = prompt(str);
var b = prompt(str);
var c = prompt(str);

var max;

if(a > c && a > b){
	max = a;
}

if(b > a && b > c){
	max = b;
}

if(c > a && c > b){
	max = c;
}

alert("Max number is - " + max);


//second
alert("Second task");
var str = "Input number";
var x = prompt(str);
x = Number(x);

if(isNaN(x)){
	alert("Incorrent input");
}else{
	alert("All right");
}