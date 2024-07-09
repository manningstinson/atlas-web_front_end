// Function divideBy
function divideBy(firstNumber) {
  return function (secondNumber) {
    return secondNumber / firstNumber;
  };
}

// Function addBy
function addBy(firstNumber) {
  return function (secondNumber) {
    return firstNumber + secondNumber;
  };
}

// Creating the closures
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
