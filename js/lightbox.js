function init(){
	var lightboxElements = "<div id='lightbox'>";
		lightboxElements += "<div id='overlay' class='hidden'></div>";
		lightboxElements += "<img class='hidden' id='big-image' />";
		lightboxElements += "</div>";
	
	document.querySelector("body").innerHTML += lightboxElements;
	
	//register toggle as event handler
	var bigImage = document.querySelector("#big-image")
		bigImage.addEventListener("click", toggle, false );
		
		//new function
		prepareThumbs();
		//declare a new function
		function toggle(){
			var clickedImage = event.target;
			var bigImage = document.querySelector('#big-image')
				bigImage.src = clickedImage.src;
					if(overlay.getAttribute("class") === "hidden") {
						overlay.setAttribute("class", "showing");
						bigImage.setAttribute("class", "showing");
					} else {
						overlay.setAttribute("class", "hidden");
						bigImage.setAttribute("class", "hidden");
					}
		}
	//declare new function
	function prepareThumbs(){
		var liElements = document.querySelectorAll("ul#images li");
		var i = 0;
		var image, li;
		
		//loop through li elements
			while ( i < liElements.length ){
				li = liElements[i];
				
				//set class for lightbox
				li.setAttribute("class", "lightbox");
				image = li.querySelector("img");
				
				//register event handler
				image.addEventListener("click", toggle, false);
				
				i += 1;
			}
	}
}
document.addEventListener("DOMContentLoaded", init, false);