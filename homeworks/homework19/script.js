var container = document.getElementById('map');
var positions = [];

var xhr = new XMLHttpRequest();
xhr.open('GET', 'points.json', true);

xhr.onload = function(){
	var data = JSON.parse(this.responseText);

	var centerCoords = {lat : 53.904273, lng : 27.554280};
	var settings = {
		zoom : 13,
		center : centerCoords,
		mapTypeId : google.maps.MapTypeId.ROADMAD
	}
	var map = new google.maps.Map(container, settings);

	data.forEach(function(e){
		var currentPosition = {lat : e.lat, lng : e.lng};

		var marker = new google.maps.Marker({
			map : map,
			position : currentPosition,
			title : e.title,
		});

		positions.push(currentPosition);

		var infowindow = new google.maps.InfoWindow({
			content : e.description
		});

		marker.addListener('click', function() {
        	infowindow.open(map, marker);
        });
	});

	var path = new google.maps.Polyline({
		path : positions,
		geodesic : true,
		strokeColor : 'red',
		strokeOpacity: 1.0,
		strokeWeight : 2
	});

	path.setMap(map);

}

xhr.send(null);