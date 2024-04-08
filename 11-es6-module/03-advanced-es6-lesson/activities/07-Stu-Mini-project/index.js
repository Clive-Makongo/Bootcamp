const fs = require(`fs`);
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your location?",
      name: "location",
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm",
    },
  ])
  .then((response) => 
    fs.writeFile("index.html", html, (err) =>
      err ? console.error(err) : console.log(response)
    )
  );