import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const inputEmailEl = document.querySelector('input');
const inputMessageEl = document.querySelector('textarea');

const FEEDBACK_FORM = 'feedback-form-state';

formEl.addEventListener('input', formInput);
formEl.addEventListener('submit', formSubmit);

let formData = {};

function formInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function formSubmit(e) {
  e.preventDefault();
  JSON.parse(localStorage.getItem(FEEDBACK_FORM));
  formEl.reset();
}
