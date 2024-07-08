// Create a variable named globalVariable with value Welcome
const globalVariable = "Welcome";

// Create a function outer
const outer = () => {
  // Alert the content of the variable globalVariable
  alert(globalVariable);

  // Create a variable named course with value Holberton
  const course = "Holberton";

  // Create a function inner
  const inner = () => {
    // Alert the content of the variable globalVariable and course (concatenated)
    alert(`${globalVariable} ${course}`);

    // Create a variable named exclamation with value !
    const exclamation = "!";

    // Create a function inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)
    const inception = () => {
      alert(`${globalVariable} ${course}${exclamation}`);
    };

    // Call the function inception
    inception();
  };

  // Call the function inner
  inner();
};

// Call the function outer in the main code (outside any function)
outer();
