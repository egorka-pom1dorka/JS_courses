var errorLog = true;
var a, b, answer;

while(errorLog){
	a = prompt("Input first number");

	if(!isNaN(Number(a)) && a.length != 0){
		errorLog = false;
	}

	if(errorLog){
		alert("Incorrect input, try again")
	}
}

errorLog = true;

while(errorLog){
	b = prompt("Input second number");
	
	if(!isNaN(Number(b)) && a.length != 0){
		errorLog = false;
	}

	if(errorLog){
		alert("Incorrect input, try again")
	}
}

var sign = prompt("Input sign(+, -, *, /)");

switch(sign){
	case '+':
		answer = a * 1 + b * 1;
		alert(a + " + " + b + " = " + answer);
		break;
	case '-':
		answer = a - b;
		alert(a + " - " + b + " = " + answer);
		break;
	case '*':
		answer = a * b;
		alert(a + ' * ' + b + ' = ' + answer);
		break;
	case '/':
		answer = a / b;
		alert(a + ' / ' + b + ' = ' + answer);
		break;
	default:
		alert("Incorrect sign, you are idiot!");
		break;
}