// const $carouselControl = document.querySelector('.carousel-control');
const $carousel = document.querySelector('.carousel');
const transitionTime = 500;
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
};

carousel($carousel, ['./movies/movie-1.jpg', './movies/movie-2.jpg', './movies/movie-3.jpg', './movies/movie-4.jpg']);

// TODO: settimeout 꼭 필요한지 currentId 갱신이 이위치가 맞는지
const moveImg = direction => {
  isMoving = false;
  currentId = +$carousel.firstElementChild.style.getPropertyValue('--currentSlide');
  $carousel.firstElementChild.style.setProperty('--duration', transitionTime);
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

window.addEventListener('load', () => {
  width = document.querySelector('img').clientWidth;
  height = document.querySelector('img').clientHeight;

  $carousel.style.width = `${width}px`;
  $carousel.style.height = `${height}px`;

  $carousel.firstElementChild.style.setProperty('--currentSlide', 1);
  $carousel.style.opacity = 1;
});

$carousel.addEventListener('click', e => {
  if (!isMoving) return;

  if (e.target.classList.contains('next')) moveImg('next');
  if (e.target.classList.contains('prev')) moveImg('prev');
});
