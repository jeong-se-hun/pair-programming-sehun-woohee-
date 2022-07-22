// eslint-disable-next-line import/extensions
import { checkValiable, successMassege } from './test.js';

document.querySelector('body').addEventListener('click', e => {
  if (e.target.matches('.link>a')) document.querySelector('.signup').classList.toggle('hidden');
});
document.querySelector('body').addEventListener('keyup', e => {
  // 유효성 검사
  if (e.target.tagName !== 'INPUT') return;
  checkValiable(e);
});
document.querySelector('body').addEventListener('submit', e => {
  console.log(e.target);
});
