var str = prompt("Input expression");
var len = str.length;
var counting = 0;
var errorFlag = false;

for(var i = 0; i < len; i++){
	if(counting < 0){
		alert("Error");
		errorFlag = true;
		break;
	}

	if(str[i] == "("){
		counting++;
	}
	if(str[i] == ")"){
		counting--;
	}
}

if(!errorFlag){
	if(counting){
		alert("Error");
	}else{
		alert("All right");
	}
}
