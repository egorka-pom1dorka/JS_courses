var select = document.getElementById('select');
var textarea = document.getElementById('textarea');
var checkbox = document.getElementById('box');

select.addEventListener('change', function(){
	localStorage.setItem('select', this.value);
});

textarea.addEventListener('input', function(){
	localStorage.setItem('text', this.value);
});

checkbox.addEventListener('change', function(){
	var checked = this.checked ? 1 : 0;
	localStorage.setItem('box', checked);
});

document.getElementById('btn').addEventListener('click', function(){
	select.value = 'usa';
	if(checkbox.hasAttribute('checked')){
		checkbox.removeAttribute('checked');
	}
	textarea.innerText = '';
	localStorage.clear();
});

var sel = localStorage.select;
var text = localStorage.text;
var box = +localStorage.box;

if(sel){
	select.value = sel;
}

if(text){
	textarea.innerText = text;
}

if(box == 1){
	checkbox.setAttribute('checked', 'true');
}else{
	checkbox.removeAttribute('checked');
}