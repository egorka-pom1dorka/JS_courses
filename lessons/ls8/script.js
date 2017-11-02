// var textarea = document.getElementById('text');
// var select = document.getElementById('color');

// select.addEventListener('change', function(){
// 	textarea.style.color = this.value;
// });


var list = document.getElementById('list');
var n = +(prompt("Enter integer"));
var output = '';

for(var i = 0; i < n; i++){
	output += '<li>Some <b>trash</b></li>';
}

list.innerHTML = output;

list.addEventListener('click', function(e){
	var elem = e.target;
	if(elem.parentNode == this){
		elem.classList.toggle('emphasized');
	}
	if(elem.parentNode != this){
		while(elem.parentNode != this){
			elem = elem.parentNode;
		}
		elem.classList.toggle('emphasized');
	}
});
