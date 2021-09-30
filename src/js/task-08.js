const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

const database = {};

const isEmpty = function () {
    if (form.email.value === "" || form.password.value === "") {
    alert("Fill all fields");
      }
      return;
}

const inputReset = function () {
    form.reset();
}

function onFormSubmit(event) {
    event.preventDefault(); 
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value; 
    const password = formElements.password.value; 
    const formData = {
        email,
        password,
    }
    console.log(formData);
    isEmpty();
    inputReset();
};

