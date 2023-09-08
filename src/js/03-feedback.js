
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

const formKey = "feedback-form-state";

let formData = {
  email: "",
  message: "",
}
form.addEventListener("input", onFormInput);

function onFormInput(event) {
  formData[event.target.name]  = event.target.value;
  localStorage.setItem(formKey, JSON.stringify(formData));
};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

}
