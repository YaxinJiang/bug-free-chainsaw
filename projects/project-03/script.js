console.log('connected');

let checkPhoto = document.getElementById("instruction_2");
checkPhoto.addEventListener("mouseover", photoBackground);
checkPhoto.addEventListener("mouseout", whiteBackground);
let body = document.querySelector("body");
function photoBackground() {
    console.log('changebg');
    body.classList.add("body_photo");
  }
  function whiteBackground() {
    console.log('backbg');
    body.classList.remove("body_photo");
  }





  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "flex";
}