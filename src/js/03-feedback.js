import throttle from 'lodash.throttle';



const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

const formKey = "feedback-form-state";

let formData = {
  email: "",
  message: "",
}
form.addEventListener("input", throttle(onFormInput, 500));

function onFormInput(event) {
  formData[event.target.name]  = event.target.value;
  localStorage.setItem(formKey, JSON.stringify(formData));
};

form.addEventListener('submit', throttle(onFormSubmit, 500));

function onFormSubmit(event) {
  event.preventDefault();

}
