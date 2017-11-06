var list = document.getElementById('list');
var len = list.children.length;

for(var i = 0; i < len; i++){
	list.children[i].addEventListener('click', function(e){
		var childsLen = e.target.children.length;
		console.log(e.target)
		for(var j = 0; j < childsLen; j++){
			e.target.children[j].classList.toggle('visible');
		}
	});
}