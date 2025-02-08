const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carousel__button--right");
const prevBtn = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__paged-nav");
const dots = Array.from(dotsNav.children);

//slide width to help shifting the slide
const sliderWidth = slides[0].getBoundingClientRect().width;

const setSliderPosition = (slide, index) => {
    slide.style.left = sliderWidth * index + "px";
}
slides.forEach(setSliderPosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    if (!targetSlide) return;
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}
const updateDots = (currentDot, targetDot) => {
    if (!targetDot) return;
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
}

const hideShowArrow = (slides, prevBtn, nextBtn, targetIndex) => {
    if (targetIndex === 0) {
        prevBtn.classList.add("is-hidden");
        nextBtn.classList.remove("is-hidden");
    } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove("is-hidden");
        nextBtn.classList.add("is-hidden");
    } else {
        prevBtn.classList.remove("is-hidden");
        nextBtn.classList.remove("is-hidden");
    }
}
//previous button click handler
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot)
    hideShowArrow(slides, prevBtn, nextBtn, prevIndex);
})
//next button click handler
nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrow(slides, prevBtn, nextBtn, nextIndex);
})

//moving with paged dots

dotsNav.addEventListener("click", e => {
    const targetDot = e.target.closest("button");
    if (!targetDot) return;
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrow(slides, prevBtn, nextBtn, targetIndex);

})


const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})




// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "40%";  // IE10
    elements[i].style.flex = "40%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "5%";  // IE10
    elements[i].style.flex = "5%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}