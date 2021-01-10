const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(typeof(sampleActivity) !== 'string'){
    return false;
  }
  if(Number.isFinite(+sampleActivity) || Number.isNaN(+sampleActivity)){
    return false;
  }

  return Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD);
};
