function Algo() { }

Algo.prototype.reverse = function (str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;

};

Algo.prototype.isPalindrome = function (str) { };

Algo.prototype.capitalize = function (str) { };

module.exports = Algo;
