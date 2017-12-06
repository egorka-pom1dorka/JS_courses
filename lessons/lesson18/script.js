// var textarea = document.getElementById('text');
// var input = document.getElementById('file');
// var btn = document.getElementById('upload');
// var img = document.getElementById('image');

// btn.addEventListener('click', function(){
// 	var reader = new FileReader();
// 	reader.onload = function(){
// 		// textarea.value = this.result;
// 		img.src = this.result;
// 	}
// 	// reader.readAsText(input.files[0]);
// 	reader.readAsDataURL(input.files[0]);
// });

var div = document.getElementById('container');

div.addEventListener('dragenter', function(){
	this.innerText = "Отпустите элемент";
});

div.addEventListener('dragleave', function(){
	this.innerText = '';
});

div.addEventListener('dragover', function(e){
	e.preventDefault();
});

div.addEventListener('drop', function(e){
	e.preventDefault();
	var data = e.dataTransfer;
	// this.innerText =  data.getData('text');
	var reader = new FileReader();
	reader.onload = function(){
		div.innerText = this.result;
	}
	reader.readAsText(data.files[0]);
});