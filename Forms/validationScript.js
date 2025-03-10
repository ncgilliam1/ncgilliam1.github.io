// JavaScript code for form validation

// Prevent form from submitting
// Retrieve the input field value


// Regular expression pattern for alphanumeric input
// Check if the input value matches the pattern

    // Valid input: display confirmation and submit the form

    // Invalid input: display error message

const form = document.querySelector("#myForm");
const inputField = document.querySelector("#inputField");

form.addEventListener("submit", validateInput)

function validateInput(e) {

  e.preventDefault();

  var userInput = document.forms['myForm'].elements['inputField'].value;
  const regex = /^[a-zA-Z0-9]*$/;

  if (!regex.test(userInput)) {
    alert('Input must only contain alphanumeric values.')
    return false; 
  } else if (userInput == '') {
    alert('Input value empty.')
    return false; 
  } else {
    alert('Input valid and form submitted!')
    form.submit()
  }
};

