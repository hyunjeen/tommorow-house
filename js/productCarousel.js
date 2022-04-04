const $carousel = document.querySelector(".product-carousel-slider");
const slider = tns({
  container: '.product-carousel-slider .slider-list',
  controls: false,
  navContainer: '.product-carousel .thumbnail-list',
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  gutter: 1, 

});

$carousel.addEventListener('mouseover', (e) => {  
  slider.pause();
})

$carousel.addEventListener('mouseleave', (e) => {  
  slider.play();
})