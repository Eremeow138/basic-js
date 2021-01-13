const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr, depth = 0, a = 0 ) {

    // throw new CustomError('Not implemented');
    // remove line with error and write your code here

    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {

        a = this.calculateDepth(arr[i]);

        if (a > depth) {
          depth = a;
        }
      }
      return depth + 1;
    }else{
      return 0;
    }

  }
  // calculateDepth(arr, inn = '>', space = '-',spacetwo = '*',out = '<', depth = 0, a = 0, ) {
  //   console.log(inn);
  //   console.log(arr);
  //   console.log(space);
  //   // throw new CustomError('Not implemented');
  //   // remove line with error and write your code here

  //   if (Array.isArray(arr)) {
  //     for (let i = 0; i < arr.length; i++) {

  //       a = this.calculateDepth(arr[i], inn+'>', space+'-', spacetwo+'*', out+'<');

  //       if (a > depth) {
  //         console.log('if a('+a +') > depth('+depth+')');
  //         depth = a;
  //         a = 0;
  //         console.log('depth= '+depth);
  //         console.log('a= '+a);
  //       }

  //     }
  //     console.log(out);
  //     console.log(1 + depth);
  //     console.log(spacetwo);
  //     return depth + 1;
  //   }else{

  //     return 0;
  //   }

  // }
};