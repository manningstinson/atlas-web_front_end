const axios = require("axios");

function createElement(data) {
  console.log(data); // In Node.js, we use console.log instead of manipulating the DOM
}

function queryWikipedia(callback) {
  const url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

  axios
    .get(url)
    .then((response) => {
      const page = response.data.query.pages;
      const pageId = Object.keys(page)[0];
      const extract = page[pageId].extract;
      callback(extract);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

queryWikipedia(createElement);
