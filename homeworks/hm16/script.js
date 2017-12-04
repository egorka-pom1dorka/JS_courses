var play = document.querySelector('.fa-play');
var pause = document.querySelector('.fa-pause');
var range = document.querySelector('input[type=range]');
var faster = document.querySelector('.fa-angle-double-right');
var slower = document.querySelector('.fa-angle-double-left');
var repeat = document.querySelector('.fa-repeat');

var flag = false;

var xhr = new XMLHttpRequest();
xhr.open("GET", 'songs.json', true);
xhr.onload = function(){
	var items = JSON.parse(this.responseText);
	var div = document.getElementById('container');
	items.forEach(function(e){
		div.innerHTML += "<div class='song'>" + 
			"<img src='" + e.cover + "'>" + 
			"<p>" + e.title + "</p>" +
			"<input type='button' value='играть'>" + 
			"<audio src='" + e.path + "'></audio>"
		"</div>"
	});

	var inputs = document.querySelectorAll('input[type=button]');
	var len = inputs.length;

	for(var i = 0; i < len; i++){
		(function(x){

			inputs[x].addEventListener('click', function(){
				clearInterval(id);
				audio = this.nextElementSibling;
				document.querySelector('.played').style.width = "0%";
		
				document.querySelector('.buttons > span').innerText = items[x].title;
				document.querySelector('.buttons > img').setAttribute('src', items[x].cover);

				var secs = audio.duration;
				var leftSecs = Math.floor(secs % 60);
				if(leftSecs < 10){
					leftSecs = "0" + leftSecs;
				}
				document.getElementById('duration').innerText = Math.floor(secs / 60) + ":" + leftSecs;

				var playedTime = document.getElementById('played-time');
				var id = setInterval(function(){
					var currSecs = audio.currentTime;
					var leftCurrSecs = Math.floor(currSecs % 60);
					if(leftCurrSecs < 10){
						leftCurrSecs = "0" + leftCurrSecs;
					}
					document.getElementById('played-time').innerText = Math.floor(currSecs / 60) + ":" + leftCurrSecs;
					var width = currSecs / secs * 100;
					document.querySelector('.played').style.width = width + "%";
				}, 1);

				audio.addEventListener('ended', function(){
					play.classList.toggle('hide');
					pause.classList.toggle('hide');
				});
			});

		})(i);
	}

	play.addEventListener('click', function(){
		audio.play();
		play.classList.toggle('hide');
		pause.classList.toggle('hide');
	});

	pause.addEventListener('click', function(){
		audio.pause();
		play.classList.toggle('hide');
		pause.classList.toggle('hide');
	});

	document.querySelector('.play-duration').addEventListener('click', function(e){
		var all = getComputedStyle(this).width.match(/[0-9]+/)[0];
		var width = e.offsetX / all;
		audio.currentTime = audio.duration * width;
	});

	repeat.addEventListener('click', function(){
		flag = flag ? false : true;
		audio.loop = flag;
		this.classList.toggle('active');
	});

	range.addEventListener('input', function(){
		audio.volume = this.value / 100;
	});

	faster.addEventListener('click', function(){
		audio.playbackRate *= 1.25;
	});

	slower.addEventListener('click', function(){
		audio.playbackRate *= 0.8;
	});

}
xhr.send(null);
