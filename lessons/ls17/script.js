var startTime = Date.now();

var worker = new Worker('another.js');
worker.onmessage = function(e){
	console.log(e.data);
	var endTime = Date.now();
	var duration = endTime - startTime; 
	console.log(duration)
}
worker.postMessage(4000000);
