//To do: Validate the card details form

//Update card details on empty card image in real-time

const cardholderName = document.querySelector('#name');
const cardNumber = document.querySelector('#number');
const cardExpMonth = document.querySelector('#exp-date-month');
const cardExpYear = document.querySelector('#exp-date-year');
const cardCVV = document.querySelector('#cvv');
const formUser = document.querySelector('#card-info-form');

const nameOnCardImg = document.querySelector('.cardholder-name span');
const numOnCardImg = document.querySelector('.card-number p');
const expMonthOnCardImg = document.querySelector('#card-month');
const expYearOnCardImg = document.querySelector('#card-year');
const cvvOnCardImg = document.querySelector('.card-cvv span');

const allInputs = document.querySelectorAll('input');
const arrayOfAllInputs = Array.from(allInputs);
const allNumInputs = document.querySelectorAll('.num-field');

const formHolder = document.querySelector('.form-wrapper');
const thankyouDisplay = document.querySelector('.completed-state');

let i=0, j=0;

const checkInputs = (inputs) => {
  // let i = 0;
  inputs.forEach((input) => {
    if (input.value === "") {
      input.nextElementSibling.classList.remove('hide');
      // console.log("correct");
      i++;
    }
    else if (input.classList.contains('num-field')) {
      console.log("non empty ip");
      checkFormats(input);
    }
  }
  );

}

const checkFormats = (input) => {
  // const regex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;//if num then this regex, else give diff regex
  // let i = 0;
  const regex = /^\d+$/;
  console.log("enter format check");

  if (!regex.test(input.value)) {

    input.nextElementSibling.nextElementSibling.classList.remove('hide');
    j++;
  }
  else{
    console.log("format ok");
  }

}

const loadThankYouContent = () => {
  formHolder.classList.add('hide');
  thankyouDisplay.classList.remove('hide');
}

cardholderName.addEventListener('keyup', () => {
  nameOnCardImg.innerText = cardholderName.value;
});

cardNumber.addEventListener('keyup', () => {
  numOnCardImg.innerText = cardNumber.value;
});

cardExpMonth.addEventListener('keyup', () => {
  expMonthOnCardImg.innerText = cardExpMonth.value;
});

cardExpYear.addEventListener('keyup', () => {
  expYearOnCardImg.innerText = cardExpYear.value;
});

cardCVV.addEventListener('keyup', () => {
  cvvOnCardImg.innerText = cardCVV.value;
});

formUser.addEventListener('submit', (event) => {
  console.log("hello");

  const allInputsAreFilled = checkInputs(arrayOfAllInputs);


  if (i === 0 && j===0) {
    // const allFormatsAreOk = checkFormats(arrayOfNumberFields);
    // if (allFormatsAreOk) {


       loadThankYouContent(); //Replace HTML of form-container part of the page.
      // console.log("good");
    // }
  }
  else {
    // event.preventDefault();
    // console.log("something wrong");

  }

});

document.querySelector('#continue').addEventListener('click', () => {
  formHolder.classList.remove('hide');
  thankyouDisplay.classList.add('hide');
  window.location.reload();
  // document.querySelector('#card-info-form').reset();
  // document.querySelector('.card-front .container').innerText = '';
  // document.querySelector('.card-back').innerText = '';

});
