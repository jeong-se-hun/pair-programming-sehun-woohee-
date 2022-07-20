// const $carouselControl = document.querySelector('.carousel-control');
const $carousel = document.querySelector('.carousel');

let width = 0;

const carousel = ($container, images) => {
  const img = new Image();
  img.src = '' + images[0];
  $container.innerHTML = `<div class="carousel-slides">
  <img src="${images[images.length - 1]}">
  ${images.map(img => `<img src="${img}">`).join('')}
  <img src="${images[0]}">
  </div>
  <button class="carousel-control prev">&laquo;</button>
  <button class="carousel-control next">&raquo;</button>
  </img>`;
};

carousel($carousel, ['./movies/movie-1.jpg', './movies/movie-2.jpg', './movies/movie-3.jpg', './movies/movie-4.jpg']);
const setFrame = () => {
  $carousel.firstElementChild.style.setProperty('--currentSlide', 1);
};

window.addEventListener('load', () => {
  width = document.querySelector('img').getBoundingClientRect().width;
  $carousel.style.width = `${width}px`;
  setFrame();
  $carousel.style.opacity = 1;
});

$carousel.addEventListener('click', e => {
  $carousel.firstElementChild.style.setProperty('--duration', 1000);

  if (e.target.classList.contains('next')) {
    $carousel.firstElementChild.style.setProperty(
      '--currentSlide',
      +$carousel.firstElementChild.style.getPropertyValue('--currentSlide') + 1
    );

    if ($carousel.firstElementChild.style.getPropertyValue('--currentSlide') === '5') {
      setTimeout(() => {
        $carousel.firstElementChild.style.setProperty('--duration', 0);
        $carousel.firstElementChild.style.setProperty('--currentSlide', 1);

        console.log($carousel.firstElementChild.style.getPropertyValue('--currentSlide'));
      }, 1000);
    }

    console.log($carousel.firstElementChild.style.getPropertyValue('--currentSlide'));
  }

  if (e.target.classList.contains('prev')) {
    $carousel.firstElementChild.style.setProperty(
      '--currentSlide',
      +$carousel.firstElementChild.style.getPropertyValue('--currentSlide') - 1
    );
  }
});
