$(document).ready(function() {
	
	var noOfNews = 5;			//Modify THIS according to the number of news items.
	var newsTimeout = 5000;		//Timeout for each news entry
	
	var curNews = 1;
	var curCont = document.getElementById("news" + curNews + "cont");
	
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