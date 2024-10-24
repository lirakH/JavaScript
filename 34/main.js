
function openMenu() {
	var menu = document.getElementById('myLinks');

	if( menu.style.display === "block"){
		menu.style.display = "none";
	}else{
		menu.style.display = "block";
	}
}

var slideIndex = 1;
var slideInterval;

function showSlide(n) {
	var slides = document.getElementsByClassName('slide');

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	if (n > slides.length){
		slideIndex = 1;
	}
	if (n < 1){
		slideIndex = slides.length;
	}

	slides[slideIndex - 1].style.display = "block";
}
showSlide(1);

function plusSlides(n){
	clearInterval(slideInterval);

	slideIndex += n;

	showSlide(slideIndex);

	slideInterval = setInterval(plusSlides, 5000, 1);
}

slideInterval = setInterval(plusSlides, 5000, 1);
