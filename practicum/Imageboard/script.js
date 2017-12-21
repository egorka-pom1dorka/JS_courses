function onYouTubeIframeAPIReady(){
	window.player = new YT.Player('iframe');
}

var App = {
	init : function(){
		this.initXHR();
	}

	,data : ''

	,initXHR : function(){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', 'posts.json', true);
		xhr.onload = function(){
			var posts = JSON.parse(this.responseText);
			App.data = posts;
			//f(posts)
			App.templateHTML(posts);
			App.youTube.init();
			App.audioPlayer.init();
			App.Gallery.init();
			App.Likes.init();
		}
		xhr.send(null);
	}

	,templateHTML : function(items){
		var html = '';
		items.forEach(function(e){
			html += "<div class='post' id='" + e.id + "'>";

			html += "<p>" + e.text + "<span>. Опубликовано: " + e.date + " </span><span> . Автор: " + e.author 
			+ " </span></p>" + "<div class='youtubeVideo'>" + e.video + "</div>";

			e.audio.forEach(function(song){
				html += "<div class='trackplace'><button class='play'>play</button>"
				 + "<button class='pause'>pause</button>" + song.match(/[^.]*/)[0]
				 + ' <span></span><audio src = "' + song + '" id = "' + song + '"></audio>';
			});

			html += "<div class='container'>";
			if(e.imgs[0]){
				html += "<input type='button' value='<'>" + "<div class='images'>";
				e.imgs.forEach(function(img){
					html += "<div class='image'>" + "<img src='" + img + "'>" + "</div>";
				});
				html += "</div>" + "<input type='button' value='>'>" + "<input type='button' value='x'>";
			}
			html += "</div>";

			var likes = e.likes.amount + App.Likes.countLikesForPostId(e.id);
			html += "<div class='likes'><span>Лайков: " + likes + ".</span><p>";
			if(likes){
				html += "Пост лайкнули: " + e.likes.names.join(', ');
			}
			html += "</p><input type='button' value='Лайк'></div>";

			html += "</div>";
		});
		document.getElementsByTagName('body')[0].innerHTML = html;
	}

	,youTube : {
		init : function(){
			this.setMuteHandler();
			this.setUnmuteHandler();
		}
		,setMuteHandler : function(){
			iframe.addEventListener('mouseout', function(){
				player.mute();  
			});
		}
		,setUnmuteHandler : function(){
			iframe.addEventListener('mouseover', function(){
				player.unMute();
			});
		}
	}

	,audioPlayer : {
		init : function(){
			this.setEventHandlers();
		}
		,setEventHandlers : function(){
			var playBtns = document.getElementsByClassName('play');
			var pauseBtns = document.getElementsByClassName('pause');

			for (var i = 0; i < playBtns.length; i++){
				playBtns[i].onclick = function(){
					this.nextElementSibling.nextElementSibling.nextElementSibling.play();
				}
			}

			for (var i = 0; i < playBtns.length; i++){
				pauseBtns[i].onclick = function(){
					this.nextElementSibling.nextElementSibling.pause();
				}
			}

			for (var i = 0; i < pauseBtns.length; i++){
				pauseBtns[i].nextElementSibling.nextElementSibling.onloadedmetadata = function(){
					var duration = this.duration;

					var seconds = Math.floor(duration % 60);
					var strSeconds = String(seconds);

					if (seconds / 10 < 1){
						var arr = strSeconds.split('');
						arr.unshift('0');
						strSeconds = arr.join('');
					}
					this.previousElementSibling.innerHTML = Math.floor(duration / 60) + ':' + strSeconds;
				}
			}
		}
	}

	,Gallery : {
		init : function(){
			var posts = document.getElementsByClassName('post');
			var len = posts.length;
			for(var i = 0; i < len; i++){
				if(App.data[i].imgs[0]){
					App.Gallery.Handlers.init(posts[i].children[2]);
				}
			}
		}
		
		,Handlers : {
			init : function(div){
				this.setImage(div);
				this.setRightAngle(div);
				this.setLeftAngle(div);
				this.setCross(div);
			}
			,IMAGES_AMOUNT : 0
			,setImage : function(div){
				var imgs = div.children[1].children;
				var len = imgs.length;
				App.Gallery.Handlers.IMAGES_AMOUNT = len;

				for(var i = 0; i < len; i++){
					(function(x){
						var img = imgs[x];
						img.addEventListener('click', App.Gallery.Handlers.onImgClick);
					})(i);
				}
			}
			,onImgClick : function(){
				var imagesdiv = this.parentNode,
					imgs = imagesdiv.children, order, 
					len = imgs.length;

				for(var i = 0; i < len; i++){
					if(imgs[i] == this){
						order = i;
					}
				}
				imagesdiv.classList.add('active');
				App.Gallery.Handlers.showButtons(imagesdiv);
				imgs[0].style.marginLeft = (-600 * order) + 'px';
			}
			,showButtons : function(imagesdiv){
				imagesdiv.previousElementSibling.style.display = 'block';
				imagesdiv.nextElementSibling.style.display = 'block';
				imagesdiv.nextElementSibling.nextElementSibling.style.display = 'block';
			}
			,setStartView : function(imagesdiv){
				imagesdiv.previousElementSibling.style.display = 'none';
				imagesdiv.nextElementSibling.style.display = 'none';
				imagesdiv.nextElementSibling.nextElementSibling.style.display = 'none';
				imagesdiv.firstElementChild.style.marginLeft = '0px';
			}
			,setRightAngle : function(div){
				var angle = div.lastElementChild.previousElementSibling;
				angle.addEventListener('click', App.Gallery.Handlers.onRightAngleClick);
			}
			,onRightAngleClick : function(){
				var firstImg = this.previousElementSibling.firstElementChild;
					margin = getComputedStyle(firstImg).marginLeft,
					pattern = /[\-0-9]*/,
					prevMargin = +margin.match(pattern)[0];

				if(prevMargin == -600 * (App.Gallery.Handlers.IMAGES_AMOUNT - 1)){
					firstImg.style.marginLeft = 0 + 'px';
				}else{

					firstImg.style.marginLeft = (prevMargin - 600) + 'px';
				}

				this.removeEventListener('click', App.Gallery.Handlers.onRightAngleClick);
				var parentDiv = this.parentNode;

				setTimeout(function(){
					App.Gallery.Handlers.setRightAngle(parentDiv);
				}, 250);
			}
			,setLeftAngle : function(div){
				var angle = div.firstElementChild;
				angle.addEventListener('click', App.Gallery.Handlers.onLeftAngleClick);
			}
			,onLeftAngleClick : function(div){
				var firstImg = this.nextElementSibling.firstElementChild,
					margin = getComputedStyle(firstImg).marginLeft,
					pattern = /[\-0-9]*/;
					prevMargin = +margin.match(pattern)[0];

				if(prevMargin){
					firstImg.style.marginLeft = (prevMargin + 600) + 'px';
				}else{
					firstImg.style.marginLeft = (-600 * (App.Gallery.Handlers.IMAGES_AMOUNT - 1)) + 'px';
				}

				this.removeEventListener('click', App.Gallery.Handlers.onLeftAngleClick);
				var parentDiv = this.parentNode;

				setTimeout(function(){
					App.Gallery.Handlers.setLeftAngle(parentDiv);
				}, 250);
			}
			,setCross : function(div){
				var cross = div.lastElementChild;
				cross.addEventListener('click', function(){
					var imagesdiv = this.previousElementSibling.previousElementSibling;
					imagesdiv.classList.remove('active');
					App.Gallery.Handlers.setStartView(imagesdiv);
				});
			}
		}
	}

	,Likes : {
		init : function(){
			var likeDivs = document.getElementsByClassName('likes'),
				len = likeDivs.length;
			for(var i = 0; i < len; i++){
				this.setLikeHandler(likeDivs[i]);
			}
		}
		,countLikesForPostId : function(id){
			return (localStorage.getItem(id)) ? 1 : 0;
		}
		,setLikeHandler : function(likesdiv){
			likesdiv.lastElementChild.addEventListener('click', function(){
				var likeAmountElem = this.previousElementSibling.previousElementSibling,
					str = likeAmountElem.innerText;
				var postId = this.parentNode.parentNode.getAttribute('id');

				if(localStorage.getItem(postId)){
					var storageId = localStorage.getItem(postId);
					
					storageId = storageId ? storageId-- : storageId++;
					if(storageId){
						localStorage.setItem(postId, 0);
						likeAmountElem.innerText = 'Лайков: ' + (+str.match(/[\d]*/g)[8] - 1) + '.';
						localStorage.clear();
						this.classList.remove('shadow');
					}else{
						localStorage.setItem(postId, 1);
						likeAmountElem.innerText = 'Лайков: ' + (+str.match(/[\d]*/g)[8] + 1) + '.';
						this.classList.add('shadow');
					}
					
				}else{
					localStorage.setItem(postId, '1');
					likeAmountElem.innerText = 'Лайков: ' + (+str.match(/[\d]*/g)[8] + 1) + '.';
					this.classList.add('shadow');
				}
			});
		}
	}
}

App.init();