var canvas = document.getElementById('draw-area');
var ctx = canvas.getContext("2d");
var x = 0, y = 0;
ctx.fillStyle = "#000";

canvas.addEventListener('mousemove', function(e){
	if(flag){
		x = e.offsetX;
		y = e.offsetY;
		ctx.fillRect(x, y, 2, 2);
	}
});

var flag = false;
canvas.addEventListener('mousedown', function(e){
	flag = true;
});
canvas.addEventListener('mouseup', function(){
	flag = false;
});