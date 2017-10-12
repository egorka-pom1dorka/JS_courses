var str = prompt("Enter phone number");
var pattern = /\+?\s?(375)[\s\-]*[\(\)]?([\d]{2})[\(\)]?[\s\-]*([\d]{2,3})[\s\-]*([\d]{2})[\s\-]*([\d]{2,3})/;
var results = str.match(pattern);
var output = '+' + results[1] + results[2] + results[3] + results[4] + results[5];
console.log(output);