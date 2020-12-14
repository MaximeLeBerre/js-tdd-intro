function capitalizeFirstLetters(input){
  var newStr = "";

  input.split (" ").forEach(function(input) {
    newStr = newStr + " " + input.substring(0, 1).toUpperCase() + input.substring(1);
  });

  return newStr.substr(1);
}



module.exports = capitalizeFirstLetters;