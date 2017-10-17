// var button = document.getElementById('simple-button');
// var first = document.getElementById('first_number');
// var second = document.getElementById('second_number');

// button.addEventListener('click', function(){
// 	alert(+first.value + +second.value);
// });



// var button = document.getElementById('simple-button');
// var div = document.getElementById('simple-div');
// var output = "<input type='text' id='simple-input'><button id='submit' type='button'>Submit</button>";

// button.addEventListener('click', function(){
// 	div.innerHTML = output;
// 	var input = document.getElementById('simple-input');
// 	var submit = document.getElementById('submit');
// 	submit.addEventListener('click', function(){
// 		alert(input.value);
// 	});
// });



var table = document.getElementById('simple-table');
var n = prompt("Enter number");
var output = '', curr;

for(var i = 0; i < n; i++){
	output += "<tr><td>" + (i + 1) + 
	"</td><td><button type='button' id='" + i + "'>" 
	+ "Remove</button></tr>";
}

table.innerHTML = output;

for(var i = 0; i < n; i++){
	curr = document.getElementById(i);
	curr.addEventListener('click', function(){
		this.parentNode.parentNode.remove();
	});
}