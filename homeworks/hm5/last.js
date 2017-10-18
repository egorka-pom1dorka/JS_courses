var number = prompt("Enter number");
var n = Math.ceil(Math.sqrt(number));
var table = document.getElementById("table");
var output = '', value, elem;

for(var i = 0; i < n; i++){
	output += "<tr>";
	for(var j = 0; j < n; j++){
		value = n * i + j + 1;
		output += "<td id='" + value + "'>" + value + '</td>';
	}
	output += "</tr>";
}

table.innerHTML = output;

var count = 2, i = 3;

setInterval(function(){
	if(i <= n * n){
		if(!(i % count) && i != count){
			elem = document.getElementById(i);
			elem.setAttribute("class", "emphasized");
		}
		i++;
	}
	if(i > n * n){
		i = 3;
		count++;
	}
}, 50);
