const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }
  if(arr.find(item => item === '--discard-next' || item === '--discard-prev' || item === '--double-prev' || item === '--double-next' ) === undefined){
    return arr;
  }

  let transArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if(arr[i-2] !== '--discard-next'){
          transArr.pop();
        }
        break;
      case '--double-next':
        if(arr[i+1] !== undefined){
          transArr.push(arr[i+1]);
        }
        break;
      case '--double-prev':
        if(arr[i-1] !== undefined && arr[i-2] !== '--discard-next'){
          transArr.push(arr[i-1]);
        }
        break;
      default:
        transArr.push(arr[i]);
        break;
    }

  }
  
  return transArr;

};
