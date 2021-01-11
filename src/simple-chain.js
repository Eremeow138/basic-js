const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : '',
  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.split('~~').length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (value === undefined) {
      value = '';
    }

    (this.chain !== '') ? this.chain += '~~( ' + value + ' )' : this.chain += '( ' + value + ' )';
    return this;

  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (typeof(position) !== 'number' && (position ^ 0) !== position) {
      this.chain = '';
      throw new Error('Error');
    }

    let c = this.chain.split('~~');
    c.splice(position-1,1);
    this.chain = c.join('~~');
    return this;
  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let b = this.chain;
    this.chain = '';
    return b;
  }
};

module.exports = chainMaker;
