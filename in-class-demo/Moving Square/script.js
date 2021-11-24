let square=document.querySelector(".sq");
function moveRight(){
    square.classList.add("run-animation");
}

square.addEventListener("click",moveRight);
