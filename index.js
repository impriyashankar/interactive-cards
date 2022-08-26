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
    let errorBox = input.closest('div').querySelector('.blank');
    if (input.value === "") {
      errorBox.style.display = 'block';
      errorBox.innerText = "Can't be blank";
      input.style.borderColor = "hsl(0, 100%, 66%)";
      i++;
    }

    else if (input.value !== 0){
      errorBox.style.display = 'none';
      errorBox.innerText = "";
      input.style.borderColor = "";
      if(input.classList.contains('num-field')) {
          checkLength(input);
          console.log(i);
        }
    }
  }
);
}

const checkLength = (input) => {
  const len = input.value.length;
  let expectedLen = 0;
  if (input.id === 'number') {
    expectedLen = 16;
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
      checkFormats(input);
    }
  }
  else if (input.id === 'exp-date-month' || input.id === 'exp-date-year') {
    expectedLen = 2;
    if (len !== expectedLen) {
      document.querySelectorAll('.badlength')[1].style.display = 'block';
      document.querySelectorAll('.badlength')[1].innerText = 'Input too short..';
      input.style.borderColor = "hsl(0, 100%, 66%)";
      i++;
    }
    else{
      document.querySelectorAll('.badlength')[1].style.display = 'none';
      document.querySelectorAll('.badlength')[1].innerText = '';
      input.style.borderColor = "";
      checkFormats(input);
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
      checkFormats(input);
    }
  }
}

const checkFormats = (input) => {
  console.log("enter format check");
  let regex = /^$/;
  let errorBox = input.closest('div').querySelector('.badformat');
  if (input.value.length > 3) {
    regex = /^\d{16}$/;
  }
  else {
    regex = /^\d+$/;
  }

  if (!regex.test(input.value)) {
    errorBox.style.display = 'block';
    errorBox.innerText = "Incorrect format, only numbers";
    input.style.borderColor = "hsl(0, 100%, 66%)";
    i++;
  }
  else{
    errorBox.style.display = 'none';
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
  const cnum = cardNumber.value;
  numOnCardImg.innerText = cnum.toString().match(/.{1,4}/g).join(' ');//To create space between every 4 digits of the card number
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
  }
});

document.querySelector('#continue').addEventListener('click', () => {
  window.location.reload();
});
