function capitalizeFirstLetters(input){
  var newStr = "";

  input.split (" ").forEach(function(input) {
    newStr = newStr + " " + input.substring(0, 1).toUpperCase() + input.substring(1);
  });

  return newStr.substr(1);
}




const assert = require('assert');

assert.strictEqual(typeof capitalizeFirstLetters, 'function');


assert.strictEqual(capitalizeFirstLetters('premier test tdd'), 'Premier Test Tdd');

assert.strictEqual(capitalizeFirstLetters(''), '');

assert.strictEqual(capitalizeFirstLetters('javascript'), 'Javascript');


