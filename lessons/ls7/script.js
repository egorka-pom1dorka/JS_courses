// var div = document.getElementById('simple-div');
// var note = document.getElementById('note');
// div.addEventListener('mousemove', function(event){
// 	note.innerText = "X: " + event.offsetX + ", " + "Y: " + event.offsetY;
// });


// var a = document.getElementById('link');
// a.addEventListener('click', function(event){
// 	event.preventDefault(); 
// });


var screen = document.getElementById('window');
var inner = document.getElementById('inner');
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
	screen.setAttribute('class', 'opened');
});

// screen.addEventListener('click', function(){
// 	this.removeAttribute('class');
// });

// inner.addEventListener('click', function(e){
// 	e.stopPropagation();
// });

screen.addEventListener('click', function(e){
	if(e.target == this){
		this.removeAttribute('class');
	}
});
