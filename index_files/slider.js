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