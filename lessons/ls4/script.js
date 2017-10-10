var str = prompt("Enter time");
var pattern = /([0-2][0-9])\:([0-5][0-9])\:([0-5][0-9])/;
var results = str.match(pattern);
console.log(results);
alert("Seconds amount is " + (results[1] * 3600 + results[2] * 60 + results[3])); 