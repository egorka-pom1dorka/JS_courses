var withPlayer = document.getElementById('player');
var withII = document.getElementById('II');
var overlay = document.getElementById('overlay');
var totalMsg = document.getElementById('total');

var flag = false, counter = 0;

withPlayer.addEventListener('click', function(){
	overlay.classList.remove('active');
	for(var i = 1; i < 4; i++){
		for(var j = 1; j < 4; j++){

			document.getElementById("" + i + j).addEventListener('click', function(){
				if(!this.classList.contains('circle') && !this.classList.contains('cross')){
					if(flag){
						this.classList.add('circle');
						flag = false;
					}else{
						this.classList.add('cross');
						flag = true;
					}
					counter++;
				}

				var crossesMainDiagonal = 0;
				var circlesMainDiagonal = 0;

				var crossesNextDiagonal = 0;
				var circlesNextDiagonal = 0;

				for(var k = 1; k < 4; k++){
					var crossesLine = 1;
					var circlesLine = 1;

					var crossesColumn = 1;
					var circlesColumn = 1;

					for(var h = 1; h < 4; h++){
						crossesLine *= document.getElementById("" + k + h).classList.contains('cross') ? 1 : 0;
						circlesLine *= document.getElementById("" + k + h).classList.contains('circle') ? 1 : 0;

						crossesColumn *= document.getElementById("" + h + k).classList.contains('cross') ? 1 : 0;
						circlesColumn *= document.getElementById("" + h + k).classList.contains('circle') ? 1 : 0;

						if(h + k == 4){
							crossesNextDiagonal += document.getElementById("" + h + k).classList.contains('cross') ? 1 : 0;
							circlesNextDiagonal += document.getElementById("" + h + k).classList.contains('circle') ? 1 : 0;
						}

						if(h == k){
							crossesMainDiagonal += document.getElementById("" + k + k).classList.contains('cross') ? 1 : 0;
							circlesMainDiagonal += document.getElementById("" + k + k).classList.contains('circle') ? 1 : 0;
						}
					}

					if(crossesLine || crossesColumn || crossesMainDiagonal == 3 || crossesNextDiagonal == 3){
						totalMsg.classList.add('active');
						totalMsg.innerHTML = "<p>Победил первый игрок</p>";
						break;
					}

					if(circlesLine || circlesColumn || circlesMainDiagonal == 3 || circlesNextDiagonal == 3){
						totalMsg.classList.add('active');
						totalMsg.innerHTML = "<p>Победил второй игрок</p>";
						break;
					}
				}

				if(counter == 9){
					totalMsg.classList.add('active');
					totalMsg.innerHTML = "<p>Ничья</p>";
				}
			});

		}
	}
});


var rand = -1;

withII.addEventListener('click', function(){
	overlay.classList.remove('active');
	for(var i = 1; i < 4; i++){
		for(var j = 1; j < 4; j++){

			document.getElementById("" + i + j).addEventListener('click', function(){
				if(!this.classList.contains('circle') && !this.classList.contains('cross')){
					console.log(flag);
					if(!flag){
						this.classList.add('cross');
						flag = true;
						if(counter < 8){
							while(true){
								if(rand != -1){
									var elem = document.getElementById(rand);
									if(!elem.classList.contains('circle') && !elem.classList.contains('cross')){
										break;
									}else{
										rand = "" + Math.floor(Math.random() * 3 + 1) + Math.floor(Math.random() * 3 + 1);
									}
								}else{
									rand = "" + Math.floor(Math.random() * 3 + 1) + Math.floor(Math.random() * 3 + 1);
								}
							}

							console.log(rand);
							document.getElementById(rand).classList.add('circle');
							flag = false;
							counter ++;
						}
					}
					counter ++;

					var crossesMainDiagonal = 0;
					var circlesMainDiagonal = 0;

					var crossesNextDiagonal = 0;
					var circlesNextDiagonal = 0;

					for(var k = 1; k < 4; k++){
						var crossesLine = 1;
						var circlesLine = 1;

						var crossesColumn = 1;
						var circlesColumn = 1;

						for(var h = 1; h < 4; h++){
							crossesLine *= document.getElementById("" + k + h).classList.contains('cross') ? 1 : 0;
							circlesLine *= document.getElementById("" + k + h).classList.contains('circle') ? 1 : 0;

							crossesColumn *= document.getElementById("" + h + k).classList.contains('cross') ? 1 : 0;
							circlesColumn *= document.getElementById("" + h + k).classList.contains('circle') ? 1 : 0;

							if(h + k == 4){
								crossesNextDiagonal += document.getElementById("" + h + k).classList.contains('cross') ? 1 : 0;
								circlesNextDiagonal += document.getElementById("" + h + k).classList.contains('circle') ? 1 : 0;
							}

							if(h == k){
								crossesMainDiagonal += document.getElementById("" + k + k).classList.contains('cross') ? 1 : 0;
								circlesMainDiagonal += document.getElementById("" + k + k).classList.contains('circle') ? 1 : 0;
							}
						}

						if(crossesLine || crossesColumn || crossesMainDiagonal == 3 || crossesNextDiagonal == 3){
							totalMsg.classList.add('active');
							totalMsg.innerHTML = "<p>Победил игрок</p>";
							break;
						}

						if(circlesLine || circlesColumn || circlesMainDiagonal == 3 || circlesNextDiagonal == 3){
							totalMsg.classList.add('active');
							totalMsg.innerHTML = "<p>Победил компухтер</p>";
							break;
						}
					}

					if(counter == 9){
						totalMsg.classList.add('active');
						totalMsg.innerHTML = "<p>Ничья</p>";
					}
				}
			});
		}
	}
});

