var left2 = document.getElementById("left");
var right2 = document.getElementById("right");
var navbarClicked = false;

function eventsappear()
{
	navbarClicked = true;
    var eventslist = document.getElementById("eventslist");
    right.setAttribute("style","display:none;") 
    left.setAttribute("style","display:block;width:32%;") 
    eventslist.setAttribute("style","opacity:1;")
    sponsors.setAttribute("style","opacity:0;")
    contactus.setAttribute("style","opacity:0;")
    register.setAttribute("style","opacity:0;height:0px;")
    hospitality.setAttribute("style","opacity:0;")
    dance.setAttribute("style","height:0px;display:none;")
    snap.setAttribute("style","height:0px;display:none;")
    music.setAttribute("style","height:0px;display:none;")
    drama.setAttribute("style","height:0px;display:none;")
    photography.setAttribute("style","height:0px;display:none;")
}
function sponsorsappear()
{
	navbarClicked = true;
    var sponsors = document.getElementById("sponsors");
    left.setAttribute("style","width:0%;")
    right.setAttribute("style","opacity:1; width:100%;")
    sponsors.setAttribute("style","height:100%;")
    eventslist.setAttribute("style","opacity:0;")
    register.setAttribute("style","opacity:0;height:0px;")
    contactus.setAttribute("style","opacity:0;height:0px;")
    aboutus.setAttribute("style","opacity:0;height:0px;")
    hospitality.setAttribute("style","opacity:0;")
    dance.setAttribute("style","height:0px;display:none;")
    snap.setAttribute("style","height:0px;display:none;")
    music.setAttribute("style","height:0px;display:none;")
    drama.setAttribute("style","height:0px;display:none;")
    photography.setAttribute("style","height:0px;display:none;")
}
function hospitalityappear()
{
	navbarClicked = true;
    var hospitality = document.getElementById("hospitality");
    left.setAttribute("style","width:0%;")
    right.setAttribute("style","opacity:1; width:100%;")
    hospitality.setAttribute("style","height:100%;")
    register.setAttribute("style","opacity:0;height:0px;")
    eventslist.setAttribute("style","opacity:0;")
    contactus.setAttribute("style","opacity:0;height:0px;")
    sponsors.setAttribute("style","opacity:0;height:0px;")
    aboutus.setAttribute("style","opacity:0;height:0px;")
    dance.setAttribute("style","height:0px;display:none;")
    snap.setAttribute("style","height:0px;display:none;")
    music.setAttribute("style","height:0px;display:none;")
    drama.setAttribute("style","height:0px;display:none;")
    photography.setAttribute("style","height:0px;display:none;")
}

function contactusappear()
{
	navbarClicked = true;
    var contactus = document.getElementById("contactus");
    left.setAttribute("style","display:none;width:0%;")
    right.setAttribute("style","opacity:1;width:100%;")/*Change background opacity here*/
    contactus.setAttribute("style","opacity:1;height:100%;")
    register.setAttribute("style","opacity:0;")
    sponsors.setAttribute("style","opacity:0;height:0px;")
    eventslist.setAttribute("style","opacity:0;")
    aboutus.setAttribute("style","opacity:0;height:0px;")
    hospitality.setAttribute("style","opacity:0;")
    dance.setAttribute("style","height:0px;display:none;")
    snap.setAttribute("style","height:0px;display:none;")
    music.setAttribute("style","height:0px;display:none;")
    drama.setAttribute("style","height:0px;display:none;")
    photography.setAttribute("style","height:0px;display:none;")
}
function registerappear()
{
	navbarClicked = true;
    var register = document.getElementById("register");
    left.setAttribute("style","display:none;width:0%;")
    right.setAttribute("style","opacity:1;width:100%;")/*Change background opacity here*/
    register.setAttribute("style","opacity:1;height:100%;")
    contactus.setAttribute("style","opacity:0;height:0px;")
    sponsors.setAttribute("style","opacity:0;height:0px;")
    eventslist.setAttribute("style","opacity:0;")
    aboutus.setAttribute("style","opacity:0;height:0px;")
    hospitality.setAttribute("style","opacity:0;")
    dance.setAttribute("style","height:0px;display:none;")
    snap.setAttribute("style","height:0px;display:none;")
    music.setAttribute("style","height:0px;display:none;")
    drama.setAttribute("style","height:0px;display:none;")
    photography.setAttribute("style","height:0px;display:none;")
}
function aboutusappear()
{
	navbarClicked = true;
    var aboutus = document.getElementById("aboutus");
    left.setAttribute("style","display:none;width:0%;")
    right.setAttribute("style","opacity:1;width:100%;")
    aboutus.setAttribute("style","opacity:1;height:90%;")
    register.setAttribute("style","opacity:0;height:0px;")
    sponsors.setAttribute("style","opacity:0;height:0px;")
    contactus.setAttribute("style","opacity:0;height:0px;") 
    hospitality.setAttribute("style","opacity:0;")
    eventslist.setAttribute("style","opacity:0;")
    dance.setAttribute("style","height:0px;display:none;")
    music.setAttribute("style","height:0px;display:none;")
    snap.setAttribute("style","height:0px;display:none;")
    drama.setAttribute("style","height:0px;display:none;")
    photography.setAttribute("style","height:0px;display:none;")
}
    
   
    
  
function danceeventsappear()
{
    var dance = document.getElementById("dance");   
    left.setAttribute("style","display:block;width:32%;") 
    right.setAttribute("style","width:59.5%;")
    aboutus.setAttribute("style","opacity:0;height:0px;")
    sponsors.setAttribute("style","opacity:0;height:0px;")
    register.setAttribute("style","opacity:0;height:0px;")
    hospitality.setAttribute("style","opacity:0;height:0px")
    contactus.setAttribute("style","opacity:0;height:0px;") 
    music.setAttribute("style","height:0px;display:none;")
    drama.setAttribute("style","height:0px;display:none;")
    snap.setAttribute("style","height:0px;display:none;")
    photography.setAttribute("style","height:0px;display:none;")
    right.setAttribute("style","opacity:1;")
    dance.setAttribute("style","opacity:1;height:90%;")/*Dance events right column style*/
         
} 
function musiceventsappear()
{
     var music = document.getElementById("music");
    left.setAttribute("style","display:block;width:32%;") 
    right.setAttribute("style","width:59.5%;")
   
        aboutus.setAttribute("style","opacity:0;height:0px;")
    sponsors.setAttribute("style","opacity:0;height:0px;") 
     hospitality.setAttribute("style","opacity:0;height:0px")
   register.setAttribute("style","opacity:0;height:0px;")
   contactus.setAttribute("style","opacity:0;height:0px;") 
    dance.setAttribute("style","height:0px;display:none;")
    photography.setAttribute("style","height:0px;display:none;")
    snap.setAttribute("style","height:0px;display:none;")
    drama.setAttribute("style","height:0px;display:none;")
    right.setAttribute("style","opacity:1;")/*change opacity here*/
    music.setAttribute("style","opacity:1;height:90%;")
    

    
}    
function photographyeventsappear()
{
    var photography = document.getElementById("photography");
    left.setAttribute("style","display:block;width:32%;") 
    right.setAttribute("style","width:59.5%;")
    aboutus.setAttribute("style","opacity:0;height:0px;")
     hospitality.setAttribute("style","opacity:0;height:0px")
    sponsors.setAttribute("style","opacity:0;height:0px;")
    register.setAttribute("style","opacity:0;height:0px;")
    contactus.setAttribute("style","opacity:0;height:0px;") 
    dance.setAttribute("style","height:0px;display:none;")
    snap.setAttribute("style","height:0px;display:none;")
    music.setAttribute("style","height:0px;display:none;")
    drama.setAttribute("style","height:0px;display:none;")
    right.setAttribute("style","opacity:1;")/*change opacity here*/
    photography.setAttribute("style","opacity:1;height:90%;")
    
    
    
}    
function dramaeventsappear()
{
      var drama = document.getElementById("drama");
       left.setAttribute("style","display:block;width:32%;") 
    right.setAttribute("style","width:59.5%;")
   
    aboutus.setAttribute("style","opacity:0;height:0px;")
    hospitality.setAttribute("style","opacity:0;height:0px")
    sponsors.setAttribute("style","opacity:0;height:0px;")
    register.setAttribute("style","opacity:0;height:0px;") 
    contactus.setAttribute("style","opacity:0;height:0px;") 
    dance.setAttribute("style","height:0px;display:none;")
    snap.setAttribute("style","height:0px;display:none;")
    music.setAttribute("style","height:0px;display:none;")
    photography.setAttribute("style","height:0px;display:none;")
    right.setAttribute("style","opacity:1;")/*change opacity here*/
    drama.setAttribute("style","opacity:1;height:90%;")
    
    
}
function snapeventsappear()
{
      var snap = document.getElementById("snap");
       left.setAttribute("style","display:block;width:32%;") 
    right.setAttribute("style","width:59.5%;")
   
    aboutus.setAttribute("style","opacity:0;height:0px;")
    hospitality.setAttribute("style","opacity:0;height:0px")
    sponsors.setAttribute("style","opacity:0;height:0px;")
    register.setAttribute("style","opacity:0;height:0px;") 
    contactus.setAttribute("style","opacity:0;height:0px;") 
    dance.setAttribute("style","height:0px;display:none;")
    music.setAttribute("style","height:0px;display:none;")
    drama.setAttribute("style","height:0px;display:none;")
    photography.setAttribute("style","height:0px;display:none;")
    right.setAttribute("style","opacity:1;")/*change opacity here*/
    snap.setAttribute("style","opacity:1;height:90%;")
    
    
}    
   


//Latest
$(document).ready(function() {
//	$(".content").hide();
	
	var navbar = $(".navbar");   
   	var timeout;
	var timeoutInterval = 3000;
	var inside = false;
	var px = 0, py = 0;

	function navbarDown() {
		navbar.css("top", "0");
		console.log("Down");
	}
	
	function navbarUp() {
		navbar.css("top", "-200px");
		console.log("Up");
	}
	
	navbarUp();
	$(".container").mousemove(function(e) {
		if(!inside && (px != e.clientX || py != e.clientY)) {
			px = e.clientX;
			py = e.clientY;
			clearTimeout(timeout);
			navbarDown();
			
			if(!navbarClicked)timeout = setTimeout(navbarUp, timeoutInterval);
		}
	});
	
	$(".navbar").mouseenter(function(e) {
		clearTimeout(timeout);
		inside = true;
	});
	$(".navbar").mouseout(function(e) {
		inside = false;
	});
	
	
	$("#film-big-image").hide();
	$(".film-pic").mouseenter(function(e) {
		$("#film-big-image").fadeIn(750)
		.css("background-image", $(this).css("background-image"));
	});

	$(".film-pic").mouseout(function(e) {
		$("#film-big-image").hide();
	});
});
//Function for top and bottom filmstrips

    	var filmtop = $("#top-filmstrip");   
    	var filmbottom = $("#bottom-filmstrip");   
	function filmstripappear() {
	    var filmbg = $ ("#background-strip");
    	var filmtop = $("#top-filmstrip");   
    	var filmbottom = $("#bottom-filmstrip");   
        filmbottom.css("left","0%");
		filmtop.css("left", "0%");
        filmbg.css("display","block");
		console.log("Film in ");
	}
	
	function filmstripdisappear() {
	    var filmbg = $ ("#background-strip");
		var filmtop = $("#top-filmstrip");   
    	var filmbottom = $("#bottom-filmstrip");   
        filmbottom.css("left","-100%");
        filmtop.css("left", "+100%");
        filmbg.css("display","none");
		console.log("Film out");
	}

	function remoteappear() {
	   
	    var remotearrow = $("#remotearrow");
	    var remote = $("#remote");
        remotearrow.css("opacity","0.1");   
        remote.css("right","0");
		console.log("Remote in ");
	}
    function remotedisappear() {
	    var remotearrow = $("#remotearrow");
	    var remote = $("#remote");
        remote.css("right","-10%");
       	remotearrow.css("opacity","1");   
        console.log("Remote out ");
	}