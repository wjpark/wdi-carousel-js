// Following code stores all the images in an array.  When user clicks on previous
// or next, it scrolls through the array and displays the appropriate image.


var imgArray = ["images/bp1.jpg", 
                "images/bp2.jpg",
                "images/bp3.jpg",
              	"images/bp4.jpg"
                ];

var img = document.getElementById('img_id'); 
var index = 0;
img.setAttribute('src', imgArray[index]); //initializes first image to the 1st image in imgArray

function previous() {
  if(index <= 0) {
    index = imgArray.length - 1; //scrolls to the last img of the array if user clicks previous at the beginning
  } else {
    index -= 1;
  }
  img.setAttribute('src', imgArray[index]);
  img.style.opacity = 0;
  fadeIn();
}

function next() {
	if(index >= imgArray.length - 1) { //scrolls to the first img of the array if user clicks next at the end
    index = 0;
  } else {
    index += 1;
  }
  img.setAttribute('src', imgArray[index]);
  img.style.opacity = 0;
  fadeIn();
}

function fadeIn() {
  var opacity = 0;
  var timer = setInterval(function(){
    opacity += 0.03;
    img.style.opacity = opacity;
    if(opacity > 1) {
      clearInterval(timer);
    }
  }, 30);
}

var previousBtn = document.getElementById('previous');
previousBtn.onclick = function() {
	previous();
};

var nextBtn = document.getElementById('next');
nextBtn.onclick = function() {
	next();
};

