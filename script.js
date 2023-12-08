const buttonPrev = document.querySelector('.button_prev');
const buttonNext = document.querySelector('.button_next');
const sliderItems = document.querySelectorAll('.slider_item');
const sliderWrapper = document.querySelector('.slider__items');

console.log(sliderWrapper);
buttonPrev.addEventListener('click', sliderPrev)

function sliderPrev () {
    if (count === 0) {
        count = sliderItems.length;
    }
    count--;
    sliderWrapper.style.transform = `translateX(-${temp * count}px)`
    console.log(count);

}

let count = 0;
const temp = 1000;
function sliderNext () {
    count++;
    sliderWrapper.style.transform = `translateX(-${temp * count}px)`;

    if (count >= sliderItems.length - 1) {
        count = 0;
        //sliderItems[count].style.transform = `translateX(-${temp * count}px)`
    }

console.log(count);

}

buttonNext.addEventListener('click', sliderNext)