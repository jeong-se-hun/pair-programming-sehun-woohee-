// eslint-disable-next-line import/extensions
import toaster from './toaster.js';

const $signInForm = document.querySelector('.signin');
const $button = document.querySelector('.button');
const [$emailIconSuccess, $pwsIconSuccess] = document.querySelectorAll('.icon-success');
const [$emailIconError, $pswIconError] = document.querySelectorAll('.icon-error');
const [$emailErrorMsg, $pswErrorMsg] = document.querySelectorAll('.error');

const isValid = (e, reg) => reg.test(e.targetx.value) || !e.target.value;
// e,reg 매개 변수??
const renderMessage = (element, isValid) => {
  if (element === $emailErrorMsg) element.textContent = isValid ? '' : '이메일 형식에 맞게 입력해 주세요.';
  if (element === $pswErrorMsg) element.textContent = isValid ? '' : '영문 또는 숫자를 6~12자 입력하세요.';
};

$signInForm.addEventListener(
  'input',
  _.throttle(
    e => {
      const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      const pswReg = /^[A-Za-z0-9]{6,12}$/;

      if (e.target.id === 'signin-userid') {
        $emailIconSuccess.classList.toggle('hidden', !isValid(e, emailReg) || !e.target.value);
        $emailIconError.classList.toggle('hidden', isValid(e, emailReg));
        renderMessage($emailErrorMsg, isValid(e, emailReg));
      }

      if (e.target.id === 'signin-password') {
        $pwsIconSuccess.classList.toggle('hidden', !isValid(e, pswReg) || !e.target.value);
        $pswIconError.classList.toggle('hidden', isValid(e, pswReg));
        renderMessage($pswErrorMsg, isValid(e, pswReg));
      }

      // prettier-ignore
      const isAble= [... $signInForm.querySelectorAll('.icon-success')].filter(icon =>icon.classList.contains('hidden')).length !== 0

      $button.disabled = isAble;
    },
    400,
    { leading: false }
  )
);

$signInForm.addEventListener('submit', e => {
  e.preventDefault();

  toaster.render({ type: 'success', title: 'Well done!', message: 'signin Successfully' });

  if (e.target.classList.contains('toast-close')) toaster.remove(e.target.parentNode);

  // eslint-disable-next-line no-console
  console.log('POST / signin', {
    email: `${document.querySelector('#signin-userid').value}`,
    password: `${document.querySelector('#signin-password').value}`,
  });
});
