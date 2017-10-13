var id = setInterval(function(){
	window.scrollBy(0, 1);
	if((document.body.scrollHeight - window.screen.availHeight + 70) < window.pageYOffset){
		clearInterval(id);
	}
}, 1);

