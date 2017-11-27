var cvs = document.getElementById("draw");
var ctx = cvs.getContext("2d");
ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
ctx.strokeStyle = 'rgba(0, 0, 200, 0.5)';

ctx.beginPath();
ctx.arc(200, 200, 5, 0, Math.PI * 2);
ctx.moveTo(300, 200);
ctx.arc(200, 200, 100, 0, Math.PI * 2);
ctx.lineTo(280, 200);
ctx.moveTo(200, 100);
ctx.lineTo(200, 120);
ctx.moveTo(100, 200);
ctx.lineTo(120, 200);
ctx.moveTo(200, 300);
ctx.lineTo(200, 280);
ctx.stroke();

ctx.font = "16px Arial";
ctx.textAlign = "center";

// Sunny clock
ctx.translate(200, 200);
ctx.fillText("12", 0, -64);
ctx.rotate(Math.PI / 2);
ctx.fillText("3", 0, -64);
ctx.rotate(Math.PI / 2);
ctx.fillText("6", 0, -64);
ctx.rotate(Math.PI / 2);
ctx.fillText("9", 0, -64);


// Ordinary clock
// ctx.fillText("6", 200, 270);
// ctx.fillText("12", 200, 140);
// ctx.fillText("3", 270, 205);
// ctx.fillText("9", 130, 205);
