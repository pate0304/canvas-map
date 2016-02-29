window.onload=function(){
  
	if (navigator.geolocation) {
		var parameters = {
			enableHighAccuracy: false,
			timeout: 3600,
			maximumAge: 60000
		};
  
		navigator.geolocation.getCurrentPosition(reportPosition, gpsError, parameters);
	} else {
		
		alert("Sorry!, your current browser does not support Geolocation services!");
	}
  
  
  function reportPosition(position) {
	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");
	canvas.height = 400;
	canvas.width = 400;

	 
	document.getElementById("map").appendChild(canvas);
  
	var canvasimg = document.createElement("img");
  
	canvasimg.src = "http://maps.google.com/maps/api/staticmap?center=" + position.coords.latitude + ',' + position.coords.longitude + '&zoom=14&size=' + 400 + 'x' + 400 + '&maptype=terrain&sensor=true&markers=size:mid%7Ccolor:red%7C' + position.coords.latitude + ',' + position.coords.longitude;
  
	canvasimg.onload = function () {
		context.drawImage(canvasimg, 0, 0);
	};
  }
  
  
  function gpsError(error) {
	var errors = {
		1: 'Permission denied',
		2: 'Position unavailable',
		3: 'Request timeout'
	};
	alert("Error: " + errors[error.code]);}
  };