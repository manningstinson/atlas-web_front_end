// Create a variable named globalVariable with value Welcome
const globalVariable = "Welcome";

// Create a function outer
const outer = () => {
  // Log the content of the variable globalVariable
  console.log(globalVariable);

  // Create a variable named course with value Holberton
  const course = "Holberton";

  // Create a function inner
  const inner = () => {
    // Log the content of the variable globalVariable and course (concatenated)
    console.log(`${globalVariable} ${course}`);

    // Create a variable named exclamation with value !
    const exclamation = "!";

    // Create a function inception that logs the content of the variable globalVariable, course, and exclamation (concatenated)
    const inception = () => {
      console.log(`${globalVariable} ${course}${exclamation}`);
    };

    // Call the function inception
    inception();
  };

  // Call the function inner
  inner();
};

// Call the function outer in the main code (outside any function)
outer();
