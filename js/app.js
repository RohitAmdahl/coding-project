const slides = document.querySelectorAll(".slides");
console.log(slides);

const totalsSlides = slides.length;
console.log(totalsSlides);

let index = 0; //--index is 0

setInterval(function () {
  index += 1;
  changePicture();
}, 3000);

function changePicture() {
  //---function change pictures
  if (index > 9) {
    index = 0;
  }
  if (index < 0) {
    index = 9;
  }
  for (let i = 0; i < totalsSlides; i++) {
    slides[i].classList.remove("picture");
  }
  slides[index].classList.add("picture");
}
