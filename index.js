const sliderContainer = document.querySelector(".slider-container")
const leftContainer = document.querySelector(".left-container")
const rightContainer = document.querySelector(".right-container")
const upButton = document.querySelector(".up-button")
const downButton = document.querySelector(".down-button")
const SlidesLength = rightContainer.querySelectorAll("div").length


let activeSlide = 0;
leftContainer.style.top = `-${(SlidesLength- 1) * 100}vh`
upButton.addEventListener("click", ()=> changeSlide("up"))
downButton.addEventListener("click", ()=> changeSlide("down"))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === "up") {
        activeSlide++;
        if ( activeSlide > SlidesLength -1 ) {
            activeSlide = 0;
        }
    }
    else{
        activeSlide--;
        if ( activeSlide < 0) {
            activeSlide = SlidesLength -1;
        }
    }
    rightContainer.style.transform = `translateY(-${activeSlide * sliderHeight}px)`
    leftContainer.style.transform = `translateY(${activeSlide * sliderHeight}px)`
}