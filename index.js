//To do: Validate the card details form

//Update card details on empty card image in real-time

const cardholderName = document.querySelector('#person');
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

let i = 0, j = 0;

const checkInputs = (inputs) => {
  inputs.forEach((input) => {
    if (input.value === "") {
      // input.nextElementSibling.classList.remove('hide');
      input.nextElementSibling.style.display = 'block';
      input.nextElementSibling.innerText = "Can't be blank";
      input.style.borderColor = "hsl(0, 100%, 66%)";
      i++;
    }

    else if (input.value !== 0){
      input.nextElementSibling.style.display = 'none';
      input.nextElementSibling.innerText = "";
      input.style.borderColor = "";
      if(input.classList.contains('num-field')) {
          checkLength(input);
          if (i === 0) {
            checkFormats(input);
          }
        }
    }
  }
);
}

const checkLength = (input) => {
  const len = input.value.length;
  let expectedLen = 0;
  if (input.id === 'number') {
    expectedLen = 19;
    if (len !== expectedLen) {
      document.querySelectorAll('.badlength')[0].style.display = 'block';
      document.querySelectorAll('.badlength')[0].innerText = 'Input too short..';
      input.style.borderColor = "hsl(0, 100%, 66%)";
      i++;
    }
    else{
      document.querySelectorAll('.badlength')[0].style.display = 'none';
      document.querySelectorAll('.badlength')[0].innerText = '';
      input.style.borderColor = "";
    }
  }
  else if (input.id === 'exp-date-month' || input.id === 'exp-date-year') {
    expectedLen = 2;
    if (len !== expectedLen) {
      // document.querySelectorAll('.badlength')[1].classList.remove('hide');
      document.querySelectorAll('.badlength')[1].style.display = 'block';
      document.querySelectorAll('.badlength')[1].innerText = 'Input too short..';
      input.style.borderColor = "hsl(0, 100%, 66%)";
      i++;
    }
    else{
      document.querySelectorAll('.badlength')[1].style.display = 'none';
      document.querySelectorAll('.badlength')[1].innerText = '';
      input.style.borderColor = "";
    }
  }
  else {
    expectedLen = 3;
    if (len !== expectedLen) {
      document.querySelectorAll('.badlength')[2].style.display = 'block';
      document.querySelectorAll('.badlength')[2].innerText = 'Input too short..';
      input.style.borderColor = "hsl(0, 100%, 66%)";
      i++;
    }
    else{
      document.querySelectorAll('.badlength')[2].style.display = 'none';
      document.querySelectorAll('.badlength')[2].innerText = '';
      input.style.borderColor = "";
    }
  }
}

const checkFormats = (input) => {
  let regex = /^$/;
  if (input.value.length > 3) {
    regex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  }
  else {
    regex = /^\d+$/;
  }

  if (!regex.test(input.value)) {
    input.nextElementSibling.style.display = 'block';
    input.nextElementSibling.innerText = "Can't be blank";
    input.style.borderColor = "hsl(0, 100%, 66%)";
    i++;
  }
  else{
    input.nextElementSibling.style.display = 'none';
    input.style.borderColor = "none";
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
  const allInputsAreFilled = checkInputs(arrayOfAllInputs);


  if (i === 0/* && j === 0*/) {
    loadThankYouContent();
  }
  else {
    i = 0;

    // const errorTags = document.querySelectorAll('.error');
    // for (const errorTag of errorTags) {
    //   errorTag.classList.add('hide');
    // }

    // for (const inputBox of allInputs) {
    //   inputBox.style.borderColor = "hsl(278, 68%, 11%)";
    // }
  }
});

document.querySelector('#continue').addEventListener('click', () => {
  // formHolder.classList.remove('hide');
  // thankyouDisplay.classList.add('hide');
  window.location.reload();
});
