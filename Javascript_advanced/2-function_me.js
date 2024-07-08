// Write a function named welcomeMessage
const welcomeMessage = (fullName) => {
  // It should be a closure for an alert displaying Welcome <fullName>
  return () => {
    alert(`Welcome ${fullName}`);
  };
};

// After this function definition, create three variables
const guillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");
