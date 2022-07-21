// eslint-disable-next-line import/extensions
import { checkValiable, successMassege } from './signin.js';

document.querySelector('body').addEventListener('click', e => {
  if (e.target.matches('.link>a')) document.querySelector('.signup').classList.toggle('hidden');
});
document.querySelector('#signup-userid').addEventListener('keyup', e => {
  checkValiable(e);
});

// .addEventListener('keyup', checkValiable);
