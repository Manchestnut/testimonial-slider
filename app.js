var pics = ["images/image-tanya.jpg", "images/image-john.jpg"];
var firstText =
  "“I’ve been interested in coding for a while but never taken the jump, " +
  "until now. I couldn’t recommend this course enough. I’m now in the job" +
  " of my dreams and so excited about the future. ”";
var secondText =
  "“If you want to lay the best foundation possible I’d recommend taking" +
  "this course. The depth the instructors go into is incredible. I now feel" +
  "so confident about starting up as a professional developer. ”";
var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");
var img = document.querySelector("img");

function replaceSecond() {
  document.getElementById("text").textContent = secondText;
  document.getElementById("name").textContent = "John Tarkpor";
  document.getElementById("job").textContent = "Junior Front-End Developer";
}
function replaceFirst() {
  document.getElementById("text").textContent = firstText;
  document.getElementById("name").textContent = "Tanya Sinclair";
  document.getElementById("job").textContent = "UX Engineer";
}
var counter = 1;
nextBtn.addEventListener("click", function () {
  if (counter === 2) {
    counter = 0;
  }
  if (counter === -1) {
    counter = 1;
  }
  if (counter === 1) {
    replaceSecond();
  } else {
    replaceFirst();
  }
  img.src = pics[counter];
  counter++;
});
prevBtn.addEventListener("click", function () {
  if (counter === 2) {
    counter = 0;
  }
  if (counter === -1) {
    counter = 1;
  }
  if (counter === 1) {
    replaceSecond();
  } else {
    replaceFirst();
  }
  img.src = pics[counter];
  counter--;
});
