// Write a function named welcomeMessage
const welcomeMessage = (fullName) => {
  // It should be a closure for a console.log displaying Welcome <fullName>
  return () => {
    console.log(`Welcome ${fullName}`);
  };
};

// After this function definition, create three variables
const guillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");

// Test the closures by calling them
guillaume();
alex();
fred();
