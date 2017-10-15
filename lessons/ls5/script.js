var div = document.getElementById("Great_Name"), now;
var input = document.getElementById("1");
console.log(input);

setInterval(function(){
	now = new Date;
	div.innerText = "" + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}, 1000);

