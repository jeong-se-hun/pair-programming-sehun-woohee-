// const $carouselControl = document.querySelector('.carousel-control');
const $carousel = document.querySelector('.carousel');
let $carouselSlides = null;
const DURATION = 500;

let currentId = 0;
let isMoving = true;
let width = 0;
let height = 0;
let carouselLength = 0;

const carousel = ($container, images) => {
  carouselLength = images.length;
  $container.innerHTML = `
  <div class="carousel-slides">
    <img src="${images[carouselLength - 1]}">
    ${images.map(img => `<img src="${img}">`).join('')}
    <img src="${images[0]}">
    </div>
    <button class="carousel-control prev">&laquo;</button>
    <button class="carousel-control next">&raquo;</button>
    </img>`;

  $carouselSlides = document.querySelector('.carousel-slides');
};

carousel($carousel, ['./movies/movie-1.jpg', './movies/movie-2.jpg', './movies/movie-3.jpg', './movies/movie-4.jpg']);

// TODO: settimeout 꼭 필요한지 currentId 갱신이 이위치가 맞는지
const moveImg = direction => {
  isMoving = false;
  currentId = +$carouselSlides.style.getPropertyValue('--currentSlide');
  $carouselSlides.style.setProperty('--duration', DURATION);
  currentId += direction === 'next' ? 1 : -1;
  $carouselSlides.style.setProperty('--currentSlide', currentId);
};

window.addEventListener('load', () => {
  width = document.querySelector('img').clientWidth;
  height = document.querySelector('img').clientHeight;

  $carousel.style.width = `${width}px`;
  $carousel.style.height = `${height}px`;

  $carouselSlides.style.setProperty('--currentSlide', 1);
  $carousel.style.opacity = 1;
});

$carousel.addEventListener('click', ({ target }) => {
  if (!isMoving) return;

  if (target.classList.contains('next')) moveImg('next');
  if (target.classList.contains('prev')) moveImg('prev');
});

window.addEventListener('transitionend', () => {
  isMoving = true;

  $carouselSlides.style.setProperty('--duration', 0);

  if (currentId === 5) $carouselSlides.style.setProperty('--currentSlide', 1);
  if (currentId === 0) $carouselSlides.style.setProperty('--currentSlide', 4);
});
