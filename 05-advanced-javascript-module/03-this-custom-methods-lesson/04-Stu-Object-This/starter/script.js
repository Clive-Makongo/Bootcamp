//Log the Window Object
console.log(this);

function helloThis() {
  //Log The Hello This Function
  console.log('Inside this function, this is ' + this);
}



var child = {
  age: 10,
  ageTenYears: function () {

    //Log Age of Child Object + 10
    console.log(this.age + 10);
  },
};

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {

      //Log Growth of Investmet by 115%
      console.log(this.initialInvestment * 1.15);
    },
  },
};


helloThis();
child.ageTenYears();
investor.investment.investmentGrowth();