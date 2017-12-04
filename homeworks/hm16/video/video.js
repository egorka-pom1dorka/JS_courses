var audio = document.getElementById('video');

var play = document.querySelector('.fa-play');
var pause = document.querySelector('.fa-pause');
var range = document.querySelector('input[type=range]');
var faster = document.querySelector('.fa-angle-double-right');
var slower = document.querySelector('.fa-angle-double-left');
var repeat = document.querySelector('.fa-repeat');

var flag = false;

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

audio.addEventListener('loadedmetadata', function(){
	var pattern = /([0-9a-zA-Zа-яА-Я_]+).mp4/;
	var res = audio.src.match(pattern);
	document.querySelector('.buttons > span').innerText = res[1];
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

audio.addEventListener('ended', function(){
	play.classList.toggle('hide');
	pause.classList.toggle('hide');
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