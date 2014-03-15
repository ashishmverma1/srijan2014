var images = ['img/contactus.png','img/aboutus.png','img/dance.png','img/music.png','img/drama.png','img/events.png','img/gallery.png','img/register.png','multimedia/bgImg.jpg'];
var sounds = [];
var vids = [];

/*
var images = ['img/contactus.png','img/aboutus.png','img/dance.png','img/music.png','img/drama.png','img/events.png','img/gallery.png',
'img/srijan14_logo.png','img/topfilm.png','img/bottomfilm.png'];
var sounds = [];
var vids = [];

*/
/*
var images = ['img/tv.png',,'img/pic1.jpg','img/pic2.jpg','img/pic3.jpg','img/pic4.jpg','img/pic5.jpg','img/pic6.jpg','img/pic7.jpg','img/pic8.jpg','img/pic9.jpg',
'img/pic10.jpg','img/pic11.jpg','img/pic12.jpg','img/pic13.jpg','img/pic14.jpg','img/pic15.jpg','img/pic16.jpg','img/pic17.jpg','img/pic18.jpg','img/pic19.jpg','img/pic20.jpg',
'img/contactus.png','img/aboutus.png','img/dance.png','img/music.png','img/drama.png','img/events.png','img/gallery.png',
'img/srijan14_logo.png','img/topfilm.png','img/bottomfilm.png'];
var sounds = [];
var vids = ['multimedia/bgAudio.mp4','multimedia/bgAudio.webm'];
*/

var loader = null;
var itemsLoaded = 0;
var totalItems = images.length + sounds.length + vids.length;

var canvas = null;
var context = null;
var time = 0;
var intervalId = 0;
var volumeRocker = document.getElementById("volume-rocker");
var volumeDots = 40;


var makeVolumeRocker = function() {
	volumeRocker.innerHTML = '';
	
	var bigItems = Math.floor(itemsLoaded*volumeDots/totalItems);
	for(var i = 0; i < bigItems; i++) 
		volumeRocker.innerHTML += "<div class='volume-box big'></div>";

	for(var i = 0; i < volumeDots - bigItems; i++) 
		volumeRocker.innerHTML += "<div class='volume-box'></div>";
}

var initPreloader = function() {
	loader = new PxLoader();
	for(var i = 0; i < images.length; i++) loader.addImage(images[i]);
	for(var i = 0; i < sounds.length; i++) loader.addSound(sounds[i]);
	for(var i = 0; i < vids.length; i++) loader.addVideo(vids[i]);
}

var makeNoise = function() {
	var imgd = context.createImageData(canvas.width, canvas.height);
	var pix = imgd.data;
	
	for(var i = 0, n = pix.length; i < n; i += 4) {
			var c = 7 + Math.sin(i/50000 + time/7);
			pix[i] = pix[i+1] = pix[i+2] = 40*Math.random()*c;
			pix[i+3] = 255;
	}
	
	context.putImageData(imgd, 0, 0);
	time = (time + 1) % canvas.height;
}

var setup = function() {
	canvas = document.getElementById("tv");
	canvas.width = window.innerWidth/2;
	canvas.height = window.innerHeight/2;
	context = canvas.getContext("2d");

	initPreloader();
	loader.start();
	intervalId = setInterval(makeNoise, 10);
	
	makeVolumeRocker();

	$(".body-wrapper").hide();
	loader.addProgressListener(function(e) {
		itemsLoaded++;
		makeVolumeRocker();

	});
	
	loader.addCompletionListener(function(e) {
		clearInterval(intervalId);
		console.log("Done");
		$("#tv").fadeOut(300);
		$("#srijan-logo-big").hide(300);
		$("#loading").hide(300);
		volumeRocker.style.display = "none";
		document.getElementById('bgAudio').play();
		$(".body-wrapper").fadeIn(300);
	});

}

setup();