/* eslint-disable import/extensions */
import { signinSchema, signupSchema } from './schema.js';
import toaster from './toaster.js';

const $signinForm = document.querySelector('.signin.form');
const $signupForm = document.querySelector('.signup.form');
const $signinFormSubmit = document.querySelector('.signin.button');
const $signupFormSubmit = document.querySelector('.signup.button');

let currentForm = 'signin';
let schema = signinSchema;
let $currentForm = $signinForm;
let $currentFormSubmit = $signinFormSubmit;

const toggleAdornment = inputName => {
  $currentForm
    .querySelector(`input[name=${inputName}] ~ .icon-success`)
    .classList.toggle('hidden', !schema[inputName].isValid);

  $currentForm
    .querySelector(`input[name=${inputName}] ~ .icon-error`)
    .classList.toggle('hidden', schema[inputName].isValid);
};

const setErrorMessage = inputName => {
  $currentForm.querySelector(`input[name=${inputName}] ~ .error`).textContent = schema[inputName].isValid
    ? ''
    : schema[inputName].error;
};

const activateSubmitButton = () => {
  $currentFormSubmit.disabled = !schema.isValid;
};

const toggleCurrentForm = () => {
  if (currentForm === 'signin') {
    currentForm = 'signup';
    schema = signupSchema;
    $currentForm = $signupForm;
    $currentFormSubmit = $signupFormSubmit;
  } else {
    currentForm = 'signin';
    schema = signinSchema;
    $currentForm = $signinForm;
    $currentFormSubmit = $signinFormSubmit;
  }

  document.querySelectorAll('.form').forEach($form => $form.classList.toggle('hidden'));
};

const validate = _.throttle(
  e => {
    const { name, value } = e.target;
    schema[name].value = value.trim();

    toggleAdornment(name);
    setErrorMessage(name);
    activateSubmitButton();
  },
  400,
  { leading: false }
);

const request = e => {
  // submit 이벤트
  e.preventDefault();
  const payload = [...new FormData($currentForm)].reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});

  console.log(`POST / ${currentForm}`, payload);

  toaster.render({ type: 'success', title: 'Well done!', message: `${currentForm} Successfully` });
};

[$signinForm, $signupForm].forEach($form => {
  $form.oninput = validate;
  $form.onsubmit = request;
  $form.querySelector('.link > a').onclick = toggleCurrentForm;
});

// const payload = [...new FormData($currentForm)].reduce(
//   // eslint-disable-next-line no-return-assign, no-sequences
//   (obj, [key, value]) => ((obj[key] = value), obj),
//   {}
// );
