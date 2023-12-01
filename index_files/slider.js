var list = document.querySelector('#slider .list');
var items = document.querySelectorAll('#slider .list .item');
var dots = document.querySelectorAll('#slider .dots li');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var active = 0;
var lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active += 1;
    }
    reloadSlider();
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active -= 1;
    }
    reloadSlider();
}

let refreshSlide = setInterval(() =>{
    next.click();
}, 5000);

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let activeDots = document.querySelector('#slider .dots li.active');
    if(activeDots){
        activeDots.classList.remove('active');
    }

    dots[active].classList.add('active');
    
    clearInterval(refreshSlide);
    refreshSlide = setInterval(() =>{
        next.click();
    }, 5000);
}

dots.forEach((li, key) =>{
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    });
});

function reveal() {
    var reveals = document.querySelectorAll(".quote-counter");
    var imgs = document.querySelectorAll(".quote-img");
    for (var i = 0; i < reveals.length; i++) {
      var revealHeight = getHeight(reveals, i);
  
      if (revealHeight) {
        reveals[i].classList.add("quote-counter-active");
      } else {
        reveals[i].classList.remove("quote-counter-active");
      }
    }

    var imgHeight = getHeight(reveals, 0);
    if (imgHeight) {
        imgs[0].classList.add("quote-counter-active");
    } else {
        imgs[0].classList.remove("quote-counter-active");
    }
  }

  function getHeight(elements, index){
    var windowHeight = window.innerHeight;
    var elementTop = elements[index].getBoundingClientRect().top;
    var elementVisible = 150;
    if(elementTop < windowHeight - elementVisible){
        return true;
    }
    return false;
  }
  
  window.addEventListener("scroll", reveal);
  