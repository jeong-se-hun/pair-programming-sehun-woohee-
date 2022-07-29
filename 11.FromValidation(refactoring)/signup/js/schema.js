//
// test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환
// 프로퍼티 이름은 html 에 input name 와 동일하게 설정하여 e.target 의 name 을 통해 접근이 용이

const signinSchema = {
  userid: {
    value: '',
    get isValid() {
      return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(this.value);
    },
    error: '이메일 형식에 맞게 입력해 주세요.',
  },

  password: {
    value: '',
    get isValid() {
      return /^[A-Za-z0-9]{6,12}$/.test(this.value);
    },
    error: '영문 또는 숫자를 6~12자 입력하세요.',
  },

  get isValid() {
    return this.userid.isValid && this.password.isValid;
  },
};

const signupSchema = {
  ...signinSchema,

  username: {
    value: '',
    get isValid() {
      return !!this.value;
    },
    error: '이름을 입력해 주세요',
  },

  'confirm-password': {
    value: '',
    get isValid() {
      return signupSchema.password.value === this.value;
    },
    error: '패스워드가 일치하지 않습니다.',
  },

  get isValid() {
    return this.userid.isValid && this.password.isValid && this.username.isValid && this['confirm-password'].isValid;
  },
};

export { signinSchema, signupSchema };
