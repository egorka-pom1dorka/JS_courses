var str = prompt("Enter string");
var charsArr = str.split("");

var charsCodesArr = charsArr.map(function(elem){
	return elem.charCodeAt(0);
})

var filteringArr = charsCodesArr.filter(function(elem){
	return (elem % 5);
})

var sum = filteringArr.reduce(function(prev, curr){
	return prev + curr % 5;
}, 0)

console.log(sum);