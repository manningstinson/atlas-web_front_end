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

// Test the closures
console.log(addBy100(50)); // Should print 150
console.log(addBy1000(50)); // Should print 1050
console.log(divideBy10(50)); // Should print 5
console.log(divideBy100(50)); // Should print 0.5
