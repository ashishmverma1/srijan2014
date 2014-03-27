$(document).ready(function() {
	
	var noOfNews = 7;		//Modify THIS according to the number of news items.	
	var newsTimeout = 5000;		//Timeout for each news entry
	
	var curNews = 1;
	var curLogo = 1;
	var curCont = document.getElementById("news" + curNews + "cont");
	var curLogoCont = document.getElementById("logo" + curLogo + "cont");
	
	while(curNews <= noOfNews)
	{
		if(curNews == 1) curNews = 2;
		curCont = document.getElementById("news" + curNews + "cont");
		
		curCont.style.height="0";
		curCont.style.width="0";
		curCont.style.opacity="0";
		
		curNews++;
	}
	
	curNews = 1;
	curCont = document.getElementById("news" + curNews + "cont");
	var prevCont = document.getElementById("news" + curNews + "cont");
		
	setInterval(function(){
		
		if(curNews > noOfNews)
		{
			curNews = 1;
		}
		curCont = document.getElementById("news" + curNews + "cont");
		
		prevCont.style.opacity="0";
		prevCont.style.height="0";
		prevCont.style.width="0";
		curCont.style.height="auto";
		curCont.style.width="auto";
		curCont.style.opacity="1";
		
		prevCont = curCont;	
		
		curNews++;
				
	}, newsTimeout);    
});

$(document).ready(function() {
			
	var noOfLogo = 2;			//Modify THIS according to the number of header logo items.	
	var LogoTimeout = 5000;		//Timeout for each news entry
	
	var curLogo = 1;
	var curLogoCont = document.getElementById("logo" + curLogo + "cont");
	
	while(curLogo <= noOfLogo)
	{
		if(curLogo == 1) curLogo = 2;
		curLogoCont = document.getElementById("logo" + curLogo + "cont");
		
		curLogoCont.style.height="0";
		curLogoCont.style.width="0";
		curLogoCont.style.opacity="0";
		
		curLogo++;
	}
	
	curLogo = 1;
	curLogoCont = document.getElementById("logo" + curLogo + "cont");
	var prevLogoCont = document.getElementById("logo" + curLogo + "cont");
		
	setInterval(function(){
		
		if(curLogo > noOfLogo)
		{
			curLogo = 1;
		}
		curLogoCont = document.getElementById("logo" + curLogo + "cont");
		
		prevLogoCont.style.opacity="0";
		prevLogoCont.style.height="0";
		prevLogoCont.style.width="0";
		curLogoCont.style.height="80%";
		curLogoCont.style.width="50%";
		curLogoCont.style.opacity="1";
		
		prevLogoCont = curLogoCont;	
		
		curLogo++;
				
	}, LogoTimeout);    
});


var isFullscreen = false;

function goFullscreen()
{
    var docElement, request, docElement2, request2;

    docElement = document.documentElement;
    request = docElement.requestFullScreen || docElement.webkitRequestFullScreen || docElement.mozRequestFullScreen || docElement.msRequestFullScreen;
	
	docElement2 = document;
	request2 = docElement2.cancelFullScreen || docElement2.webkitCancelFullScreen || docElement2.mozCancelFullScreen || docElement2.msCancelFullScreen || docElement2.exitFullscreen;
	
	if(!isFullscreen)
	{
		if(typeof request!="undefined" && request){
			request.call(docElement);
			isFullscreen = true;
		}
	}
	else
	{
		if(typeof request2!="undefined" && request2){
			request2.call(docElement2);
			isFullscreen = false;
		}
	}
}