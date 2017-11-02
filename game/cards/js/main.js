var wrapper = document.getElementById('wrapper');
var blocked = document.getElementById('blocked');
var totals = document.getElementById('totals');
var time = document.getElementById('time');
var message = document.getElementById('message');
var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var images = ['ablameyko', 'derushev', 'galkin', 'ignatenko', 'kremen', 'listopad', 'lulkin', 'nagorniy', 'perez', 'romanchik', 'shibut', 'velchenko', 'ablameyko', 'derushev', 'galkin', 'ignatenko', 'kremen', 'listopad', 'lulkin', 'nagorniy', 'perez', 'romanchik', 'shibut', 'velchenko'];

var len = wrapper.children.length;
var counter = 24;
var opened = 0;
var first, second, total = 24;
var temp, guessed = [];
var flag = 0;

blocked.classList.add('active');

time.addEventListener('click', function(){
	var start = Date.now();
	blocked.classList.remove('active');
	var interval = setInterval(function(){
		var duration = Math.floor((Date.now() - start) / 1000);

		if(!total){
			alert(time.innerText);
			alert('Вы победили, ура! Но помните, что все равно мы все умрем...');
			clearInterval(interval);
		}else{
			if(flag == 1){
				if(duration > 10){
					duration -= 10;	
				}else{
					duration = 0;
				}
				
			}

			if(duration > 59){
				var min = Math.floor(duration / 60);
				var out = min + 'м ' + (duration - min * 60) + 'с'
			}else{
				var out = duration + 'c';
			}

			time.innerText = "Прошло: " + out;
		}
	}, 1);
});

for(var i = 0; i < len; i++){
	wrapper.children[i].addEventListener('click', function(e){

		if(temp != e.target){

			var value = this.getAttribute('name');

			this.classList.add('open');
			this.classList.add(images[value]);

			if(!flag){
				if(this.classList.contains('romanchik')){
					message.style.display = 'flex';
					flag++;
					setTimeout(function(){
						message.style.display = 'none';
					}, 5000);
				}
			}

			if(!opened){
				first = value;
				temp = this;
			}
			opened++;

			if(opened == 2){
				second = value;
				blocked.classList.add('active');

				setTimeout(function(){
					if(first == second){
						var elems = document.getElementsByName(first);
						guessed.push(elems[0]);
						guessed.push(elems[1]);

						if(total == 0){
							total = 0;
						}else{
							total -= 2;
						}
						
						totals.innerText = 'Осталось: ' + total;
					}else{
						for(var i = 0; i < len; i++){
							if(guessed.includes(wrapper.children[i])){
								console.log(guessed);
								continue;
							}else{
								wrapper.children[i].classList.remove('open');
								wrapper.children[i].classList.remove(images[first]);
								wrapper.children[i].classList.remove(images[second]);
							}
						}
					}

					blocked.classList.remove('active');
					opened = 0;
				}, 500);
			}

		}
	});

	var random = Math.floor(Math.random() * counter--);
	wrapper.children[i].setAttribute('name', ids[random]);
	ids.splice(random, 1);
}
