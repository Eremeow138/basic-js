const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw Error;
  }
  if(arr.find(item => item === '--discard-next' || item === '--discard-prev' || item === '--double-prev' || item === '--double-next' ) === undefined){
    return arr;
  }

  let transArr = [];
  for (let i = 0; i < arr.length; i++) {

    if(arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' || arr[i] === '--double-prev' ){
      continue;
    }
    if(arr[i-1] === '--discard-next'){
      continue;
    }
    if (arr[i-1] === '--double-next') {
      transArr.push(arr[i]);
      transArr.push(arr[i]);
      // continue;
    }
    if (arr[i+1] === '--discard-prev') {
      if(arr[i-1] === '--double-next'){
        transArr.pop();
        continue;
      }else{
        continue;
      }

    }
    if (arr[i+1] === '--double-prev') {
      if (arr[i-1] === '--double-next') {
        transArr.push(arr[i]);
        continue;
      }else{
        transArr.push(arr[i]);
        transArr.push(arr[i]);
        continue;
      }

    }
    if(arr[i-1] !== '--double-next'){
      transArr.push(arr[i]);
    }
  }
  return transArr;

};
