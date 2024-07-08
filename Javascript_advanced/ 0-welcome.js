const welcome = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;

    const displayFullName = () => {
        alert(`Welcome ${fullName}!`);
    };

    displayFullName();
};

// Test the function
welcome('Holberton', 'School');
