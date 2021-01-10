const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let answer = {};
  answer.turns = Math.pow(2,disksNumber) - 1;
  answer.seconds = Math.floor(answer.turns / (turnsSpeed / 60 /60));
  return answer;
};
