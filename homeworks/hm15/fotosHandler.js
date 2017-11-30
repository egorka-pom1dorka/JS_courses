var img = document.getElementById('image');
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.drawImage(img, 0, 0);

document.getElementById('BW').addEventListener('click', function(){
	ctx.drawImage(img, 0, 0);
	var data = ctx.getImageData(0, 0, 200, 200);
	var len = 200 * 200;

	for(var i = 0; i < len; i++){
		var newColor = (data.data[4 * i] + data.data[4 * i + 1] + 4 * data.data[4 * i + 2]) / 3;
		data.data[4 * i] = newColor;
		data.data[4 * i + 1] = newColor;
		data.data[4 * i + 2] = newColor;
	}

	ctx.putImageData(data, 0, 0);
});

document.getElementById('neg').addEventListener('click', function(){
	ctx.drawImage(img, 0, 0);
	var data = ctx.getImageData(0, 0, 200, 200);
	var len = 200 * 200;

	for(var i = 0; i < len; i++){
		data.data[4 * i] = 255 - data.data[4 * i];
		data.data[4 * i + 1] = 255 - data.data[4 * i + 1];
		data.data[4 * i + 2] = 255 - data.data[4 * i + 2];
	}

	ctx.putImageData(data, 0, 0);
});

document.getElementById('sepia').addEventListener('click', function(){
	ctx.drawImage(img, 0, 0);
	var data = ctx.getImageData(0, 0, 200, 200);
	var len = 200 * 200;

	for(var i = 0; i < len; i++){
		var red = data.data[4 * i];
		var green = data.data[4 * i + 1];
		var blue = data.data[4 * i + 2];
		data.data[4 * i] = (red * 0.393) + (green * 0.769) + (blue * 0.189);
		data.data[4 * i + 1] = (red * 0.349) + (green * 0.686) + (blue * 0.168);
		data.data[4 * i + 2] = (red * 0.272) + (green * 0.534) + (blue * 0.131);
	}

	ctx.putImageData(data, 0, 0);
});