// state 에  true false
const state = {
  emailValid: false,
  passwordValid: false,
  nameValid: false,
  passwordMatch: false,
};

const errorMessage = {
  email: '이메일 형식에 맞게 입력해 주세요.',
  password: '영문 또는 숫자를 6~12자 입력하세요.',
  name: '이름을 입력해주세요.',
  passwordMath: '패스워드가 일치하지 않습니다.',
};

const isValid = (e, reg) => reg.test(e.target.value);

const check = {
  email(e) {
    const emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    state.emailValid = isValid(e, emailReg);
    return { valid: state.emailValid, message: errorMessage.email };
  },
  password(e) {
    const pswReg = /^[A-Za-z0-9]{6,12}$/;
    state.passwordValid = isValid(e, pswReg);
    return { valid: state.passwordValid, message: errorMessage.password };
  },
  name(e) {
    state.nameValid = !!e.target.value;
    return { valid: state.nameValid, message: errorMessage.name };
  },
  pswMatch(e) {
    state.passwordMatch = document.querySelector('#signup-password').value === e.target.value;
    return { valid: state.passwordMatch, message: errorMessage.passwordMath };
  },
};
export default check;
