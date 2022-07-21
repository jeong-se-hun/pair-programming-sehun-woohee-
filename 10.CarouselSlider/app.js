// const $carouselControl = document.querySelector('.carousel-control');
const $carousel = document.querySelector('.carousel');
const transitionTime = 1000;
let currentId = 0;
let isMoving = true;
let width = 0;
let carouselLength = 0;

const carousel = ($container, images) => {
  carouselLength = images.length;
  $container.innerHTML = `<div class="carousel-slides">
  <img src="${images[carouselLength - 1]}">
  ${images.map(img => `<img src="${img}">`).join('')}
  <img src="${images[0]}">
  </div>
  <button class="carousel-control prev">&laquo;</button>
  <button class="carousel-control next">&raquo;</button>
  </img>`;
};

carousel($carousel, ['./movies/movie-1.jpg', './movies/movie-2.jpg', './movies/movie-3.jpg', './movies/movie-4.jpg']);

window.addEventListener('load', () => {
  width = document.querySelector('img').clientWidth;
  $carousel.style.width = `${width}px`;
  $carousel.firstElementChild.style.setProperty('--currentSlide', 1);
  $carousel.style.opacity = 1;
});

const moveImg = direction => {
  isMoving = false;
  $carousel.firstElementChild.style.setProperty('--duration', transitionTime);
  // TODO: settimeout 꼭 필요한지 currentId 갱신이 이위치가 맞는지
  currentId = +$carousel.firstElementChild.style.getPropertyValue('--currentSlide');
  $carousel.firstElementChild.style.setProperty('--currentSlide', currentId + (direction === 'next' ? 1 : -1));

  if (direction === 'next' && currentId === carouselLength) {
    setTimeout(() => {
      $carousel.firstElementChild.style.setProperty('--duration', 0);
      $carousel.firstElementChild.style.setProperty('--currentSlide', 1);
      currentId = 0;
    }, transitionTime);
  }

  if (direction === 'prev' && currentId === 1) {
    setTimeout(() => {
      $carousel.firstElementChild.style.setProperty('--duration', 0);
      $carousel.firstElementChild.style.setProperty('--currentSlide', 4);
      currentId = 4;
    }, transitionTime);
  }

  setTimeout(() => {
    isMoving = true;
  }, transitionTime);
};

$carousel.addEventListener('click', e => {
  if (e.target.classList.contains('next')) {
    if (isMoving) moveImg('next');
  }
  if (e.target.classList.contains('prev')) {
    if (isMoving) moveImg('prev');
  }
});
