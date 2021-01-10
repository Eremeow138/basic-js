const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (isNaN(Date.parse(date)) || typeof(+date) !== 'number') {
    throw Error
  }
  let mount = date.getMonth();
  // console.log(mount);
  if (mount === 11 || (mount >= 0 && mount <= 1)) {
    return 'winter';
  }
  if (mount >= 2 && mount <= 4) {
    return 'spring';
  }
  if (mount >= 5 && mount <= 7) {
    return 'summer';
  }
  if (mount >= 8 && mount <= 10) {
    return 'autumn';
  }
};
