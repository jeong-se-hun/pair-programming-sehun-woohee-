/* eslint-disable import/extensions */
import check from './model.js';
import renderInfo from './render.js';
import toaster from './toaster.js';
// email name password """"input"""""
// """"submit"""""
// link """"click""""

// input 이벤트는 스로틀을 시행한다
// 값은 state에 저장되며 유효성 검사를 실시한다 <1
// 유효성 검사를 통과하면 석세스 아이콘의 히든을 떼고 에러아이콘의 히든을단다
// 실패시 에러아이콘에 히든을 때고 석세스 아이콘에 히든을 단다.
// + 에러메세지를 띄운다
// 패스워드 일치여부 상태도 생성 한다
// 총 valid가 모두 true인지 검사하여  submit을 active 해준다. <1

// submit 을 할시에는 토스트를 보여준다

// 링크를 누를 시에는 페이지 전환이 이루어진다.

const $signinForm = document.querySelector('.signin.form');
const $signupForm = document.querySelector('.signup.form');

const isValid = _.throttle(
  e => {
    if (/id/.test(e.target.id)) renderInfo(e, check.email(e));
    if (/password/.test(e.target.id)) {
      if (e.target.id === 'signup-confirm-password') renderInfo(e, check.pswMatch(e));
      else renderInfo(e, check.password(e));
    }
    if (/name/.test(e.target.id)) renderInfo(e, check.name(e));
  },
  400,
  { leading: false }
);

const submitForm = e => {
  e.preventDefault();

  if (e.target.closest('form').classList.contains('signin')) {
    toaster.render({ type: 'success', title: 'Well done!', message: 'signin Successfully' });
    // eslint-disable-next-line no-console
    console.log('POST / signin', {
      email: `${document.querySelector('#signin-userid').value}`,
      password: `${document.querySelector('#signin-password').value}`,
    });
  }

  if (e.target.closest('form').classList.contains('signup')) {
    toaster.render({ type: 'success', title: 'Well done!', message: 'signup Successfully' });
    // eslint-disable-next-line no-console
    console.log('POST / signup', {
      email: `${document.querySelector('#signup-userid').value}`,
      name: `${document.querySelector('#signup-name').value}`,
      password: `${document.querySelector('#signup-password').value}`,
      passwordMatch: `${document.querySelector('#signup-confirm-password').value}`,
    });
  }

  if (e.target.classList.contains('toast-close')) toaster.remove(e.target.parentNode);
};

[$signinForm, $signupForm].forEach($form => {
  $form.onsubmit = submitForm;
  $form.oninput = isValid;
  $form.onclick = e => {
    if (e.target.matches('.link>a')) document.querySelector('.signup').classList.toggle('hidden');
  };
});
