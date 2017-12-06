var canvas = document.getElementById('draw-area');
var ctx = canvas.getContext("2d");
var x1 = 0, y1 = 0, x2 = 0, y2 = 0;
ctx.fillStyle = "#000";

var cache = localStorage.getItem('coordinates');
if(cache){
	var arr = cache.split(", ");
	var d = ctx.getImageData(0, 0, 600, 400);
	var dLen = d.data.length;
	for(var i = 0; i < dLen; i++){
		d.data[i] = arr[i];
	}
	ctx.putImageData(d, 0, 0);
}

canvas.addEventListener('mousemove', function(e){
	if(flag){
		x2 = e.offsetX;
		y2 = e.offsetY;
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		ctx.lineTo(x2, y2);
		ctx.stroke();
		x1 = x2;
		y1 = y2;
	}
});

var flag = false;
canvas.addEventListener('mousedown', function(e){
	x1 = e.offsetX;
	y1 = e.offsetY;
	flag = true;
});

var coordinates = [];
canvas.addEventListener('mouseup', function(){
	flag = false;
	var data = ctx.getImageData(0, 0, 600, 400);
	var len = data.data.length;
	
	for(var i = 0; i < len; i++){
		coordinates[i] = data.data[i] + "";
	}

	var str = coordinates.join(", ");

	localStorage.setItem('coordinates', str);
});

document.querySelector('input[type=button]').addEventListener('click', function(){
	localStorage.clear();
});

canvas.addEventListener('dragenter', function(){
	this.previousElementSibling.innerText = 'Отпустите элемент';
});

canvas.addEventListener('dragleave', function(){
	this.previousElementSibling.innerText = '';
});

canvas.addEventListener('dragover', function(e){
	e.preventDefault();
});

canvas.addEventListener('drop', function(e){
	e.preventDefault();
	this.previousElementSibling.innerText = '';
	x = e.offsetX;
	y = e.offsetY;
	var data = e.dataTransfer;
	var reader = new FileReader();
	reader.onload = function(){
		var img = document.createElement('img');
		img.src = this.result;
		img.onload = function(){
			ctx.drawImage(this, x, y, this.width, this.height);
		}
	}
	reader.readAsDataURL(data.files[0]);
});

