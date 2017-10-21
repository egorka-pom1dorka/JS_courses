var operators = [], sign, first, second, memory = '', result, flag = false, answer; 
var input = document.getElementById('input');
var result = document.getElementById('result');

for(var i = 0; i < 10; i++){
	var curr = document.getElementById(i);
	curr.addEventListener('click', function(){
		result.innerText = '';
		if(sign && flag){
			input.innerText = '';
			flag = false;
		}
		input.innerText = input.outerText + this.innerText;
	});
}

document.getElementById('.').addEventListener('click', function(){
	result.innerText = '';
	if(input.outerText.split('.').length == 1 && input.outerText){
		input.innerText = input.outerText + this.innerText;
	}
})

document.getElementById('clear').addEventListener('click', function(){
	input.innerText = '';
	result.innerText = '';
	first = false;
	second = false;
});

document.getElementById('Mr+').addEventListener('click', function(){
	result.innerText = '';
	if(input.outerText.length){
		memory = +memory + +input.outerText;
		input.innerText = memory;
	}
});

document.getElementById('Mr-').addEventListener('click', function(){
	result.innerText = '';
	memory -= input.outerText;
	input.innerText = memory;
});

document.getElementById('Mr').addEventListener('click', function(){
	result.innerText = '';
	input.innerText = memory;
});

document.getElementById('Mc').addEventListener('click', function(){
	result.innerText = '';
	memory = '';
});

document.querySelectorAll('.operations > *').forEach(function(e){
	operators.push(e = e.children[0]);
});

operators.forEach(function(e){
	e.addEventListener('click', function(){
		if(e.outerText != '='){
			if(input.outerText.length){
				if(result.outerText.length){
					first = answer;
					input.innerText = answer;
				}else{
					first = input.outerText;
				}
				sign = e.outerText;
				flag = true;
			}
		}else{
			result.innerText = '';
			if(first){
				if(input.outerText.length){
					second = input.outerText;
					switch(sign){
						case '+':
							answer = +first + +second;
							result.innerText = first + sign + second + '=' + answer;
							flag = true;
							break; 
						case '-':
							answer = first - second;
							result.innerText = first + sign + second + '=' + answer;
							flag = true;
							break;
						case '*':
							answer = first * second;
							result.innerText = first + sign + second + '=' + answer;
							flag = true;
							break;
						case '/':
							answer = first / second;
							result.innerText = first + sign + second + '=' + answer;
							flag = true;
							break;
					}
				}
			}else{
				first = input.outerText;
			}
		}
		// console.log(first);
		// console.log(sign);
		// console.log(second);
	});
});
