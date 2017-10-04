var str = prompt("Enter string");
str = str.trim();
var len = str.length;
var fromStr = len, toStr = len, count = 0;

for(var i = 0; i < len; i++){
	if(str.charAt(i) == " "){
		if(!count){
			fromStr = i + 1;
			count++;
		}else{
			toStr = i;
			break;
		}
	}
}

var newStr = str.slice(fromStr, toStr);

alert(newStr);