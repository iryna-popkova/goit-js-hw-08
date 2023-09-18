import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

const formKey = "feedback-form-state";

let formData = {
  email: "",
  message: "",
}

const storedDataForm = localStorage.getItem(formKey);

if (storedDataForm && storedDataForm != "") {
  const parsed = JSON.parse(storedDataForm)
  formData.email = parsed.email;
  formData.message = parsed.message;
  input.value = parsed.email;
  textArea.value = parsed.message

}

form.addEventListener("input", throttle(onFormInput, 500));

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(formKey, JSON.stringify(formData));
  console.log(formData);
};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
if (input.value === "" || textArea.value === "") {
    window.alert("Всі поля мають бути заповненні!!!")
  } else { console.log(formData) };

  event.preventDefault();
  formData.email = input.value;
  formData.message = textArea.value;
  input.value = "";
  textArea.value = "";
  localStorage.removeItem(formKey);
}



