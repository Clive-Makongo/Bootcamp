const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password",
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm",
    },
  ])
  .then((response) =>
    fs.writeFile("log.txt", `${response}`, (err) =>
      err ? console.error(err) : console.log("Success!")
    )
  );
