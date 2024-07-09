const welcome = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;

  const displayFullName = () => {
    console.log(`Welcome ${fullName}!`);
  };

  displayFullName();
};

// Test the function
welcome("Holberton", "School");
