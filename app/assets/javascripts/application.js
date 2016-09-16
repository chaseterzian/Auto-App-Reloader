// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$('document').ready(function() {


	appReloader = function() {

		setInterval(function() {
			var secondsCount = new Date();
			var currentSecond = secondsCount.getSeconds(); 
			if (currentSecond == 1) {
				document.getElementById('app-loader').src = "http://gearbox-11beta.herokuapp.com";
				document.getElementById('app-detail-printout').innerHTML = "Loading Gearbox";
				console.log("Loading Gearbox");
				setTimeout(function() { 
					document.getElementById("app-loader").src = "";
					document.getElementById('app-detail-printout').innerHTML = "Unloading Gearbox";
					console.log("UN-Loading Gearbox");
				},15000);
			} else if (currentSecond == 21) {
				document.getElementById('app-loader2').src = "https://whiteboard-rails.herokuapp.com/";
				document.getElementById('app-detail-printout2').innerHTML = "Loading Whiteboard-Rails";
				console.log("Loading Whiteboard-Rails");
				setTimeout(function() { 
					document.getElementById("app-loader2").src = "";
					document.getElementById('app-detail-printout2').innerHTML = "Unloading Whiteboard-Rails";
					console.log("UN-Loading Whiteboard-Rails");
				},15000);

			} else if (currentSecond == 41) {
				document.getElementById('app-loader3').src = "https://the-projects-rails.herokuapp.com/";
				document.getElementById('app-detail-printout3').innerHTML = "Loading The Projects";
				console.log("Loading The Projects");
				setTimeout(function() { 
					document.getElementById("app-loader3").src = "";
					document.getElementById('app-detail-printout3').innerHTML = "Unloading The Projects";
					console.log("UN-Loading The Projects");
				},15000);
			} else if (currentSecond == 57) {
				document.getElementById('app-loader4').src = "https://chaseterzian.github.io";
				document.getElementById('app-detail-printout4').innerHTML = "Checking chaseterzian.github.io";
				console.log("Checking chaseterzian.github.io");
				setTimeout(function() { 
					document.getElementById("app-loader4").src = "";
					document.getElementById('app-detail-printout4').innerHTML = "Unloading chaseterzian.github.io";
					console.log("UN-Loading chaseterzian.github.io");
				}, 1000);
			} 

		}, 1000);

};
appReloader();

});