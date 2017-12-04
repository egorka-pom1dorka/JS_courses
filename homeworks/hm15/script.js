var canvas = document.getElementById('draw-area');
var ctx = canvas.getContext("2d");
var x1 = 0, y1 = 0, x2 = 0, y2 = 0;
ctx.fillStyle = "#000";

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
canvas.addEventListener('mouseup', function(){
	flag = false;
});