// 성공 실패 뱃지
// 에러메세지
// toaster
// const errormessage = {
//   email: '이메일 형식에 맞게 입력해 주세요.',
//   password: '영문 또는 숫자를 6~12자 입력하세요.',
//   name: '이름을 입력해주세요.',
//   passwordMath: '패스워드가 일치하지 않습니다.',
// };

const renderInfo = (e, { valid, message }) => {
  e.target.parentNode.querySelector('.icon-success').classList.toggle('hidden', !valid);
  e.target.parentNode.querySelector('.icon-error').classList.toggle('hidden', valid);
  e.target.parentNode.querySelector('.error').textContent = valid ? '' : message;

  e.target.closest('form').querySelector('.button').disabled =
    [...e.target.closest('form').querySelectorAll('.icon-success')].filter(icon => icon.classList.contains('hidden'))
      .length !== 0;
};

export default renderInfo;
