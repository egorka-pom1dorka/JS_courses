// navigator.geolocation.getCurrentPosition(function(p){
// 	console.log(p);
// });


// navigator.getBattery().then(function(p){
// 	console.log(p);
// });


// var div = document.getElementById('map');
// var coords = {lat: 27.75, lng: 52.5};
// var settings = {
// 	zoom : 7,
// 	center : coords,
// 	mapTypeId : google.maps.MapTypeId.ROADMAD
// }
// var map = new google.maps.Map(div, settings);
// var marker = new google.maps.Marker({
// 	map : map,
// 	position : coords
// });

var iframe = document.getElementById('video');
function onYouTubeIframeAPIReady(){
	player = new YT.Player('video');
}
iframe.onload = function(){
	player.playVideo();
}