const contentSlide = document.querySelector(".content-slide");
const contentImages = document.querySelectorAll(".content-slide img");

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Counter
let counter = 1;
const size = contentImages[0].clientWidth;

contentSlide.style.transform =
  "translateX(" + (-size * counter) + "px)";

//Button Listeners
nextBtn.addEventListener('click',()=>(
    contentSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    console.log(counter);
);