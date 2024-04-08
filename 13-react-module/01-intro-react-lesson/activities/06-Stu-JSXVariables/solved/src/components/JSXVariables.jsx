import React from "react";

const name = "Christian";
const thoughts = "is amazing!!!";

const stripVowels = str => {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
      result += str[i];
    }
  }
  return result;
};

function JSXVariables() {
  return (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Hi! My name is ({name})</h1>
          <h2>My name has ({name.length}) letters</h2>
          <h2>My name without any vowels is: ({stripVowels(name)})</h2>
          <h2>I think React ({thoughts})</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
