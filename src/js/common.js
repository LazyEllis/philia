import * as bootstrap from "bootstrap";
import "../scss/common.scss";

// Function to close the alert after a delay
export const closeAlert = () => {
  setTimeout(() => {
    const alert = new bootstrap.Alert(document.querySelector(".alert"));
    alert.close();
  }, 750);
};

// Function to toggle the disabled attribute of inputs
export const toggleInputs = (...inputs) => {
  inputs.forEach((input) => {
    input.disabled = !input.disabled;
  });
};

// Function to toggle the visibility of elements
export const toggleHidden = (...elements) => {
  elements.forEach((element) => {
    element.classList.toggle("d-none");
  });
};

// Function to toggle the active class of elements
export const toggleActive = (...elements) => {
  elements.forEach((element) => {
    element.classList.toggle("active");
  });
};

// Function to validate the current page's inputs
export const validatePage = () => {
  const page = document.querySelector(".page:not(.d-none)");
  const inputs = page.querySelectorAll("input");
  let valid = true;
  let invalidInputs = [];

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      valid = false;
      invalidInputs.push(input);
    }
  });

  if (!valid) {
    invalidInputs[0].reportValidity();
  }

  return valid;
};

// Call the closeAlert function
closeAlert();
