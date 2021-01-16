const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let strToReturn = '';
  let separator = '+';
  let additionSeparator = '|';
  let repeatTimes = 1;
  let additionRepeatTimes = 1;
  let addition = '';

  if (options.separator) {
    separator = options.separator;
  }
  if (options.additionSeparator) {
    additionSeparator = options.additionSeparator;
  }
  if (options.repeatTimes && options.repeatTimes !== undefined ) {
    repeatTimes  = options.repeatTimes;
  }
  if (options.additionRepeatTimes && options.repeatTimes !== undefined) {
    additionRepeatTimes   = options.additionRepeatTimes;
  }

  if ("addition" in options) {
    addition   = options.addition;
  }

  let i = 0;
  let j = 0;
  while (i<repeatTimes) {
    strToReturn += str;
      if (addition !== '') {
        while (j<additionRepeatTimes) {
          strToReturn += addition;
          if(j+1 !== additionRepeatTimes){
            strToReturn += additionSeparator;
          }
          j++;
        }
        j = 0;
      }
      if(i+1 !== repeatTimes){
        strToReturn += separator;
      }
    i++;
  }

  return strToReturn;
};
