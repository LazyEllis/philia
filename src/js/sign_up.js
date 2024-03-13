// Import common functionality
import {
  toggleInputs,
  toggleHidden,
  toggleActive,
  validatePage,
} from "./common";

// DOM elements
const subheadings = document.querySelectorAll(".subheading");
const paginationCircles = document.querySelectorAll(".pagination-circle");
const pages = document.querySelectorAll(".page");
const securityInput = document.querySelectorAll("input[name=security]");
const securityQuestion = document.querySelector(".security-question");
const securityQuestionInputs = document.querySelectorAll(
  ".security-question input"
);
const accountPin = document.querySelector(".account-pin");
const accountPinInputs = document.querySelectorAll(".account-pin input");
const nextButtonContainer = document.querySelector(".next-button-container");
const submitButtonContainer = document.querySelector(
  ".submit-button-container"
);
const nextButton = document.querySelector(".next-button");
const alternativeLink = document.querySelector(".alternative-link");

// Function to handle page transition
const changePage = () => {
  const currentPage = document.querySelector(".page:not(.d-none)");
  if (validatePage()) {
    if (currentPage.nextElementSibling.dataset.page !== "1") {
      alternativeLink.classList.add("d-none");
    }

    if (currentPage.nextElementSibling.dataset.page === "3") {
      toggleHidden(nextButtonContainer, submitButtonContainer);
    }

    toggleHidden(
      subheadings[currentPage.dataset.page - 1],
      subheadings[currentPage.nextElementSibling.dataset.page - 1]
    );
    toggleHidden(currentPage, currentPage.nextElementSibling);
    toggleActive(
      paginationCircles[currentPage.dataset.page - 1],
      paginationCircles[currentPage.nextElementSibling.dataset.page - 1]
    );
  }
};

// Function to handle security input change
const changeSecurityInput = (e) => {
  if (e.target.checked === true && e.target.value === "securityQuestion") {
    toggleHidden(securityQuestion, accountPin);
    toggleInputs(...accountPinInputs, ...securityQuestionInputs);
  } else if (e.target.checked === true && e.target.value === "accountPin") {
    toggleHidden(accountPin, securityQuestion);
    toggleInputs(...securityQuestionInputs, ...accountPinInputs);
  }
};

// Event listeners
nextButton.addEventListener("click", changePage);
securityInput.forEach((input) => {
  input.addEventListener("change", changeSecurityInput);
});
