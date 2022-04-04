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

});

document.querySelector(".product-carousel-slider").addEventListener('mouseover', (e) => {  
  slider.pause();
})

document.querySelector(".product-carousel-slider").addEventListener('mouseleave', (e) => {  
  slider.play();
})