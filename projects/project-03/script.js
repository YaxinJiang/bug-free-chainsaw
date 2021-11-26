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
