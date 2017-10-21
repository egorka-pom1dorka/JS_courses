var input = document.getElementById('for_email');
var available = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 
	'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', 
	'_', '@', '.'];

input.addEventListener('keydown', function(event){
	var flag = false;
	var len = available.length;
	for(var i = 0; i < len; i++){
		if(event.key.toLowerCase() == available[i] || event.key == "Backspace" || event.key == "Tab"){
			flag = true;
			break;
		}
	}
		
	if(!flag){
		event.preventDefault();
	}
});