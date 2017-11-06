var block = document.getElementById('block');

setInterval(function(){
	if(block.getBoundingClientRect().top < 40){
		block.classList.add('fixed');
	}

	if(window.scrollY > 12000){
		block.classList.remove('fixed');
	}

	if(window.scrollY <= 2000){
		block.classList.remove('fixed');
	}
}, 1);
