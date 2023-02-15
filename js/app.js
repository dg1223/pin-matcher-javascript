function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    console.log("Pin is not 4-digit: ", pin);
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typedNumbersField = document.getElementById("typed-numbers");
    const previousTypedNumber = typedNumbersField.value;
    if (isNaN(number)) {
      if (number === "C") {
        typedNumbersField.value = "";
        document.getElementById("notify").style.display = "none";
      } else if (number === "<") {
        const digits = previousTypedNumber.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        typedNumbersField.value = remainingDigits;
      }
    } else {
      const newTypedNumber = previousTypedNumber + number;
      typedNumbersField.value = newTypedNumber;
    }
  });

document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const currentPin = displayPinField.value;

  const typedNumberField = document.getElementById("typed-numbers");
  const typedNumber = typedNumberField.value;

  const pinSuccessMEssage = document.getElementById("pin-success");
  const pinFailureMessage = document.getElementById("pin-failure");

  if (typedNumber === currentPin) {
    pinSuccessMEssage.style.display = "block";
    pinFailureMessage.style.display = "none";
  } else {
    pinFailureMessage.style.display = "block";
    pinSuccessMEssage.style.display = "none";
  }
});
