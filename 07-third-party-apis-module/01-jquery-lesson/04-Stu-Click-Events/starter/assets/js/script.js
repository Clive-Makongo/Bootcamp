var passwordBtnEl = $('#password-btn');
var passwordDisplayEl = $('#password-display');

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  let pass = String.fromCharCode(Math.floor(Math.random() * 77) + 34);
  console.log(pass);
  return pass
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
  password += getPasswordCharacter();
  console.log(password);
  }
  return password;
}

passwordBtnEl.on('click', function () {
  var newPassword = passwordGenerator(25);
  passwordDisplayEl.text(newPassword);
});
