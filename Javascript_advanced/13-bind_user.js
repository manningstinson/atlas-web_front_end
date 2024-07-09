const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Buillaume",
  lastName: "Johns",
  location: "Netherlands",
  occupation: "Engineer",
};

function logWelcomeUser(welcomeString) {
  console.log(
    `${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`
  );
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);

// Call the function with the string 'Welcome'
bindLogWelcomeUser("Welcome");

// Call the function with another string 'Hello' for demonstration
bindLogWelcomeUser("Hello");
