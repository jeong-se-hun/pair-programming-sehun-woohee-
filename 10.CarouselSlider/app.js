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
  $container.style.width = `${img.width}px`;
  $container.style.opacity = 1;

  //  $container.style.width = image
};
carousel(document.querySelector('.carousel'), [
  './movies/movie-1.jpg',
  './movies/movie-2.jpg',
  './movies/movie-3.jpg',
  './movies/movie-4.jpg',
]);
document.querySelector('.carousel-control').addEventListener('click', e => {});
const img = document.querySelector('img');
console.dir(img.offsetWidth);
