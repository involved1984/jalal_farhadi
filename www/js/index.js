var deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
var urlToLoad = 'http://hotmat.se/?environment=app&platform=' + deviceType;
var ref;
var app = {
	initialize: function() {
		console.log('Adding event');
		document.addEventListener('deviceready', this.deviceReady, false);
	},

	deviceReady: function() {
		console.log('Running');		
		ref = window.open(urlToLoad, '_blank', 'location=no,toolbar=no');
		
		ref.addEventListener('loadstart', function(event) {
			var tmpObject = document.getElementById('appContainer');
			tmpObject.setAttribute('style', 'display:none;');
			
			tmpObject = document.getElementById('loadingErrorMessage');
			tmpObject.setAttribute('style', 'display:block;');
		});
		ref.addEventListener('loadstop', function(event) {
			urlToLoad = event.url;
		});
		ref.addEventListener('loaderror', function(event) {
			ref.close();
		});
		
	}
};
