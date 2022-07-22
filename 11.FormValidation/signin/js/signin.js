import showMessage from './toaster.js';

const $signInForm = document.querySelector('.signin');
const [$emailIconSuccess, $pwsIconSuccess] = document.querySelectorAll('.icon-success');
const [$emailIconError, $pswIconError] = document.querySelectorAll('.icon-error');
const [$emailErrorMsg, $pswErrorMsg] = document.querySelectorAll('.error');

$signInForm.addEventListener('keyup', e => {
  const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const pswReg = /^[A-Za-z0-9]{6,12}$/;
  if (e.target.id === 'signin-userid') {
    $emailIconSuccess.classList.toggle('hidden', !emailReg.test(e.target.value) || !e.target.value);
    $emailIconError.classList.toggle('hidden', emailReg.test(e.target.value) || !e.target.value);
    $emailErrorMsg.textContent =
      emailReg.test(e.target.value) || !e.target.value ? '' : '이메일 형식에 맞게 입력해 주세요.';
  }

  if (e.target.id === 'signin-password') {
    $pwsIconSuccess.classList.toggle('hidden', !pswReg.test(e.target.value) || !e.target.value);
    $pswIconError.classList.toggle('hidden', pswReg.test(e.target.value) || !e.target.value);
    $pswErrorMsg.textContent =
      pswReg.test(e.target.value) || !e.target.value ? '' : '영문 또는 숫자를 6~12자 입력하세요.';
  }
  if (!$pwsIconSuccess.classList.contains('hidden') && !$emailIconSuccess.classList.contains('hidden')) {
    document.querySelector('.button').disabled = false;
  }
});
$signInForm.addEventListener('submit', e => {
  e.preventDefault();

  showMessage('success');

  console.log('POST / signin', {
    email: `${document.querySelector('#signin-userid').value}`,
    password: `${document.querySelector('#signin-password').value}`,
  });
});
