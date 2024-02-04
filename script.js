// ------- Header Scroll ----------
window.onscroll = function(){
    if(window.scrollY > 0){
   document.querySelector(".header").style = 'box-shadow :rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    }else{
   document.querySelector(".header").style.boxShadow = 'none';
    }
}

// ------------- Menu Toggle -------------
document.querySelector(".menu-toggle").onclick = function(){
    document.querySelector(".navbar").classList.toggle("open");
}


// ------------- Menu Toggle -------------

let mainImg = document.getElementById("main-img");
let smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}