// eslint-disable-next-line import/extensions
import showMessage from './toaster.js';

const checkValiable = e => {
  const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const pswReg = /^[A-Za-z0-9]{6,12}$/;

  if (e.target.nextElementSibling.textContent === 'email') {
    e.target.parentNode
      .querySelector('.icon-success')
      .classList.toggle('hidden', !emailReg.test(e.target.value) || !e.target.value);
    e.target.parentNode
      .querySelector('.icon-error')
      .classList.toggle('hidden', emailReg.test(e.target.value) || !e.target.value);
    // 수정됨
    e.target.parentNode.querySelector('.error').textContent =
      emailReg.test(e.target.value) || !e.target.value ? '' : '이메일 형식에 맞게 입력해 주세요.';
  }

  if (e.target.nextElementSibling.textContent === 'Password') {
    e.target.parentNode
      .querySelector('.icon-success')
      .classList.toggle('hidden', !pswReg.test(e.target.value) || !e.target.value);
    e.target.parentNode
      .querySelector('.icon-error')
      .classList.toggle('hidden', pswReg.test(e.target.value) || !e.target.value);
    e.target.parentNode.querySelector('.error').textContent =
      pswReg.test(e.target.value) || !e.target.value ? '' : '영문 또는 숫자를 6~12자 입력하세요.';
  }
  if (e.target.nextElementSibling.textContent === 'Name') {
    e.target.parentNode.querySelector('.icon-success').classList.toggle('hidden', !e.target.value);
    e.target.parentNode.querySelector('.icon-error').classList.toggle('hidden', e.target.value);
    e.target.parentNode.querySelector('.error').textContent = e.target.value ? '' : '이름을 입력해주세요.';
  }
  if (e.target.nextElementSibling.textContent === 'Confirm Password') {
    const checkPsw = document.getElementById('signup-password').value === e.target.value;
    e.target.parentNode.querySelector('.icon-success').classList.toggle('hidden', !checkPsw);
    e.target.parentNode.querySelector('.icon-error').classList.toggle('hidden', checkPsw);
    e.target.parentNode.querySelector('.error').textContent = checkPsw ? '' : '패스워드가 일치하지 않습니다.';
  }

  if (
    [...e.target.closest('form').querySelectorAll('.icon-success')].filter(icon => icon.classList.contains('hidden'))
      .length === 0
  ) {
    e.target.closest('form').querySelector('.button').disabled = false;
  } else {
    e.target.closest('form').querySelector('.button').disabled = true;
  }
};

// $signInForm.addEventListener('keyup', checkValiable);

const successMassege = e => {
  e.preventDefault();

  showMessage(e.target.querySelector('button').textContent);

  console.log('POST / signin', {
    email: `${document.querySelector('#signin-userid').value}`,
    password: `${document.querySelector('#signin-password').value}`,
  });
};

document.querySelector('body').addEventListener('submit', successMassege);

export { checkValiable, successMassege };
