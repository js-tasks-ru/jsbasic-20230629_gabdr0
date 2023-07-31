function initCarousel() {
  const carouselArrowRight = document.querySelector(".carousel__arrow_right");
  const carouselArrowLeft = document.querySelector(".carousel__arrow_left");
  const carouselInner = document.querySelector( ".carousel__inner" );

  let count = carouselInner.children.length;
  let slideWidth = carouselInner.offsetWidth;
  let carouselWidth = count * slideWidth;
  carouselArrowLeft.style.display = "none";

  console.log(carouselWidth);

  let position = 0;
  carouselArrowRight.addEventListener("click", function() {
    carouselArrowLeft.style.display = "";
    position += slideWidth;
    console.log(position);
    if (position <= carouselWidth - slideWidth) {
      carouselInner.style.transform = `translateX(-${position}px)`;
    }
    if (position >= carouselWidth - slideWidth) {
      carouselArrowRight.style.display = "none";
    }
  });

  carouselArrowLeft.addEventListener("click", function() {
    carouselArrowRight.style.display = "";
    position -= slideWidth;
    console.log(position);
    if (position >= 0) {
      carouselInner.style.transform = `translateX(-${position}px)`
    } 
    if (position <= 0) {
      carouselArrowLeft.style.display = "none";
    }
  });
}
