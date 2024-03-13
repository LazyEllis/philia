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

const toggleInputs = (...inputs) => {
  inputs.forEach((input) => {
    input.disabled = !input.disabled;
  });
};

const toggleHidden = (...elements) => {
  elements.forEach((element) => {
    element.classList.toggle("d-none");
  });
};

const toggleActive = (...circles) => {
  circles.forEach((circle) => {
    circle.classList.toggle("active");
  });
};

const validatePage = () => {
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

const changeSecurityInput = (e) => {
  if (e.target.checked === true && e.target.value === "securityQuestion") {
    toggleHidden(securityQuestion, accountPin);
    toggleInputs(...accountPinInputs, ...securityQuestionInputs);
  } else if (e.target.checked === true && e.target.value === "accountPin") {
    toggleHidden(accountPin, securityQuestion);
    toggleInputs(...securityQuestionInputs, ...accountPinInputs);
  }
};

nextButton.addEventListener("click", changePage);
securityInput.forEach((input) => {
  input.addEventListener("change", changeSecurityInput);
});
